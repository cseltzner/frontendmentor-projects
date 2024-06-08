import "./Newsletter.css";
import iconList from "../../project-files/newsletter-sign-up-with-success-message-main/assets/images/icon-list.svg"
import newsletterIllustration from "../../project-files/newsletter-sign-up-with-success-message-main/assets/images/illustration-sign-up-desktop.svg"
import { FormEvent, useState } from "react";

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

interface Props {
    onSubmit: (email: string) => void;
}

const Newsletter = (props: Props) => {
  const [email, setEmail] = useState("");
  const [emailValidation, setEmailValidation] = useState({
    isTouched: false,
    isValid: false,
    errorMessage: ""
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (emailValidation.isValid) {
        props.onSubmit(email);
    }
  }

  const checkValidEmail = (email: string) => {
    if (!email) {
      setEmailValidation({
        isTouched: true,
        isValid: false,
        errorMessage: "Email required",
      });
      return;
    }
    if (!email.match(emailRegex)) {
        setEmailValidation({
            isTouched: true,
            isValid: false,
            errorMessage: "Valid email required"
        });
        return;
    }
    // Valid email
    setEmailValidation({
        isTouched: true,
        isValid: true,
        errorMessage: ""
    });
  };

  return (
    <>
      <div className="newsletter-card">
        <div className="newsletter-form-container">
            <h2 className="newsletter-title">Stay updated!</h2>
            <p className="newsletter-description">Join 60,000+ product managers receiving monthly updates on:</p>
            <ul className="newsletter-update-container">
                <li className="newsletter-update-item">
                    <img src={iconList} alt="success" className="newsletter-item-icon" />
                    <p className="newsletter-item-description">Product discovery and building what matters</p>
                </li>
                <li className="newsletter-update-item">
                    <img src={iconList} alt="success" className="newsletter-item-icon" />
                    <p className="newsletter-item-description">Measuring to ensure updates are a success</p>
                </li>
                <li className="newsletter-update-item">
                    <img src={iconList} alt="success" className="newsletter-item-icon" />
                    <p className="newsletter-item-description">And much more!</p>
                </li>
            </ul>
            <form className="newsletter-form" onSubmit={handleSubmit}>
                <div className="newsletter-label-container">
                    <label className="newsletter-label" htmlFor="email">Email address</label>
                    <p className="newsletter-input-validator-text">{emailValidation.errorMessage}</p>
                </div>
                <input className="newsletter-input" data-invalid={emailValidation.isTouched && !emailValidation.isValid} required type="email" name="email" id="email" placeholder="email@company.com" onChange={(ev) => setEmail(ev.target.value)} onBlur={(ev) => checkValidEmail(ev.target.value)} />
                <button className="newsletter-submit-btn" type="submit">Subscribe to monthly newsletter</button>
            </form>
        </div>
        <img className="newsletter-illustration" src={newsletterIllustration} alt="newsletter" />
      </div>
    </>
  )
}

export default Newsletter