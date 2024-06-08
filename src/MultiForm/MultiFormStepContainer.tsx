import "./MultiForm.css";

interface Props {
    currentStep: number;
}

const MultiFormStepContainer = (props: Props) => {
  return (
    <>
      <div className="multiform-steps-container">
        <ul>
          <li>
            <div className="multiform-step" aria-current={props.currentStep === 1}>1</div>
            <div className="multiform-step-details">
              <p>STEP 1</p>
              <p>YOUR INFO</p>
            </div>
          </li>
          <li>
            <div className="multiform-step" aria-current={props.currentStep === 2}>2</div>
            <div className="multiform-step-details">
              <p>STEP 2</p>
              <p>SELECT PLAN</p>
            </div>
          </li>
          <li>
            <div className="multiform-step" aria-current={props.currentStep === 3}>3</div>
            <div className="multiform-step-details">
              <p>STEP 3</p>
              <p>ADD-ONS</p>
            </div>
          </li>
          <li>
            <div className="multiform-step" aria-current={props.currentStep === 4}>4</div>
            <div className="multiform-step-details">
              <p>STEP 4</p>
              <p>SUMMARY</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MultiFormStepContainer;
