import { useState } from "react";
import "./App.css";
import "./normalize.css";
import AccordionPage from "./Accordion/AccordionPage";
import SocialLinksPage from "./SocialLinks/SocialLinksPage";
import BlogCardPage from "./BlogCard/BlogCardPage";
import NewsletterPage from "./Newsletter/NewsletterPage";
import AgeCalculatorPage from "./AgeCalculator/AgeCalculatorPage";
import NewsPage from "./News/NewsPage";
import SnapPage from "./Snap/SnapPage";
import ContactPage from "./Contact/ContactPage";
import RatingPage from "./Rating/RatingPage";
import MultiFormPage from "./MultiForm/MultiFormPage";

function App() {
  const [currentComponent, setCurrentComponent] = useState(0);

  let componentToReturn;
  switch (currentComponent) {
    case 0:
      componentToReturn = <h1>Click on one of the buttons above to choose a component.</h1>;
      break;
    case 1:
      componentToReturn = <AccordionPage />;
      break;
    case 2:
      componentToReturn = <SocialLinksPage />;
      break;
    case 3:
      componentToReturn = <BlogCardPage />;
      break;
    case 4:
      componentToReturn = <NewsletterPage />
      break;
    case 5:
      componentToReturn = <AgeCalculatorPage />
      break;
    case 6:
      componentToReturn = <NewsPage />;
      break;
    case 7:
      componentToReturn = <SnapPage />;
      break;
    case 8:
      componentToReturn = <ContactPage />;
      break;
    case 9:
      componentToReturn = <RatingPage />;
      break;
    case 10:
      componentToReturn = <MultiFormPage />;
      break;
    default:
      componentToReturn = null;
      break;
  }

  return (
    <>
      <div className="btn-container">
        <button onClick={() => setCurrentComponent(0)}>Back</button>
        <button onClick={() => setCurrentComponent(1)}>Accordion</button>
        <button onClick={() => setCurrentComponent(2)}>Social Links</button>
        <button onClick={() => setCurrentComponent(3)}>Blog Card</button>
        <button onClick={() => setCurrentComponent(4)}>Newsletter</button>
        <button onClick={() => setCurrentComponent(5)}>Age Calculator</button>
        <button onClick={() => setCurrentComponent(6)}>News</button>
        <button onClick={() => setCurrentComponent(7)}>Snap</button>
        <button onClick={() => setCurrentComponent(8)}>Contact</button>
        <button onClick={() => setCurrentComponent(9)}>Rating</button>
        <button onClick={() => setCurrentComponent(10)}>MultiForm</button>
      </div>
      {componentToReturn}
    </>
  );
}

export default App;
