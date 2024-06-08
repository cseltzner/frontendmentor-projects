import "./AgeCalculator.css"
import icon from "../../project-files/age-calculator-app-main/assets/images/icon-arrow.svg";
import { useState } from "react";

const AgeCalculator = () => {
  const [date, setDate] = useState(new Date());
  const [inputValidity, setInputValidity] = useState({
    day: false,
    month: false,
    year: false
  })

  const currentDate = new Date();
  
  const onDayChange = (value: number) => {

  }

  const onMonthChange = (value: number) => {

  }

  const onYearChange = (value: number) => {
    const newDate = new Date(date);
    newDate.setFullYear(value);
  }

  const onSubmit = () => {

  }

  return (
    <>
      <div className="agecalc-container">
        <form className="agecalc-input-container" onSubmit={(e) => e.preventDefault()}>
            <div className="agecalc-input-group">
                <label className="agecalc-label" htmlFor="day">DAY</label>
                <input className="agecalc-input" name="day" id="day" type="number" min={0} max={31} placeholder="DD" />
            </div>
            <div className="agecalc-input-group">
                <label className="agecalc-label" htmlFor="month">MONTH</label>
                <input className="agecalc-input" name="month" id="month" type="number" min={0} max={12} placeholder="MM" />
            </div>
            <div className="agecalc-input-group">
                <label className="agecalc-label" htmlFor="year">YEAR</label>
                <input className="agecalc-input" name="year" id="year" type="number" min={1} max={currentDate.getFullYear()} placeholder="YYYY" onChange={(ev) => onYearChange(parseInt(ev.target.value))} />
            </div>
        </form>
        <div className="agecalc-divider">
            <hr className="agecalc-hr" />
            <button className="agecalc-icon-container" onClick={() => onSubmit()}>
                <img className="agecalc-icon" src={icon} alt="arrow down" />
            </button>
        </div>
        <div className="output-container">
            <div className="output-group">
                <span className="output-number">24</span>
                <span className="output-text"> years</span>
            </div>
            <div className="output-group">
                <span className="output-number">10</span>
                <span className="output-text"> months</span>
            </div>
            <div className="output-group">
                <span className="output-number">14</span>
                <span className="output-text"> days</span>
            </div>
        </div>
      </div>
    </>
  )
}

export default AgeCalculator