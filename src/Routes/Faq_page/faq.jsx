import React, { useState } from "react";
import img from "../../assets/1520043405009.jpg";
import { FaQuestion, FaPlus } from "react-icons/fa";
import { RiSubtractLine } from "react-icons/ri";

import "./Faq.css";

//  FIXED: renamed this so it doesn't conflict with the component name
const faqData = [
  {
    question: "Your Question Title?",
    answer:
      "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    question: "Do eiusmod tempor incidit?",
    answer:
      "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
  },
  {
    question: "Cupidatat iusmod tempor incid idun?",
    answer:
      "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Excepteur sint occaecat cupidatat iusmod tempor incid idun?",
    answer:
      "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet.",
  },
  {
    question: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt?",
    answer:
      "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet.",
  },
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="faq-container">
        {/* IMAGE */}
        <div className="faqImage">
          <img src={img} alt="faq" />
        </div>

        {/* TEXT */}
        <div className="faq-text">
          <h2>Do you have Questions ?</h2>
          <p>
            Please read the questions below and if you cannot find your answer,
            send us your question. We will respond as soon as possible.
          </p>

          <div className="faq-badge">
            <FaQuestion
              style={{
                width: "40px",
                height: "35px",
                background: "#720EEC",
                borderRadius: "50px",
                padding: "10px",
              }}
            />
            <p>F.A.Qs</p>
          </div>
        </div>
      </div>

      {/* FORM SECTION */}
      <div className="far-wrapper">
        <div className="faqForm">
          <div className="title">
            <h2>Ask Us</h2>

            <form action="https://usebasin.com/f/YOUR_FORM_ID" method="POST">
              <div className="formCombination">
                <div>
                  <label>Your Name</label>
                  <input type="text" name="name" required />
                </div>

                <div>
                  <label>Phone Number</label>
                  <input type="tel" name="phone" required />
                </div>
              </div>

              <label>Your Email</label>
              <input type="email" name="email" required />

              <label>Message</label>
              <textarea name="message" required></textarea>

              <button type="submit">Ask</button>
            </form>
          </div>
        </div>

        {/* FAQ QUESTIONS */}
        <div className="faq-Question">
          <h2>Ask</h2>

          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <div className="question" onClick={() => toggleFaq(index)}>
                {item.question}
                <span>
                  {activeIndex === index ? <RiSubtractLine /> : <FaPlus />}
                </span>
              </div>

              {activeIndex === index && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Faq;
