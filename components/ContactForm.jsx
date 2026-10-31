
"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
    const [state, handleSubmit] = useForm("xrppajyn");

    if (state.succeeded) {
        return (
            <p role="status" className="text-green-600 font-semibold">
                Enquiry sent successfully! We will contact you soon.
            </p>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">


            <input
                name="name"
                placeholder="Your full name"
                required
                maxLength={100}
                className="w-full rounded-lg border p-3"
            />

            <input
                name="email"
                type="email"
                placeholder="Email address"
                required
                maxLength={254}
                className="w-full rounded-lg border p-3"
            />

            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />

            <input
                name="phone"
                type="tel"
                placeholder="Phone number"
                required
                maxLength={30}
                className="w-full rounded-lg border p-3"
            />

            <select
                name="product"
                required
                defaultValue=""
                className="w-full rounded-lg border p-3"
            >
                <option value="" disabled>
                    Select a product
                </option>
                <option value="Earthing Electrode">
                    Earthing Electrode
                </option>
                <option value="Chemical Earthing">
                    Chemical Earthing
                </option>
                <option value="Lightning Protection">
                    Lightning Protection
                </option>
                <option value="Other">
                    Other
                </option>
            </select>

            <textarea
                name="message"
                placeholder="Tell us about your requirement"
                maxLength={3000}
                rows={4}
                className="w-full rounded-lg border p-3"
            />

            <button
                type="submit"
                disabled={state.submitting}
                className="w-full rounded-lg bg-[#00a2e8] p-3 font-semibold text-white disabled:opacity-60 hover:bg-[#00638d] hover:text-white hover:scale-[1.02] active:scale-[0.99] transition-all duration-300"
            >
                {state.submitting ? "Sending..." : "Request a Quote"}
            </button>

            <ValidationError errors={state.errors} />

        </form>
    );
}
