import React from "react";

const Contact = () => {
  const handleFormSubmit = (formData) => {
    // console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries())
    console.log(formInputData);
    
    
  }
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Page</h2>
      <div className="container-wrapper">
        <form action={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Enter your name"
            autoComplete="false"
            required
          />

          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter your email"
            autoComplete="false"
            required
          />

          <textarea
            rows={10}
            className="form-control"
            name="message"
            placeholder="message"
            required
          />

          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
