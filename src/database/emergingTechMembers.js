// Mock database for importing all the member information for the emerging tech team. This data is being utilized in about.js - Jacob

import John from "../images/people/John.jpg"
import Jack from "../images/people/Jack.jpg"


const members = [
    {
        key: 1,
        name: "John Pham",
        role: "Emerging Tech Team Lead",
        year: "4th Year",
        major: "Computer Science",
        image: John
    },
    {
        key: 2,
        name: "Jack English",
        role: "Emerging Tech Team",
        year: "2nd Year",
        major: "Computer Science",
        image: Jack
    },

];

export default members;