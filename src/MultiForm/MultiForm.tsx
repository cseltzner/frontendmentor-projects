import "./MultiForm.css";
import MultiFormAddons from "./MultiFormAddons";
import MultiFormFinalStep from "./MultiFormFinalStep";
import { AddOns, MultiformValues, PersonalInfo, Plan, SummaryData } from "./MultiFormInterfaces";
import MultiFormPersonalInfo from "./MultiFormPersonalInfo";
import MultiFormPlan from "./MultiFormPlan";
import MultiFormStepContainer from "./MultiFormStepContainer";
import MultiFormSummary from "./MultiFormSummary";

interface Props {
  currentStep: number;
  onNextStep: (values: MultiformValues) => void;
  onPrevStep: () => void;
  summaryData: SummaryData
}

const MultiForm = (props: Props) => {

  let currentForm = <></>
  if (props.currentStep === 1) currentForm = <MultiFormPersonalInfo onSubmit={(values: PersonalInfo) => onSubmit(values)} onReturn={props.onPrevStep} />
  if (props.currentStep === 2) currentForm = <MultiFormPlan onSubmit={(values: Plan) => onSubmit(values)} onReturn={props.onPrevStep} />
  if (props.currentStep === 3) currentForm = <MultiFormAddons onSubmit={(values: AddOns) => onSubmit(values)} onReturn={props.onPrevStep} />
  if (props.currentStep === 4) currentForm = <MultiFormSummary onSubmit={() => props.onNextStep(undefined)} summaryData={props.summaryData} onReturn={props.onPrevStep} />
  if (props.currentStep === 5) currentForm = <MultiFormFinalStep />

  const onSubmit = (values: MultiformValues) => {
    props.onNextStep(values);
  }

  return (
    <>
      <div className="multiform-container">
        <MultiFormStepContainer currentStep={props.currentStep} />
        <div className="multiform-form-container">
          {currentForm}
        </div>
      </div>
    </>
  )
}

export default MultiForm