import React from 'react'
import { useState } from 'react'
import img0 from "../../assets/post1-1-360x320.jpg";
import img1 from "../../assets/post3-1-360x320.jpg";
import img2 from "../../assets/small.png";

import img from "../../assets/hemlock-rock-landscaping-09.webp"
import "./Blog.css"

function Blog() {
  const navigateTo = (url) => {
    window.open(url, "_blank"); 
};

    const [article,setArticle]= useState (true);
    const [computer,setComputer]= useState (false);
    const [developer,setDeveloper]= useState (false)
    const [famous,setFamous]= useState (false)
    const [wordPress,setWordPress]= useState (false)
    const [interview,setInterview]= useState (false)

    const handleArticle = () => {
        setArticle(true)
        setComputer(false)
        setDeveloper(false)
        setFamous(false)
    }
    const handleComputer = () => {
        setArticle(false)
        setComputer(true)
        setDeveloper(false)
        setFamous(false)
    }
    const handleDeveloper = () => {
        setArticle(false)
        setComputer(false)
        setDeveloper(true)
        setFamous(false)
    }
    const handleFamous = () => {
        setArticle(false)
        setComputer(false)
        setDeveloper(false)
        setFamous(true)
    }
    const handleWordPress = () => {
        setArticle(false)
        setComputer(false)
        setDeveloper(false)
        setFamous(false)
        setWordPress(true)
    }
    const handleInterview = () => {
        setArticle(false)
        setComputer(false)
        setDeveloper(false)
        setFamous(false)
        setInterview(true)
    }
    return (
        <>
        <div className="switch-wrapper">
          <div className="switch-button-ads">
             <div className="switch-btn-container">
                <h2 className='tags-cloud'>Tags Cloud</h2>
                 <div className="switch-btns">
                    <button type='button'className={article ? "tab active" : "tab"} onClick={handleArticle} aria-pressed={article}>Article</button>
                    <button type='button'className={computer ? "tab active" : "tab"} onClick={handleComputer} aria-pressed={computer}>Computer</button>
                    <button type='button'className={developer ? "tab active" : "tab"} onClick={handleDeveloper} aria-pressed={developer}>developer</button>
                    <button type='button'className={famous ? "tab active" : "tab"} onClick={handleFamous} aria-pressed={famous}>Fmous</button>
                    <button type='button'className={wordPress ? "tab active" : "tab"} onClick={handleWordPress} aria-pressed={wordPress}>wordPress</button>
                    <button type='button'className={interview ? "tab active" : "tab"} onClick={handleInterview} aria-pressed={interview}>Interview</button>
            </div>
             </div>
           
            <div className="ads-container">
    <div className="ads"><h2>Ads</h2></div>

    <div 
        className="adsImage" 
        onClick={() => navigateTo("https://shopease-nine-iota.vercel.app")}
        style={{ cursor: "pointer" }}
    >
        <div className="overlay"><h2>Advertisement</h2></div>
        <img src={img} alt="" />
    </div>
</div>

          </div>

            <div className="switch-container">
                {article && (
                    <div className="switch-contect">
                        <h2>Article</h2>
                        <div className="switch-panel">
                            <div className="articleImage">
                                 <img src={img0} alt="" />
                            </div>
                            <div className="articleContent">
                                <h2>A place of silence</h2>
                                <h3 className='iconImage'>
                                    <div className="image">
                                        <img src={img2} alt="" />
                                    </div>
                                    <div className="text">
                                        <h3>Elmntr</h3>
                                        <p>9 November 2009</p>
                                    </div>
                                </h3>
                                <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta ...</p>
                                <button>Read more</button>
                            </div>
                        </div>
                        <div className="switch-panel">
                            <div className="articleImage">
                                <img src={img1} alt="" />
                            </div>
                            <div className="articleContent">
                                <h2>A place of silence</h2>
                                <h3 className='iconImage'>
                                    <div className="image">
                                        <img src={img2} alt="" />
                                    </div>
                                    <div className="text">
                                        <h3>Elmntr</h3>
                                        <p>9 November 2009</p>
                                    </div>
                                </h3>
                                <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta ...</p>
                                <button>Read more</button>
                            </div>
                        </div>
                    </div>
                )}
                {computer && (
                    <div className="switch-contect">
                        <h2>Computer</h2>
                        <div className="switch-panel"></div>
                    </div>
                )}
                {developer && (
                    <div className="switch-contect">
                        <h2>Developer</h2>
                        <div className="switch-panel"></div>
                    </div>
                )}
                {famous && (
                    <div className="switch-contect">
                        <h2>Famous</h2>
                        <div className="switch-panel"></div>
                    </div>
                )}
                {wordPress && (
                    <div className="switch-contect">
                        <h2>Word Press</h2>
                        <div className="switch-panel"></div>
                    </div>
                )}
                {interview && (
                    <div className="switch-contect">
                        <h2>Interview</h2>
                        <div className="switch-panel"></div>
                    </div>
                )}
            </div>
        </div>
        </>
    )
}

export default Blog

