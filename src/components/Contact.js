import React, { useState } from "react";

function Contact() {
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({
    name: "Your Name",
    email: "Your Email",
    message: "Your Message...",
  });
  const { name, email, message } = formState;

  function handleChange(event) {
    if (event.target.name === "email") {
      const isValid = validateEmail(event.target.value);
      if (!isValid) {
        setErrorMessage("Your email address is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formState);
  }

  function validateEmail(email) {
    var re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <form
      className="flex flex-col md:w-1/2 mx-auto mt-8 justify-center content-center"
      onSubmit={handleSubmit}>
      <div className="my-2">
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          defaultValue={name}
          id="name"
          name="name"
          className="p-1 rounded-sm caret-slate-900 w-full"
          onBlur={handleChange}
        />
      </div>
      <div className="my-2">
        <label htmlFor="email">Email Address:</label>
        <br />
        <input
          type="text"
          name="email"
          id="email"
          defaultValue={email}
          className="rounded-sm p-1 w-full"
        />
      </div>
      <div className="my-2">
        <label htmlFor="message">Message:</label>
        <br />
        <textarea
          rows="5"
          name="message"
          defaultValue={message}
          className="rounded-sm p-1 w-full"></textarea>
      </div>
      {errorMessage && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}
      <button
        type="submit"
        className="p-2 rounded-full bg-slate-400 text-gray-900 shadow-black shadow-sm w-full md:w-40 self-center">
        Submit
      </button>
    </form>
  );
}

export default Contact;
