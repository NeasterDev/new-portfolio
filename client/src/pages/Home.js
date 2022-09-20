import React from "react";
import { About } from "./About";

export class Home extends React.Component {

    render() {
        return (
            <div className="scroll-container">
                {/* about section */}
                <section id="about" className="scroll-area">
                    <About />
                </section><hr/>
                {/* Projects section */}
                <section id="projects" className="scroll-area">projects</section><hr/>
                {/* contact me section */}
                <section id="contact" className="scroll-area">contact me</section><hr/>
                {/* resume/contact information section */}
                <section id="resume" className="scroll-area">resume/contact information</section>
            </div>
        )
    }
}