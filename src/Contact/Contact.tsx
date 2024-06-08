import { useForm } from "react-hook-form";
import "./Contact.css";
import check from "../../project-files/contact-form-main/assets/images/icon-success-check.svg";
import { useState } from "react";

interface Inputs {
    firstName: string;
    lastName: string;
    email: string;
    queryType: string;
    message: string;
    consent: boolean;
}

const Contact = () => {
    const [isAlertActive, setIsAlertActive] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        } = useForm<Inputs>({
            defaultValues: {
                firstName: "",
                lastName: "",
                email: "",
                queryType: "",
                message: "",
                consent: false
            }
        })

  const onSubmit = (data: Inputs) => {
    reset();
    setIsAlertActive(true);
    setTimeout(() => {
        setIsAlertActive(false);
    }, 5000)
  }

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Contact Us</h1>
        <div className="contact-form-input-double">
            <div className="contact-form-input-group">
                <label htmlFor="firstName">First Name *</label>
                <input className="contact-input-text" {...register("firstName", {required: {value: true, message: "First name is required"}})} data-contact-error={errors.firstName?.message !== undefined} type="text" id="firstName" name="firstName" />
                <p className="contact-error-text">{errors.firstName?.message}</p>
            </div>
            <div className="contact-form-input-group">
                <label htmlFor="lastName">Last Name *</label>
                <input className="contact-input-text" {...register("lastName", {required: {value: true, message: "Last name is required"}})} data-contact-error={errors.lastName?.message !== undefined} type="text" id="lastName" name="lastName" />
                <p className="contact-error-text">{errors.lastName?.message}</p>
            </div>
        </div>
        <div className="contact-form-input-group">
            <label htmlFor="email">Email Address *</label>
            <input type="email" className="contact-input-text" {...register("email", {required: {value: true, message: "Please enter an email address"}, pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Please enter a valid email address"}})} data-contact-error={errors.email?.message !== undefined} id="email" name="email" />
            <p className="contact-error-text">{errors.email?.message}</p>
        </div>
        <fieldset className="contact-form-checkbox-double">
            <legend>Query Type *</legend>
            <div className="contact-form-input-double">
                <label htmlFor="enquiry">
                    <input type="radio" {...register("queryType", {required: {value: true, message: "Please select a query type"}})} id="enquiry" name="queryType" value="enquiry" /> <span className="contact-checkbox-text">General Enquiry</span>
                </label>
                <label htmlFor="support">
                    <input type="radio" {...register("queryType", {required: {value: true, message: "Please select a query type"}})} id="support" name="queryType" value="support" /> <span className="contact-checkbox-text">Support Request</span>
                </label>
                <p className="contact-error-text">{errors.queryType?.message}</p>
            </div>
        </fieldset>
        <div className="contact-form-input-group">
            <label htmlFor="message">Message</label>
            <textarea rows={4} {...register("message", {required: {value: true, message: "Message is required"}})} data-contact-error={errors.message?.message !== undefined} name="message" id="message"></textarea>
            <p className="contact-error-text">{errors.message?.message}</p>
        </div>
        <div className="contact-form-checkbox-group">
            <label htmlFor="consent"><input type="checkbox" {...register("consent", {required: {value: true, message: "To submit this form, please consent to being contacted"}})} name="consent" id="consent" /> <span className="contact-checkbox-label-text">I hereby consent to being contacted by the team *</span></label>
            <p className="contact-error-text">{errors.consent?.message}</p>
        </div>
        <button type="submit" className="contact-btn">Submit</button>
      </form>
      <div className="contact-alert" data-active={isAlertActive}>
        <div className="contact-alert-heading">
            <img src={check} alt="Checkmark" />
            <p>Message Sent!</p>
        </div>
        <p>Thanks for completing the form. We'll be in touch soon!</p>
      </div>
    </>
  )
}

export default Contact