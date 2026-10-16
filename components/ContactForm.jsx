"use client";

import { useState } from "react";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        const form = e.currentTarget;
        const formData = new FormData(form);

        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Submission failed.");
            }

            setStatus("Enquiry sent successfully!");
            form.reset();
        } catch (error) {
            setStatus(error.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
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
                disabled={loading}
                className="w-full rounded-lg bg-[#00a2e8] p-3 font-semibold text-white disabled:opacity-60 hover:bg-[#00638d] hover:text-white hover:scale-[1.02] active:scale-[0.99] transition-all duration-300"
            >
                {loading ? "Sending..." : "Request a Quote"}
            </button>

            {status && (
                <p role="status" aria-live="polite">
                    {status}
                </p>
            )}
        </form>
    );
}