import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./contactCSS.css";
import gitHubImg from "../images/github.svg";
import linkedInImg from "../images/linkedin.svg";
import twitterImg from "../images/twitter.svg";
import whatsappImg from "../images/whatsapp.svg";

export default function Contact() {
  const [state, handleSubmit] = useForm("meqwepab");
  if (state.succeeded) {
    return (
      <>
        <div className="succeeded">
          <p>Thanks for contacting me!</p>
        </div>
      </>
    );
  }
  return (
    <>
      <h1>Contact me</h1>
      <div className="contact-area">
        <div className="contact">
          <div>
            <h1>Click on an image below to contact me</h1>
          </div>
          <div className="contact-images">
            <a
              href="https://www.github.com"
              alt="social media contact"
              target="_blank"
            >
              <img src={gitHubImg} />
            </a>
            <a
              href="https://www.linkedin.com"
              alt="social media contact"
              target="_blank"
            >
              <img src={linkedInImg} />
            </a>
            <a
              href="https://www.twitter.com"
              alt="social media contact"
              target="_blank"
            >
              <img src={twitterImg} />
            </a>
            <a
              href="https://www.google.com"
              alt="social media contact"
              target="_blank"
            >
              <img src={whatsappImg} />
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <h1>Or fill out the form to send me an email</h1>
          <label htmlFor="email">Your Email Address</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message">Your Message</label>
          <input id="message" name="message" className="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Send message
          </button>
        </form>
      </div>
    </>
  );
}
