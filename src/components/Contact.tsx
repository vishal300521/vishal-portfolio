import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../assets/styles/Contact.scss";

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "service_gmail",
        "template_rw7gg5d",
        form.current,
        {
          publicKey: "1ORUh_Ta0mC7Nl1-N",
        }
      );

      setStatus("Message sent successfully! I'll get back to you soon.");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus(
        "Sorry, something went wrong. Please try again or email me directly."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <div className="contact-heading">
          <h1>Contact Me</h1>
          <p>
            Have a question, project idea, or just want to connect?
            Feel free to send me a message.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info">
            <h2>Let's Talk</h2>

            <p>
              I'm always open to discussing new projects, opportunities,
              collaborations, or anything related to technology.
            </p>

            <div className="contact-email">
              <strong>Email</strong>
              <a href="mailto:vm603662@gmail.com">
                vm603662@gmail.com
              </a>
            </div>

            <div className="contact-note">
              <p>
                I'll try to respond to your message as soon as possible.
              </p>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
          >

            <div className="form-group">
              <label htmlFor="name">Your Name</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">Subject</label>

              <input
                type="text"
                id="title"
                name="title"
                placeholder="What is this about?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Write your message here..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="contact-submit"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="contact-status">
                {status}
              </p>
            )}

          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;