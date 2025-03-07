"use client";
import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";

const validator = new SimpleReactValidator({
  className: "errorMessage",
});

const ContactForm = () => {
  const [forms, setForms] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const changeHandler = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
    if (validator.allValid()) {
      validator.hideMessages();
    } else {
      validator.showMessages();
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!validator.allValid()) {
      validator.showMessages();
      return;
    }

    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(forms),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage("Your message has been sent successfully!");
        setForms({
          name: "",
          email: "",
          subject: "",
          phone: "",
          message: "",
        });
      } else {
        setResponseMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form method="post" className="contact-validation-active" onSubmit={submitHandler}>
      <div className="row align-items-center">
        <div className="col-md-6 col-12">
          <div className="form-group">
            <label>Name*</label>
            <input
              value={forms.name}
              type="text"
              name="name"
              onBlur={changeHandler}
              onChange={changeHandler}
              className="form-control"
              placeholder="Your Name"
            />
            {validator.message("name", forms.name, "required|alpha_space")}
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="form-group">
            <label>Phone*</label>
            <input
              value={forms.phone}
              type="number"
              name="phone"
              onBlur={changeHandler}
              onChange={changeHandler}
              className="form-control"
              placeholder="Your Number"
            />
            {validator.message("phone", forms.phone, "required|numeric")}
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="form-group">
            <label>Subject*</label>
            <input
              value={forms.subject}
              type="text"
              name="subject"
              onBlur={changeHandler}
              onChange={changeHandler}
              className="form-control"
              placeholder="Subject"
            />
            {validator.message("subject", forms.subject, "required")}
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="form-group">
            <label>Email*</label>
            <input
              value={forms.email}
              type="email"
              name="email"
              onBlur={changeHandler}
              onChange={changeHandler}
              className="form-control"
              placeholder="Your Email"
            />
            {validator.message("email", forms.email, "required|email")}
          </div>
        </div>
        <div className="col-md-12">
          <div className="fullwidth form-group">
            <label>Message*</label>
            <textarea
              onBlur={changeHandler}
              onChange={changeHandler}
              value={forms.message}
              name="message"
              className="form-control"
              placeholder="Message"
            ></textarea>
            {validator.message("message", forms.message, "required")}
          </div>
        </div>
        <div className="col-md-5 col-12">
          <div className="submit-area">
            <button type="submit" className="theme-btn" disabled={loading}>
              {loading ? "Sending..." : "Submit now"}
            </button>
          </div>
        </div>
        {responseMessage && (
          <div className="col-md-12">
            <p className={responseMessage.includes("error") ? "error-message" : "success-message"}>
              {responseMessage}
            </p>
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
