import React from "react";

export class Home extends React.Component {

    render() {
        return (
            <div className="scroll-container">
                {/* about section */}
                <section className="scroll-area">about</section>
                {/* Projects section */}
                <section className="scroll-area">projects</section>
                {/* contact me section */}
                <section className="scroll-area">contact me</section>
                {/* resume/contact information section */}
                <section className="scroll-area">resume/contact information</section>
            </div>
        )
    }
}