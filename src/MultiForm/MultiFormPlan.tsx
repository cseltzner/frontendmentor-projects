import "./MultiForm.css";
import arcadeIcon from "../../project-files/multi-step-form-main/assets/images/icon-arcade.svg";
import advancedIcon from "../../project-files/multi-step-form-main/assets/images/icon-advanced.svg";
import proIcon from "../../project-files/multi-step-form-main/assets/images/icon-pro.svg";
import * as Switch from '@radix-ui/react-switch';
import MultiFormSubmitButtons from "./MultiFormSubmitButtons";
import { Plan, PlanTimeFrame, Plans } from "./MultiFormInterfaces";
import { useState } from "react";

interface Props {
    onSubmit: (values: Plan) => void;
    onReturn: () => void;
}

const MultiFormPlan = (props: Props) => {
      const [plan, setPlan] = useState<Plans>(Plans.Arcade);
      const [timeFrame, setTimeFrame] = useState<PlanTimeFrame>(PlanTimeFrame.Monthly);

      const onSubmitForm = (ev: React.FormEvent) => {
        ev.preventDefault();
        const planToSubmit: Plan = {
            plan: plan,
            planTimeFrame: timeFrame
        }

        props.onSubmit(planToSubmit);
      }

      const onPlanSelect = (plan: Plans) => {
        setPlan(plan);
      }

      const onTimeFrameToggle = () => {
        setTimeFrame(prevTime => prevTime === PlanTimeFrame.Monthly ? PlanTimeFrame.Yearly : PlanTimeFrame.Monthly);
      }

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
        <div className="multiform-plans-container">
            <div className="multiform-plan-group">
                <input type="radio" id="arcade" name="plans" checked={plan === Plans.Arcade} onChange={() => onPlanSelect(Plans.Arcade)} />
                <label htmlFor="arcade" className="multiform-plan-label">
                    <img src={arcadeIcon} alt="Arcade joystick" />
                    <p>Arcade</p>
                    <small>$9/mo</small>
                </label>
            </div>
            <div className="multiform-plan-group">
                <input type="radio" id="advanced" name="plans" checked={plan === Plans.Advanced} onChange={() => onPlanSelect(Plans.Advanced)} />
                <label htmlFor="advanced" className="multiform-plan-label">
                    <img src={advancedIcon} alt="Game controller" />
                    <p>Advanced</p>
                    <small>$12/mo</small>
                </label>
            </div>
            <div className="multiform-plan-group">
                <input type="radio" id="pro" name="plans" checked={plan === Plans.Pro} onChange={() => onPlanSelect(Plans.Pro)} />
                <label htmlFor="pro" className="multiform-plan-label">
                    <img src={proIcon} alt="Large game controller" />
                    <p>Pro</p>
                    <small>$15/mo</small>
                </label>
            </div>
        </div>
        <div className="multiform-timeframe-container">
            <label htmlFor="timeframe">
                Monthly
            </label>
            <Switch.Root className="multiform-switchroot" id="timeframe" checked={timeFrame === PlanTimeFrame.Yearly} onCheckedChange={onTimeFrameToggle}>
                <Switch.Thumb className="multiform-switchthumb" />
            </Switch.Root>
            <label htmlFor="timeframe">
                Yearly
            </label>
        </div>
        <MultiFormSubmitButtons currentStep={2} onReturn={props.onReturn} />
      </form>
    </>
  )
}

export default MultiFormPlan