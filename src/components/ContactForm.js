import React, { useState } from "react";
import "./ContactForm.css"

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit the form data to your server
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Your Name"
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Your Email"
      />
      <textarea
        name="message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Message"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
