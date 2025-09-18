import React from "react";
import Layout from "../components/layout";
import "../styles/practicePage.css";
import JoshCard from "../components/joshCard";
import AmaraCard from "../components/amaraCard";
import HebeCard from "../components/hebeCard";
import JulianCard from "../components/julianCard";
import RayannCard from "../components/rayannCard";
import HusnaCard from "../components/husnaCard";
import TylerCard from "../components/tylerCard"
import DianaCard from "../components/dianaCard";
// TODO 2.0: Import your card component below using the same syntax as the JoshCard import
import KellyCard from "../components/kellyCard";
import MackenzieCard from "../components/mackenzieCard";
import tiffanyCard from "../components/tiffanyCard";
import DamodarCard from "../components/damodarCard"
import MishaCard from "../components/mishaCard";
import KatyCard from "../components/katyCard";


function PracticePage() {

  return (
    <Layout>
      <div className="cardWrapper">
        <main>
          <div className="cards">

            {/* TODO 3.0: Add your card component below using the same syntax as the JoshCard and AmaraCard component */}

            <JoshCard />
            <AmaraCard />
            <KellyCard />
            <DamodarCard/>
            <MishaCard/>
            <KatyCard/>

          </div>
        </main>
      </div>
    </Layout>
  );
}

/* TODO 4.0: Run this code and check out the practice page to see your card in action! 
- Open the terminal and run `npm run develop`
- Open your browser and go to http://localhost:8000/practice
- You should see your card on the page! If you don't, dm me on Discord and I'll help you out
*/

export default PracticePage;
