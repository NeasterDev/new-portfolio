import React from "react";
import profilePic from "../images/profile_pic.png";

export class About extends React.Component {
    
    description = "I am Nicholas";

    render() {
        return (
            <div className="w-50 flex justify-between">
                <div id="description">
                    {this.description}
                </div>
                <div id="profile-pic-container">
                    <img id="profile-pic" src={profilePic} alt="profile"/>
                </div>
            </div>
        )
    }
}