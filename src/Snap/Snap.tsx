import "./Snap.css";
import "./SnapDropdown.css";
import logo from "../../project-files/intro-section-with-dropdown-navigation-main/images/logo.svg"
import chevDown from "../../project-files/intro-section-with-dropdown-navigation-main/images/icon-arrow-down.svg";
import chevUp from "../../project-files/intro-section-with-dropdown-navigation-main/images/icon-arrow-up.svg";
import mainImg from "../../project-files/intro-section-with-dropdown-navigation-main/images/image-hero-desktop.png";
import todoIcon from "../../project-files/intro-section-with-dropdown-navigation-main/images/icon-todo.svg";
import calendarIcon from "../../project-files/intro-section-with-dropdown-navigation-main/images/icon-calendar.svg";
import reminderIcon from "../../project-files/intro-section-with-dropdown-navigation-main/images/icon-reminders.svg";
import planningIcon from "../../project-files/intro-section-with-dropdown-navigation-main/images/icon-planning.svg";
import databizLogo from "../../project-files/intro-section-with-dropdown-navigation-main/images/client-databiz.svg";
import audiophileLogo from "../../project-files/intro-section-with-dropdown-navigation-main/images/client-audiophile.svg";
import meetLogo from "../../project-files/intro-section-with-dropdown-navigation-main/images/client-meet.svg";
import makerLogo from "../../project-files/intro-section-with-dropdown-navigation-main/images/client-maker.svg";
import SnapDropdown from "./SnapDropdown";

const featuresDropdownItems = [
  {name: "Todo List", image: todoIcon},
  {name: "Calendar", image: calendarIcon},
  {name: "Reminders", image: reminderIcon},
  {name: "Planning", image: planningIcon},
]

const Snap = () => {
  return (
    <>
      <div className="snap-container">
        <nav className="snap-navbar">
          <img src={logo} alt="snap logo" />
          <ul className="snap-nav-list">
            <li className="snap-nav-item">
                Features <img src={chevDown} />
                <SnapDropdown dropDownItems={featuresDropdownItems} />
            </li>
            <li className="snap-nav-item">Company <img src={chevDown} /></li>
            <li className="snap-nav-item">Careers</li>
            <li className="snap-nav-item">About</li>
          </ul>
          <div className="snap-auth-btn-container">
            <button className="snap-btn"><a href="#">Login</a></button>
            <button className="snap-btn snap-btn-outline snap-btn-register"><a href="#">Register</a></button>
          </div>
        </nav>
        <main>
          <section className="snap-main-content">
            <h1>Make remote work</h1>
            <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
            <button className="snap-btn snap-btn-outline">Learn more</button>
            <ul className="snap-client-links">
              <a href="#" className="snap-client-link"><img src={databizLogo} alt="databiz" /></a>
              <a href="#" className="snap-client-link"><img src={audiophileLogo} alt="audiophile" /></a>
              <a href="#" className="snap-client-link"><img src={meetLogo} alt="meet" /></a>
              <a href="#" className="snap-client-link"><img src={makerLogo} alt="maker" /></a>
            </ul>
          </section>
          <div className="snap-main-img">
            <img src={mainImg} alt="Man standing and holding laptop with one hand while typing" />
          </div>
        </main>
      </div>
    </>
  )
}

export default Snap