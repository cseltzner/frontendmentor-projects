import "./SnapDropdown.css";

interface DropDownItem {
  name: string;
  image?: string;
}

interface Props {
  dropDownItems: DropDownItem[];
}

const SnapDropdown = (props: Props) => {
  return (
    <>
      <ul className="snap-dropdown">
        {props.dropDownItems.map((item) => (
          <li className="snap-dropdown-item" key={item.name}>
            <a href="#">
              {item.image && <img src={item.image} alt="" />}
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SnapDropdown;
