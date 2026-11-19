import * as React from "react";

export default function HomeJoin({ title, description, steps }) {
  return (
    <section className="home-join">
      <h2>{title}</h2>

      <div className="home-join-content">
        <p>{description}</p>

        <ul>
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
