// Mock database for importing all the member information for the web team. This data is being utilized in about.js - Jacob

import Jacob from "../images/people/Jacob.jpg"
import Evelyn from "../images/people/Evelyn.jpg"
import Audrey from "../images/people/Audrey.jpg"
import Yunsu from "../images/people/Yunsu.jpg"
import Carly from "../images/people/Carly.png"

const members = [
    {
        key: 1,
        name: "Jacob Amin",
        role: "Web Team Lead",
        year: "4th Year",
        major: "Computational Media",
        image: Jacob
    },
    {
        key: 2,
        name: "Evelyn Craven",
        role: "Web Team",
        year: "3rd Year",
        major: "Computer Science",
        image: Evelyn
    },
    {
        key: 3,
        name: "Audrey Chung",
        role: "Web Team",
        year: "3rd Year",
        major: "Computational Media",
        image: Audrey
    },
    {
        key: 4,
        name: "Yunsu Kim",
        role: "Web Team",
        year: "3rd Year",
        major: "Computer Science",
        image: Yunsu
    },
    {
        key: 5,
        name: "Carly Yin",
        role: "Web Team",
        year: "1st Year",
        major: "Computer Science",
        image: Carly
    },

];

export default members;