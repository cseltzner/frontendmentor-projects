import { useState } from "react";
import Newsletter from "./Newsletter";
import "./NewsletterPage.css";
import NewsletterSuccess from "./NewsletterSuccess";

const NewsletterPage = () => {
  const [submittedEmail, setSubmittedEmail] = useState("");

  const onSubmit = (email: string) => {
    setSubmittedEmail(email);
  };

  const onDismiss = () => {
    setSubmittedEmail("");
  }

  return (
    <>
      <div className="newsletter-page">
        {submittedEmail ? (
          <NewsletterSuccess email={submittedEmail} onDismiss={onDismiss} />
        ) : (
          <Newsletter onSubmit={(email) => onSubmit(email)} />
        )}
      </div>
    </>
  );
};

export default NewsletterPage;
