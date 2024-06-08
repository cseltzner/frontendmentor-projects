import "./MultiForm.css";

interface Props {
    currentStep: number;
    onReturn: () => void;
}

const MultiFormSubmitButtons = (props: Props) => {
  return (
    <>
      <div className="multiform-btn-container">
        {props.currentStep > 1 && (
          <button className="multiform-btn multiform-btn-outline" onClick={props.onReturn}>
            Go Back
          </button>
        )}
        <button type="submit" className="multiform-btn multiform-btn-bottom-left">
          {props.currentStep === 4 ? "Confirm" : "Next Step"}
        </button>
      </div>
    </>
  );
};

export default MultiFormSubmitButtons;
