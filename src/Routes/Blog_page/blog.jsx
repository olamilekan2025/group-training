import React, { useState } from "react";
import img0 from "../../assets/post1-1-360x320.jpg";
import img1 from "../../assets/post3-1-360x320.jpg";
import img2 from "../../assets/small.png";
import img3 from "../../assets/computer.jpg";
import img4 from "../../assets/developer.jpg";
import img5 from "../../assets/famous.jpg";
import img6 from "../../assets/interview.jpg";
import img from "../../assets/hemlock-rock-landscaping-09.webp";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import "./Blog.css";

function Blog() {
  const [activeTab, setActiveTab] = useState("article");

  const navigateTo = (url) => {
    window.open(url, "_blank");
  };

  const tabs = [
    { key: "article", label: "Article" },
    { key: "computer", label: "Computer" },
    { key: "developer", label: "Developer" },
    { key: "famous", label: "Famous" },
    { key: "wordpress", label: "WordPress" },
    { key: "interview", label: "Interview" },
  ];

  return (
    <div className="switch-wrapper">
      <div className="switch-button-ads">
        <div className="switch-btn-container">
          <h2 className="tags-cloud">Tags Cloud</h2>

          <div className="switch-btns">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                className={activeTab === tab.key ? "tab active" : "tab"}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="ads-container">
          <div className="ads">
            <h2>Ads</h2>
          </div>

          <div
            className="adsImage"
            onClick={() => navigateTo("https://shopease-nine-iota.vercel.app")}
            style={{ cursor: "pointer" }}
          >
            <div className="overlay">
              <h2>Advertisement</h2>
            </div>
            <img src={img} alt="" />
          </div>
        </div>
      </div>

      <div className="switch-container">
        {activeTab === "article" && (
          <div className="switch-contect">
            <h2>Article</h2>
            <div className="switch-panel">
              <div className="articleImage">
                <img src={img0} alt="" />
                <div className="floatingIcon">
                  <FaArrowUpRightFromSquare />
                </div>
              </div>

              <div className="articleContent">
                <h2>Principles of coldness</h2>

                <h3 className="iconImage">
                  <div className="image">
                    <img src={img2} alt="" />
                  </div>
                  <div className="text">
                    <h3>Elmntr</h3>
                    <p>9 November 2009</p>
                  </div>
                </h3>

                <details className="dropdown-details">
                  <summary>Read more</summary>

                  <p className="drop-text">
                    Quisque velit nisi, pretium ut lacinia in, elementum id
                    enim. Donec sollicitudin molestie malesuada. Pellentesque in
                    ipsum id orci porta dapibus. Curabitur aliquet quam id dui
                    posuere blandit.
                  </p>
                </details>
              </div>
            </div>

            <div className="switch-panel">
              <div className="articleImage">
                <img src={img1} alt="" />
                <div className="floatingIcon">
                  <FaArrowUpRightFromSquare />
                </div>
              </div>

              <div className="articleContent">
                <h2>Principles of coldness</h2>

                <h3 className="iconImage">
                  <div className="image">
                    <img src={img2} alt="" />
                  </div>
                  <div className="text">
                    <h3>Elmntr</h3>
                    <p>9 November 2009</p>
                  </div>
                </h3>

                <details className="dropdown-details">
                  <summary>Read more</summary>

                  <p className="drop-text">
                    Quisque velit nisi, pretium ut lacinia in, elementum id
                    enim. Donec sollicitudin molestie malesuada. Pellentesque in
                    ipsum id orci porta dapibus. Curabitur aliquet quam id dui
                    posuere blandit.
                  </p>
                </details>
              </div>
            </div>
          </div>
        )}

        {activeTab === "computer" && (
          <div className="switch-contect">
            <h2>Computer</h2>
            <div className="switch-panel">
              <div className="articleImage">
                <img src={img3} alt="" />
                <div className="floatingIcon">
                  <FaArrowUpRightFromSquare />
                </div>
              </div>

              <div className="articleContent">
                <h2>Principles of coldness</h2>

                <h3 className="iconImage">
                  <div className="image">
                    <img src={img2} alt="" />
                  </div>
                  <div className="text">
                    <h3>Elmntr</h3>
                    <p>9 November 2009</p>
                  </div>
                </h3>

                <details className="dropdown-details">
                  <summary>Read more</summary>

                  <p className="drop-text">
                    Quisque velit nisi, pretium ut lacinia in, elementum id
                    enim. Donec sollicitudin molestie malesuada. Pellentesque in
                    ipsum id orci porta dapibus. Curabitur aliquet quam id dui
                    posuere blandit.
                  </p>
                </details>
              </div>
            </div>
          </div>
        )}

        {activeTab === "developer" && (
          <div className="switch-contect">
            <h2>Developer</h2>
            <div className="switch-panel">
              <div className="articleImage">
                <img src={img4} alt="" />
                <div className="floatingIcon">
                  <FaArrowUpRightFromSquare />
                </div>
              </div>

              <div className="articleContent">
                <h2>Principles of coldness</h2>

                <h3 className="iconImage">
                  <div className="image">
                    <img src={img2} alt="" />
                  </div>
                  <div className="text">
                    <h3>Elmntr</h3>
                    <p>9 November 2009</p>
                  </div>
                </h3>

                <details className="dropdown-details">
                  <summary>Read more</summary>

                  <p className="drop-text">
                    Quisque velit nisi, pretium ut lacinia in, elementum id
                    enim. Donec sollicitudin molestie malesuada. Pellentesque in
                    ipsum id orci porta dapibus. Curabitur aliquet quam id dui
                    posuere blandit.
                  </p>
                </details>
              </div>
            </div>
          </div>
        )}

        {activeTab === "famous" && (
          <div className="switch-contect">
            <h2>Famous</h2>
            <div className="switch-panel">
              <div className="articleImage">
                <img src={img5} alt="" />
                <div className="floatingIcon">
                  <FaArrowUpRightFromSquare />
                </div>
              </div>

              <div className="articleContent">
                <h2>Principles of coldness</h2>

                <h3 className="iconImage">
                  <div className="image">
                    <img src={img2} alt="" />
                  </div>
                  <div className="text">
                    <h3>Elmntr</h3>
                    <p>9 November 2009</p>
                  </div>
                </h3>

                <details className="dropdown-details">
                  <summary>Read more</summary>

                  <p className="drop-text">
                    Quisque velit nisi, pretium ut lacinia in, elementum id
                    enim. Donec sollicitudin molestie malesuada. Pellentesque in
                    ipsum id orci porta dapibus. Curabitur aliquet quam id dui
                    posuere blandit.
                  </p>
                </details>
              </div>
            </div>
          </div>
        )}

        {activeTab === "wordpress" && (
          <div className="switch-contect">
            <h2>WordPress</h2>

            <div className="switch-panel">
              <div className="articleImage">
                <img src={img1} alt="" />
                <div className="floatingIcon">
                  <FaArrowUpRightFromSquare />
                </div>
              </div>

              <div className="articleContent">
                <h2>Principles of coldness</h2>

                <h3 className="iconImage">
                  <div className="image">
                    <img src={img2} alt="" />
                  </div>
                  <div className="text">
                    <h3>Elmntr</h3>
                    <p>9 November 2009</p>
                  </div>
                </h3>

                <details className="dropdown-details">
                  <summary>Read more</summary>

                  <p className="drop-text">
                    Quisque velit nisi, pretium ut lacinia in, elementum id
                    enim. Donec sollicitudin molestie malesuada. Pellentesque in
                    ipsum id orci porta dapibus. Curabitur aliquet quam id dui
                    posuere blandit.
                  </p>
                </details>
              </div>
            </div>
          </div>
        )}

        {activeTab === "interview" && (
          <div className="switch-contect">
            <h2>Interview</h2>

            <div className="switch-panel">
              <div className="articleImage">
                <img src={img5} alt="" />
                <div className="floatingIcon">
                  <FaArrowUpRightFromSquare />
                </div>
              </div>
              <div className="articleContent">
                <h2>Principles of coldness</h2>

                <h3 className="iconImage">
                  <div className="image">
                    <img src={img2} alt="" />
                  </div>
                  <div className="text">
                    <h3>Elmntr</h3>
                    <p>9 November 2009</p>
                  </div>
                </h3>

                <details className="dropdown-details">
                  <summary>Read more</summary>

                  <p className="drop-text">
                    Quisque velit nisi, pretium ut lacinia in, elementum id
                    enim. Donec sollicitudin molestie malesuada. Pellentesque in
                    ipsum id orci porta dapibus. Curabitur aliquet quam id dui
                    posuere blandit.
                  </p>
                </details>
              </div>
            </div>

            <div className="switch-panel">
              <div className="articleImage">
                <img src={img6} alt="" />
                <div className="floatingIcon">
                  <FaArrowUpRightFromSquare />
                </div>
              </div>

              <div className="articleContent">
                <h2>Principles of coldness</h2>

                <h3 className="iconImage">
                  <div className="image">
                    <img src={img2} alt="" />
                  </div>
                  <div className="text">
                    <h3>Elmntr</h3>
                    <p>9 November 2009</p>
                  </div>
                </h3>

                <details className="dropdown-details">
                  <summary>Read more</summary>

                  <p className="drop-text">
                    Quisque velit nisi, pretium ut lacinia in, elementum id
                    enim. Donec sollicitudin molestie malesuada. Pellentesque in
                    ipsum id orci porta dapibus. Curabitur aliquet quam id dui
                    posuere blandit.
                  </p>
                </details>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Blog;
