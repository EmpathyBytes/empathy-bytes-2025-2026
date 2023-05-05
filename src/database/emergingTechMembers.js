// Mock database for importing all the member information for the emerging tech team. This data is being utilized in about.js - Jacob

import John from "../images/people/John.jpg"
import Jack from "../images/people/Jack.jpg"


const members = [
    {
        key: 1,
        name: "John Pham",
        role: "Emerging Tech Team Lead",
        year: "3th Year",
        major: "Computer Science",
        image: John
    },
    {
        key: 2,
        name: "Jack English",
        role: "Emerging Tech Team",
        year: "1st Year",
        major: "Computer Science",
        image: Jack
    },
    {
        key: 3,
        name: "Jacqueline Le",
        role: "Emerging Tech Team",
        year: "4th Year",
        major: "Computer Science",
        image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    },
    {
        key: 4,
        name: "Julia Polo",
        role: "Emerging Tech Team",
        year: "3rd Year",
        major: "Computer Science",
        image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    },
    {
        key: 5,
        name: "Alison Jasadipura",
        role: "Emerging Tech Team",
        year: "4th Year",
        major: "Computational Media",
        image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    },

];

export default members;