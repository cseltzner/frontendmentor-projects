import "./News.css";
import logo from "../../project-files/news-homepage-main/assets/images/logo.svg";
import web3 from "../../project-files/news-homepage-main/assets/images/image-web-3-desktop.jpg";
import retroPc from "../../project-files/news-homepage-main/assets/images/image-retro-pcs.jpg";
import laptops from "../../project-files/news-homepage-main/assets/images/image-top-laptops.jpg";
import growth from "../../project-files/news-homepage-main/assets/images/image-gaming-growth.jpg";

const News = () => {
  return (
    <>
      <div className="container news-container">
        <nav className="news-header">
            <a href="#" className="news-logo">
                <img src={logo} alt="logo" />
            </a>
            <ul className="news-nav-links">
                <li className="news-nav-link">
                    <a href="#">Home</a>
                </li>
                <li className="news-nav-link">
                    <a href="#">New</a>
                </li>
                <li className="news-nav-link">
                    <a href="#">Popular</a>
                </li>
                <li className="news-nav-link">
                    <a href="#">Trending</a>
                </li>
                <li className="news-nav-link">
                    <a href="#">Categories</a>
                </li>
            </ul>
        </nav>
        <main className="news-main">
            <img className="news-primary-image" src={web3} alt="abstract blocks" />
            <h2 className="news-primary-title">The Bright Future of Web 3.0?</h2>
            <div className="news-primary-description">
                <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                <a href="#">
                    <button>READ MORE</button>
                </a>
            </div>
            <div className="news-secondary-article-container">
                <h3>New</h3>
                <ul className="news-secondary-article-list">
                    <li className="news-secondary-article">
                        <h4>Hydrogen VS Electric Cars</h4>
                        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                    </li>
                    <li className="news-secondary-article">
                        <h4>The Downsides of AI Artistry</h4>
                        <p>What are the possible adverse effects of on-demand AI image generation?</p>
                    </li>
                    <li className="news-secondary-article">
                        <h4>Is VC Funding Drying Up?</h4>
                        <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                    </li>
                </ul>
            </div>
            <ol className="news-tertiary-article-list">
                <li>
                    <a href="#" className="news-tertiary-article">
                        <img src={retroPc} alt="retro PC" />
                        <div className="news-tertiary-article-description">
                            <div className="news-numbering">01</div>
                            <h4>Reviving Retro PCs</h4>
                            <p>What happens when old PC's are given modern upgrades?</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" className="news-tertiary-article">
                        <img src={laptops} alt="laptop keyboard" />
                        <div className="news-tertiary-article-description">
                            <div className="news-numbering">02</div>
                            <h4>Top 10 Laptops of 2022</h4>
                            <p>Our best picks for various needs and budgets.</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" className="news-tertiary-article">
                        <img src={growth} alt="controller being thrown up into the air with the person's hand beneath the controller" />
                        <div className="news-tertiary-article-description">
                            <div className="news-numbering">03</div>
                            <h4>The Growth of Gaming</h4>
                            <p>How the pandemic has sparked fresh opportunities.</p>
                        </div>
                    </a>
                </li>
            </ol>
        </main>
      </div>
    </>
  )
}

export default News