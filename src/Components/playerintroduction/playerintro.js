import React from 'react'
import "./playerintro.css";
import HARRY from "../../Harry.png"
import BRUCE from "../../Bruce.png"
import VS from "../../VS.png"


const  PlayerIntro = () => {
    return (
    <div>
        <section className="headerDesign">
        <p className="websiteIntroduction">WELCOME TO THE HARRY vs BRUCE 2020, OLYMPIC GAMES!</p>
        <p className="subHeading">Firstly, a run down of our Players!</p>
    </section>
            <div>
                <div className="imageFlex">
                    <section>
                        <p className= "playerBio">In the left corner, hailing from Sydney, Australia, weighing in at 50kg, HARRY FRANKEL!</p>
                        <img src={HARRY} alt="Smiley face"/>
                    </section>
                    <section>
                        <img src={VS} alt="Versus Sign" className="versusSignAlignment"/>
                    </section>
                    <section>
                        <p className= "playerBio">In the right corner, from the Southest, South of South Africa, BRUCE MCCLURE!</p>
                        <img src={BRUCE} alt="Smiley face"/>
                    </section>
                </div>
            </div>
            </div>
    );

};

export default PlayerIntro;