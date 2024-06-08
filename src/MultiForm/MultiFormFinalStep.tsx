import "./MultiForm.css";
import thankyou from "../../project-files/multi-step-form-main/assets/images/icon-thank-you.svg"

const MultiFormFinalStep = () => {
  return (
    <>
      <div className="multiform-final-container">
        <img src={thankyou} alt="Check mark" />
        <h1>Thank you!</h1>
        <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
      </div>
    </>
  )
}

export default MultiFormFinalStep