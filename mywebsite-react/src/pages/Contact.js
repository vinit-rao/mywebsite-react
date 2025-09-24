import React from "react";

export default function Contact(){
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! I’ll reply soon.");
  };

  return (
    <section className="section">
      <div className="container">
        <h2>Contact</h2>
        <form className="card pad" onSubmit={onSubmit}>
          <label>
            <span className="label">Your email</span>
            <input required type="email" name="email" placeholder="you@example.com" className="input" />
          </label>

          <label>
            <span className="label">Message</span>
            <textarea required name="message" rows="5" placeholder="How can I help?" className="input"></textarea>
          </label>

          <button type="submit" className="chip btn-like">Send</button>
          <p className="hint">
            Prefer email? <a className="chip" href="mailto:you@example.com">you@example.com</a>
          </p>
        </form>
      </div>
    </section>
  );
}
