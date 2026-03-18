import { useState } from "react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxXe8xg3A0GwaspYZnkUSUxooRRGSupdb6tiBjIeWmgq9YwDpCGJhs7Jwn8fsNvaAQEzQ/exec";

const Contact = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
        }),
      });
      alert("Message sent successfully!");
      form.reset();
    } catch {
      alert("Something went wrong. Please try again.");
    }
    setSending(false);
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-section-alt text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contact Us</h2>
      <p className="max-w-xl mx-auto text-muted-foreground mb-10">
        We would love to hear from you. For inquiries or partnership opportunities, kindly reach out
        and we will respond within 24 hours.
      </p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
        <input
          name="name"
          placeholder="Your Name"
          required
          className="px-4 py-3 rounded bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className="px-4 py-3 rounded bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
        />
        <input
          name="phone"
          placeholder="Phone Number"
          className="px-4 py-3 rounded bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
        />
        <textarea
          name="message"
          rows={4}
          placeholder="Your Message"
          required
          className="px-4 py-3 rounded bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
        />
        <button
          type="submit"
          disabled={sending}
          className="bg-primary text-primary-foreground font-display text-lg py-3 rounded hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {sending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
