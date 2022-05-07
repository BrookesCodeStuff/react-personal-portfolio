import React, { useState, useEffect } from "react";

function Contact() {
  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="email">Email Address:</label>
      <input type="text" name="email" id="email" />
      <label htmlFor="message">Message:</label>
      <textarea rows="5" name="message"></textarea>
    </form>
  );
}

export default Contact;
