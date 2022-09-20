import React from "react";

export class Home extends React.Component {

    render() {
        return (
            <div className="scroll-container">
                {/* about section */}
                <section className="scroll-area">about</section><hr/>
                {/* Projects section */}
                <section className="scroll-area">projects</section><hr/>
                {/* contact me section */}
                <section className="scroll-area">contact me</section><hr/>
                {/* resume/contact information section */}
                <section className="scroll-area">resume/contact information</section>
            </div>
        )
    }
}