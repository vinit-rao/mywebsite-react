import React from "react";

export default function Home(){
  return (
    <section className="section">
      <div className="container">
        <p className="chip" aria-hidden="true">Hello, I’m</p>
        <h1 className="title">Your Name</h1>
        <p className="lead">I build fast, accessible web apps with React and modern CSS.</p>

        <div className="actions">
          <a className="btn card" href="/projects">View my work</a>
          <a className="btn card" href="/contact">Contact me</a>
        </div>
      </div>
    </section>
  );
}
