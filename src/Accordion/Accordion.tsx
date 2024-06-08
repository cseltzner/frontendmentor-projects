import "./Accordion.css"
import star from "../../project-files/faq-accordion-main/assets/images/icon-star.svg";
import plus from "../../project-files/faq-accordion-main/assets/images/icon-plus.svg";
import minus from "../../project-files/faq-accordion-main/assets/images/icon-minus.svg";
import { useState } from "react";

interface AccordionItems {
  id: number;
  title: string;
  subtext: string;
}

const defaultAccordionItems: AccordionItems[] = [
  {
    id: 1,
    title: "What is Frontend Mentor, and how will it help me?",
    subtext:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    id: 2,
    title: "Is Frontend Mentor free?",
    subtext:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    id: 3,
    title: "Can I use Frontend Mentor projects in my portfolio?",
    subtext:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    id: 4,
    title: "How can I get help if I'm stuck on a challenge?",
    subtext:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

interface Props {
  title?: string;
  items?: AccordionItems[];
}

const Accordion = (props: Props) => {
  const items = props.items ? props.items : defaultAccordionItems;
  const title = props.title ? props.title : "FAQs";

  const [itemsOpen, setItemsOpen] = useState<number[]>([])

  const isItemOpen = (id: number) => {
    return itemsOpen.includes(id);
  }

  const handleItemToggle = (id: number) => {
    // Remove item from itemsOpen array
    if (itemsOpen.includes(id)) {
      setItemsOpen(prevArr => prevArr.filter(item => item !== id));
    } else {
      setItemsOpen(prevArr => [...prevArr, id]);
    }
  }

  return (
    <>
      <div className="accordion-container">
        <div className="header">
          <img src={star} alt="star" />
          <h2 className="header-text">{title}</h2>
        </div>
        {items.map((item, index) => (
          <>
            <div className="item" data-open={isItemOpen(item.id)}>
              <div className="item-title-container" onClick={() => handleItemToggle(item.id)}>
                <h3 className="item-title">{item.title}</h3>
                <img src={isItemOpen(item.id) ? minus : plus} alt="read more" className="item-control" />
              </div>
              <p className="item-subtext">{item.subtext}</p>
            </div>
            {index < items.length - 1 && <hr />}
          </>
        ))}
      </div>
    </>
  );
};

export default Accordion;
