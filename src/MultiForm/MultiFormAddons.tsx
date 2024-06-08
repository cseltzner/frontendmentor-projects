import { useForm } from "react-hook-form";
import "./MultiForm.css";
import { AddOns } from "./MultiFormInterfaces";
import MultiFormSubmitButtons from "./MultiFormSubmitButtons";
import { useState } from "react";
import _ from "lodash";

interface Props {
    onSubmit: (values: AddOns) => void;
    onReturn: () => void;
}

const MultiFormAddons = (props: Props) => {
  const [checkedState, setCheckedState] = useState<string[]>([])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const addons: AddOns = {
        onlineService: checkedState.includes("online"),
        expandedStorage: checkedState.includes("storage"),
        customizableProfile: checkedState.includes("customprofile"),
    }
    props.onSubmit(addons);
  }

  const checkedHandler = (checkVal: string) => {
    const checkedIndex = checkedState.findIndex(val => val === checkVal) !== -1;
    if (checkedIndex) {
        setCheckedState(prevState => _.filter(prevState, val => val !== checkVal))
    } else {
        setCheckedState(prevState => [...prevState, checkVal])
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience</p>
      <div className="multiform-addons-container">
        <label htmlFor="online" data-checked={checkedState.includes("online")}>
            <input type="checkbox" id="online" checked={checkedState.includes("online")} onChange={() => checkedHandler("online")} />
            <div className="multiform-addons-description">
                <h3>Online Service</h3>
                <p>Access to multiplayer games</p>
            </div>
            <small>+$1/mo</small>
        </label>
        <label htmlFor="storage" data-checked={checkedState.includes("storage")}>
            <input type="checkbox" id="storage" checked={checkedState.includes("storage")} onChange={() => checkedHandler("storage")} />
            <div className="multiform-addons-description">
                <h3>Larger Storage</h3>
                <p>Extra 1TB of cloud save</p>
            </div>
            <small>+$2/mo</small>
        </label>
        <label htmlFor="customprofile" data-checked={checkedState.includes("customprofile")}>
            <input type="checkbox" id="customprofile" checked={checkedState.includes("customprofile")} onChange={() => checkedHandler("customprofile")} />
            <div className="multiform-addons-description">
                <h3>Customizable Profile</h3>
                <p>Custom theme on your profile</p>
            </div>
            <small>+$2/mo</small>
        </label>
      </div>
      <MultiFormSubmitButtons currentStep={3} onReturn={props.onReturn} />
    </form>
  )
}

export default MultiFormAddons