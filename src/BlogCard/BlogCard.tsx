import "./BlogCard.css";
import cardHeaderImg from "../../project-files/blog-preview-card-main/assets/images/illustration-article.svg";
import instructorAvatar from "../../project-files/blog-preview-card-main/assets/images/image-avatar.webp";

const BlogCard = () => {
  return (
    <>
      <div className="blog-card">
        <img className="blog-header-img" src={cardHeaderImg} alt="card header" />
        <button className="blog-category-btn">Learning</button>
        <p className="blog-date">Published 21 Dec 2023</p>
        <h2 className="blog-title">HTML & CSS foundations</h2>
        <p className="blog-description">These languages are the backbone of every website, defining structure, content, and presentation</p>
        <div className="blog-instructor-container">
            <img className="blog-instructor-img" src={instructorAvatar} alt="instructor" />
            <h3 className="blog-instructor-name">Greg Hooper</h3>
        </div>
      </div>
    </>
  )
}

export default BlogCard