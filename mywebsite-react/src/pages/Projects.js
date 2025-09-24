import React from "react";

const projects = [
  { title: "DevNotes", desc: "Markdown note app with offline sync.", tags:["React","PWA"], live:"#", repo:"#"},
  { title: "ShopLite", desc: "Mini e-commerce demo.", tags:["React","Stripe"], live:"#", repo:"#"},
  { title: "WeatherDash", desc: "Dashboard with geolocation & caching.", tags:["JS","Accessibility"], live:"#", repo:"#"},
];

export default function Projects(){
  return (
    <section className="section">
      <div className="container">
        <h2>Projects</h2>
        <div className="grid">
          {projects.map(p => (
            <article key={p.title} className="card pad">
              <header className="proj-head">
                <h3>{p.title}</h3>
                <div className="tags">
                  {p.tags.map(t => <span key={t} className="chip">{t}</span>)}
                </div>
              </header>
              <p>{p.desc}</p>
              <div className="proj-links">
                <a className="chip" href={p.live} target="_blank" rel="noreferrer">Live</a>
                <a className="chip" href={p.repo} target="_blank" rel="noreferrer">Code</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
