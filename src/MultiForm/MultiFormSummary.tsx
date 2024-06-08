import "./MultiForm.css";
import { PlanTimeFrame, Plans, SummaryData } from "./MultiFormInterfaces";
import MultiFormSubmitButtons from "./MultiFormSubmitButtons";

interface Props {
    summaryData: SummaryData;
    onReturn: () => void;
    onSubmit: () => void;
}

const MultiFormSummary = (props: Props) => {
  const calculatePlanPrice = () => {
    const timeFrameMultiplier = props.summaryData.plan?.planTimeFrame === PlanTimeFrame.Yearly ? 12 : 1;
    let planCost = 0;
    switch (props.summaryData.plan?.plan) {
        case Plans.Arcade: 
            planCost = 9;
            break;
        case Plans.Advanced: 
            planCost = 12;
            break;
        case Plans.Pro:
            planCost = 15;
            break;
    }
    planCost = planCost * timeFrameMultiplier;
    return planCost;
  }

  const calculateTotalPrice = () => {
    const timeFrameMultiplier = props.summaryData.plan?.planTimeFrame === PlanTimeFrame.Yearly ? 12 : 1;
    let totalCost = calculatePlanPrice();
    if (props.summaryData.addons?.onlineService) totalCost = totalCost + (1 * timeFrameMultiplier);
    if (props.summaryData.addons?.expandedStorage) totalCost = totalCost + (2 * timeFrameMultiplier);
    if (props.summaryData.addons?.customizableProfile) totalCost = totalCost + (2 * timeFrameMultiplier);
    return totalCost;
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.onSubmit();
  }

  return (
    <form onSubmit={onSubmit}>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming</p>
      <div className="multiform-summary-table">
        <div className="multiform-summary-plan">
            <div className="multiform-summary-plan-start">
                <p>{props.summaryData.plan?.plan} ({props.summaryData.plan?.planTimeFrame})</p>
                <a href="#">Change</a>
            </div>
            <small>${calculatePlanPrice()}/{props.summaryData.plan?.planTimeFrame === PlanTimeFrame.Yearly ? "year" : "mo"}</small>
        </div>
        <hr />
        <div className="multiform-summary-addons">
            {props.summaryData.addons?.onlineService && (
                <div className="multiform-summary-addon">
                    <p>Online service</p>
                    <small>{props.summaryData.plan?.planTimeFrame === PlanTimeFrame.Yearly ? "+$12/year" : "+$1/mo"}</small>
                </div>
            )}
            {props.summaryData.addons?.expandedStorage && (
                <div className="multiform-summary-addon">
                    <p>Larger storage</p>
                    <small>{props.summaryData.plan?.planTimeFrame === PlanTimeFrame.Yearly ? "+$24/year" : "+$2/mo"}</small>
                </div>
            )}
            {props.summaryData.addons?.customizableProfile && (
                <div className="multiform-summary-addon">
                    <p>Customizable profile</p>
                    <small>{props.summaryData.plan?.planTimeFrame === PlanTimeFrame.Yearly ? "+$24/year" : "+$2/mo"}</small>
                </div>
            )}
        </div>
      </div>
      <div className="multiform-summary-total">
        <p>Total ({props.summaryData.plan?.planTimeFrame === PlanTimeFrame.Yearly ? "per year" : "per month"})</p>
        <small>+${calculateTotalPrice()}/{props.summaryData.plan?.planTimeFrame === PlanTimeFrame.Yearly ? "year" : "mo"}</small>
      </div>
      <MultiFormSubmitButtons currentStep={4} onReturn={props.onReturn} />
    </form>
  )
}

export default MultiFormSummary