import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleContact(event) {
    const text = event.target.value;
    const name = event.target.name;

    console.log("", text, name);

    const copy = { ...contact };

    copy[name] = text;
    setContact(copy);
  }

  function addContact() {
    console.log("the ", contact);
  }

  return (
    <div className="contact">
      <div class="contact-form">
        <span class="heading">Contact Us</span>
        <form>
          <label for="name">Name:</label>
          <input type="text" required="" onChange={handleContact} name="name" />
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            required=""
            onChange={handleContact}
            name="email"
          />
          <label for="message">Message:</label>
          <textarea
            id="message"
            required=""
            onChange={handleContact}
            name="message"
            // rows = '10'
          ></textarea>
          <button type="submit" onClick={addContact}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
