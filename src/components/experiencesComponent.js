import React from 'react';

// I think this is not being used? If so, I think it should be deleted - Jacob

const experiencesContainer = {
display: "flex",
justifyContent: "center",
alignItems: "center",
flexWrap: "wrap",
marginTop: "500px", // Add margin-top for space
};

const card = {
background: "#fff",
borderRadius: "10px",
padding: "5rem",
width: "calc(50% - 10px)", // Increase width for wider cards
height: "450px",
margin: "20px",
boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
display: "flex",
flexDirection: "column",
justifyContent: "space-between",
};

const imgContainer = {
width: "100%",
height: "60%",
overflow: "hidden",
borderRadius: "10px",
};

const img = {
width: "100%",
height: "100%",
objectFit: "cover",
};

const role = {
fontFamily: "Roboto",
fontWeight: "300",
fontSize: "1rem",
color: "#666",
margin: "0",
};

const name = {
fontFamily: "Roboto",
fontWeight: "500",
fontSize: "1.5rem",
color: "#000",
margin: "1rem 0 0 0",
};

function ExperiencesComponent(props) {
const { appSection, vrSection } = props;

return (
<div>
<div style={{ backgroundColor: "#f6f7fb", display: "flex", justifyContent: "center", alignItems: "center" }}>
<div className="container" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
<div className="row">
<div className="col-md-6" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>{appSection}</div>
<div className="col-md-6" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>{vrSection}</div>
</div>
</div>
</div>
<div style={experiencesContainer}>
<div style={card}>
<div style={imgContainer}>
<img style={img} src="https://via.placeholder.com/600x400" alt="experience" />
</div>
<p style={role}>Role</p>
<h3 style={name}>Experience Name</h3>
</div>
<div style={card}>
<div style={imgContainer}>
<img style={img} src="https://via.placeholder.com/600x400" alt="experience" />
</div>
<p style={role}>Role</p>
<h3 style={name}>Experience Name</h3>
</div>
</div>
</div>
);
}

export default ExperiencesComponent;
