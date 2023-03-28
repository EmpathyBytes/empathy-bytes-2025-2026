import React from 'react';
import ExperiencesComponent from "../components/ExperiencesComponent";
import Navbar from "../components/navbar";

const ExperiencesPage = () => {
  return (
    <div>
      <Navbar transparent={false}/>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "200px", textAlign: "center" }}>
        <ExperiencesComponent 
          appSection={
            <section style={{
                width: "50%",
                height: "550px",
                background: "#fff",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                margin: "0 50px 50px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}>
              <h2>App</h2>
              <p style={{lineHeight: "350px"}}>Here's where we'll showcase information about our app.</p>
            </section>
          }
          vrSection={
            <section style={{
                width: "50%",
                height: "550px",
                background: "#fff",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                margin: "0 50px 50px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}>
              <h2>VR</h2>
              <p style={{lineHeight: "350px"}}>Here's where we'll showcase information about our VR experiences.</p>
            </section>
          }
        />
      </div>
    </div>
  );
}

export default ExperiencesPage;
