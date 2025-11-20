import { FaWordpress } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { FaLeaf } from "react-icons/fa";
import { FaPersonMilitaryRifle } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { SlSupport } from "react-icons/sl";

function OurServices() {
    return (
        <div className="ourService">
            <p>Our Service</p>
            <div className="ourService-wripper">
                <div className="wordPress">
                    <div className="icon">
                        <FaWordpress style={{ color: "#fff", fontSize: "30px" }} />
                    </div>
                    <div className="text">
                        <h2>WordPress installtion</h2>
                        <p>installing WordPress and pluging</p>
                    </div>
                </div>
                <div className="wordPress">
                    <div className="icon">
                        <IoMdCheckmark style={{ color: "#fff", fontSize: "30px" }} />
                    </div>
                    <div className="text">
                        <h2>Website Optimization</h2>
                        <p>Optimizing your site speed</p>
                    </div>
                </div>
                <div className="wordPress">
                    <div className="icon">
                        <FaLeaf style={{ color: "#fff", fontSize: "30px" }} />
                    </div>
                    <div className="text">
                        <h2>Web Design</h2>
                        <p>Photoshop layered web design</p>
                    </div>
                </div>
                <div className="wordPress">
                    <div className="icon">
                        <FaPersonMilitaryRifle
                            style={{ color: "#fff", fontSize: "30px" }}
                        />
                    </div>
                    <div className="text">
                        <h2>Security solution</h2>
                        <p>increase your server security risk</p>
                    </div>
                </div>
                <div className="wordPress">
                    <div className="icon">
                        <FaCode style={{ color: "#fff", fontSize: "30px" }} />
                    </div>
                    <div className="text">
                        <h2>Web Development</h2>
                        <p>devloping Website from wireframe</p>
                    </div>
                </div>
                <div className="wordPress">
                    <div className="icon">
                        <SlSupport style={{ color: "#fff", fontSize: "30px" }} />
                    </div>
                    <div className="text">
                        <h2>Unlimited Support</h2>
                        <p>Supporting you with any problems</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices
