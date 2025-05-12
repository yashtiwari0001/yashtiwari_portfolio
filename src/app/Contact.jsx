import { useState, useEffect } from "react";
// npm install react-hook-form @web3forms/react
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import './Contact.css';
export default function Contact() {
  const { register, reset, handleSubmit } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);
  const accessKey = "757220a6-8c75-4ff1-babb-904a5e64e922";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Acme Inc",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  return (
    <div className="maindiv">
      <div className="firstdiv">
        <h1 className="contact">Contact Us</h1>
        <p className="cont">
        Feel free to contact me by submitting the form below and I will get back to you as soon as possible
        </p>
      </div>
      <div className="seconddiv">
        <div className="contact-container">
          <form id="contact-form" onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <input
              type="text"
              {...register("name", { required: true })}
              className="input-field"
              id="name"
              placeholder="Your Name"
            />
            <input
              type="email"
              {...register("email", { required: true })}
              className="input-field"
              id="email"
              placeholder="Your Email"
            />
            <input
              type="tel"
              {...register("phone", { required: true })}
              className="input-field"
              id="phone"
              placeholder="Your Phone Number"
            />
            <textarea
              {...register("message", { required: true })}
              className="input-field"
              id="message"
              placeholder="Your Message"
            ></textarea>
            <button type="submit" className="submit-button">Submit Form</button>
          </form>

          <div id="response-message" className={isSuccess ? 'success' : 'error'}>{result}</div>
        </div>
      </div>
    </div>
  );
}
