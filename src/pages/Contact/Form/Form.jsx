import React from "react";
import { useState } from "react";

const Form = () => {
  const [userInfo, setuserInfo] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  const [records, setrecords] = useState([]);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setuserInfo({ ...userInfo, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...userInfo, id: new Date().getTime().toString() };

    setrecords([...records, newRecord]);
    setuserInfo({ username: "", email: "", phone: "", message: "" });
  };

  return (
    <form action="" onSubmit={handleSubmit} class="form">
      <h1 class="lg-heading">Contact Me</h1>
      <p class="text-gray">
        Let me know your questions and thoughts about me by filling out the
        contact form below.
      </p>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          autocomplete="off"
          value={userInfo.username}
          onChange={handleInput}
          name="username"
          id="username"
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="text"
          autocomplete="off"
          value={userInfo.email}
          onChange={handleInput}
          name="email"
          id="email"
        />
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>
        <input
          type="text"
          autocomplete="off"
          value={userInfo.phone}
          onChange={handleInput}
          name="phone"
          id="phone"
        />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <input
          type="text"
          autocomplete="off"
          value={userInfo.message}
          onChange={handleInput}
          name="message"
          id="message"
        />
      </div>

      <button type="submit" class="form-btn">
        Submit
      </button>
    </form>
  );
};

export default Form;
