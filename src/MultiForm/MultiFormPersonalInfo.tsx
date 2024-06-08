import { useForm } from "react-hook-form";
import "./MultiForm.css";
import MultiFormSubmitButtons from "./MultiFormSubmitButtons";
import { PersonalInfo } from "./MultiFormInterfaces";

interface Props {
    onSubmit: (personalInfo: PersonalInfo) => void;
    onReturn: () => void;
}

const MultiFormPersonalInfo = (props: Props) => {
  const {register, handleSubmit, formState: { errors }} = useForm<PersonalInfo>({
    defaultValues: {
        name: "",
        email: "",
        phone: ""
    },
    mode: "onTouched"
  })

  const onSubmit = (values: PersonalInfo) => {
    props.onSubmit(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <div className="multiform-personal-inputs">
        <div className="multiform-personal-input-group">
            <div className="multiform-personal-input-label">
                <label htmlFor="name">Name</label>
                <small>{errors.name?.message}</small>
            </div>
            <input type="text" id="name" {...register("name", {required: {value: true, message: "Name is required"}})} />
        </div>
        <div className="multiform-personal-input-group">
            <div className="multiform-personal-input-label">
                <label htmlFor="email">Email Address</label>
                <small>{errors.email?.message}</small>
            </div>
            <input type="email" id="email" {...register("email", {required: {value: true, message: "Email is required"}, pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Please enter a valid email address"}})} />
        </div>
        <div className="multiform-personal-input-group">
            <div className="multiform-personal-input-label">
                <label htmlFor="phone">Phone Number</label>
                <small>{errors.phone?.message}</small>
            </div>
            <input type="tel" id="phone" {...register("phone", {required: {value: true, message: "Phone number is required"}, pattern: {value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, message: "Please enter a valid phone number"}})} />
        </div>
      </div>
      <MultiFormSubmitButtons currentStep={1} onReturn={props.onReturn} />
    </form>
  )
}

export default MultiFormPersonalInfo