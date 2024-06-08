import "./Newsletter.css"
import success from "../../project-files/newsletter-sign-up-with-success-message-main/assets/images/icon-success.svg";

interface Props {
    email: string;
    onDismiss: () => void;
}

const NewsletterSuccess = (props: Props) => {
  return (
    <>
      <div className="newsletter-success-container">
        <img src={success} alt="checkmark" className="newsletter-success-icon" />
        <h2 className="newsletter-success-title">Thanks for subscribing!</h2>
        <p className="newsletter-success-description">A confirmation email has been sent to <span className="newsletter-success-email">{props.email}</span>. Please open it and click the button inside to confirm your subscription.</p>
        <button className="newsletter-submit-btn" onClick={props.onDismiss}>Dismiss message</button>
      </div>
    </>
  )
}

export default NewsletterSuccess