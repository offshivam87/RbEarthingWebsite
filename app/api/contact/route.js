import { Resend } from "resend";

export async function POST(request) {
    try {
        const { name, email, phone, product, message } =
            await request.json();

        if (
            !name?.trim() ||
            !email?.trim() ||
            !phone?.trim() ||
            !product?.trim()
        ) {
            return Response.json(
                { error: "Please fill all required fields." },
                { status: 400 }
            );
        }

        if (
            name.length > 100 ||
            email.length > 254 ||
            phone.length > 30 ||
            product.length > 150 ||
            (message?.length ?? 0) > 3000
        ) {
            return Response.json(
                { error: "One or more fields are too long." },
                { status: 400 }
            );
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return Response.json(
                { error: "Please enter a valid email." },
                { status: 400 }
            );
        }

        if (
            !process.env.RESEND_API_KEY ||
            !process.env.OWNER_EMAIL
        ) {
            return Response.json(
                { error: "Email service is not configured." },
                { status: 500 }
            );
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        const { error } = await resend.emails.send({
            from: "RB Earthing Website <onboarding@resend.dev>",
            to: [process.env.OWNER_EMAIL],
            replyTo: email,
            subject: `New RB Earthing Enquiry: ${product}`,
            text: `
New enquiry received from the RB Earthing website.

Name: ${name}
Email: ${email}
Phone: ${phone}
Product: ${product}

Message:
${message || "No message provided"}
      `,
        });

        if (error) {
            console.error("Email delivery request failed:", error);
            return Response.json(
                { error: "Could not send enquiry. Please try again." },
                { status: 500 }
            );
        }

        return Response.json(
            { success: true, message: "Enquiry submitted successfully!" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact API error:", error);

        return Response.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}