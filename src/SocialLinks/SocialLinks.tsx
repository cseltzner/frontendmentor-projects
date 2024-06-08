import "./SocialLinks.css";
import profilePhoto from "../../project-files/social-links-profile-main/assets/images/avatar-jessica.jpeg";

const SocialLinks = () => {
  return (
    <>
      <div className="social-container">
        <img className="photo" src={profilePhoto} alt="Profile avatar" />
        <h2 className="name">Jessica Randall</h2>
        <p className="location">London, United Kingdom</p>
        <p className="description">"Front-end developer and avid reader"</p>
        <div className="link-container">
            <a className="social-link" href="#">
                <button className="social-button">GitHub</button>
            </a>
            <a className="social-link" href="#">
                <button className="social-button">Frontend Mentor</button>
            </a>
            <a className="social-link" href="#">
                <button className="social-button">LinkedIn</button>
            </a>
            <a className="social-link" href="#">
                <button className="social-button">Twitter</button>
            </a>
            <a className="social-link" href="#">
                <button className="social-button">Instagram</button>
            </a>
        </div>
      </div>
    </>
  )
}

export default SocialLinks