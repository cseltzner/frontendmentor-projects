import "./Rating.css";
import star from "../../project-files/interactive-rating-component-main/images/icon-star.svg";
import thankYouImage from "../../project-files/interactive-rating-component-main/images/illustration-thank-you.svg";
import { useState } from "react";

const Rating = () => {
  const [isRating, setIsRating] = useState(true);
  const [currentRating, setCurrentRating] = useState(0);
  const [error, setError] = useState("");

  const handleRatingChange = (rating: number) => {
    setError("");
    if (rating === currentRating) {
      setCurrentRating(0);
      return;
    }
    setCurrentRating(rating);
  }

  const handleSubmit = () => {
    if (currentRating <= 0) {
      setError("Please enter a rating");
      return;
    }

    if (currentRating > 5) return;
    setIsRating(false);
  }

  const ratingComponent =
  (
    <>
      <div className="rating-container">
        <img src={star} alt="Star enclosed in a circle" className="rating-header-icon" />
        <h1>How did we do?</h1>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className="rating-rate-container">
          <button className="rating-rate" aria-selected={currentRating === 1} onClick={() => handleRatingChange(1)}>1</button>
          <button className="rating-rate" aria-selected={currentRating === 2} onClick={() => handleRatingChange(2)}>2</button>
          <button className="rating-rate" aria-selected={currentRating === 3} onClick={() => handleRatingChange(3)}>3</button>
          <button className="rating-rate" aria-selected={currentRating === 4} onClick={() => handleRatingChange(4)}>4</button>
          <button className="rating-rate" aria-selected={currentRating === 5} onClick={() => handleRatingChange(5)}>5</button>
        </div>
        <small>{error}</small>
        <button className="rating-btn" onClick={handleSubmit}>SUBMIT</button>
      </div>
    </>
  )

  const thankYouComponent = (
    <>
      <div className="rating-container rating-container-centered">
        <img className="rating-illustration" src={thankYouImage} alt="Phone and credit card" />
        <p className="rating-chip">You selected {currentRating} out of 5</p>
        <h1>Thank you!</h1>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
    </>
  )

  return isRating ? ratingComponent : thankYouComponent;

}

export default Rating