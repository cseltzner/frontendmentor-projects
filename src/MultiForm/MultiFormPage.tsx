import { useState } from "react";
import MultiForm from "./MultiForm";
import "./MultiFormPage.css";
import { AddOns, MultiformValues, PersonalInfo, Plan, PlanTimeFrame, Plans, SummaryData } from "./MultiFormInterfaces";

const MultiFormPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>();
  const [plan, setPlan] = useState<Plan>();
  const [addons, setAddons] = useState<AddOns>();
  const summaryData: SummaryData = {
    personalInfo,
    plan,
    addons
  }

  const goPrevStep = () => {
    if (currentStep <= 1) return;
    setCurrentStep(curStep => curStep - 1);
  }

  const progressToPlanStep = (newPersonalInfo: PersonalInfo) => {
    setPersonalInfo(newPersonalInfo);
    setCurrentStep(2);
  }

  const progressToAddonsStep = (newPlan: Plan) => {
    setPlan(newPlan);
    setCurrentStep(3);
  }

  const progressToSummaryStep = (newAddons: AddOns) => {
    setAddons(newAddons);
    setCurrentStep(4);
  }

  const progressToFinalStep = () => {
    setCurrentStep(5);
  }

  const nextStepHandler = (values: MultiformValues) => {
    if (currentStep === 1) progressToPlanStep(values as PersonalInfo);
    if (currentStep === 2) progressToAddonsStep(values as Plan);
    if (currentStep === 3) progressToSummaryStep(values as AddOns);
    if (currentStep === 4) progressToFinalStep();
  }

  return (
    <>
      <div className="multiform-page">
        <MultiForm currentStep={currentStep} onNextStep={nextStepHandler} onPrevStep={goPrevStep} summaryData={summaryData} />
      </div>
    </>
  );
};

export default MultiFormPage;
