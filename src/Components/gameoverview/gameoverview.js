import React from 'react';
import "./gameoverview.css"
import Einstien from "../../einstien.png"
import Aim from "../../aim.png"
import Snake from "../../snake.png"
import Plato from "../../plato.png"
import Zac from "../../zac.png"

const GameOverview = () => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
            window.location.href = "http://localhost:3000/quiz";
    }

    return (
        <div className="gameOverviewParentContainer">
            <p className = "gamesHeading">Let's have a quick run down of the various events that our player will partake in!</p>
                <div className="variousGameImages">
                    <section className = "gamesSection">
                        <h2 className = "heading" id="einsteinImage">A Quiz...Who Know's More?</h2>
                        <img src={Einstien} alt="person with tounge out" className = "imageSection"/>
                        <p>We all know that don't know much but just how little do they know?</p>
                    </section>
                    <section className = "gamesSection">
                        <h2 className = "heading">A Shooting Game...Who Has The Best Aim?</h2>
                        <img src={Aim} alt="crosshairs" className = "imageSection"/>
                        <p>NO HACKS ALLOWED!</p>
                    </section>
                    <section className = "gamesSection">
                        <h2 className = "heading">King Of Snake...Which Noob is the Best at Snake?</h2>
                        <img src={Snake} alt="snake bite victim" className = "imageSection"/>
                        <p> We Going Old Skool on This One!</p>
                    </section>
                    <section className = "gamesSection">
                        <h2 className = "heading">Philosopher King...Who Can Survive The Longest?</h2>
                        <img src={Plato} alt="the great philosopher plato in marble" className = "imageSection"/>
                        <p>A Game to Test How Ethical A Person You Are!</p>
                    </section>
                    <section className = "gamesSection">
                        <h2 className = "heading" id="einsteinImage">Solve The Impossible Problem</h2>
                        <img src={Zac} alt="fat guy figuring out maths" className = "imageSection"/>
                        <p>Do You Have the Skill to Pay the Bills?</p>
                    </section>
                </div>
                    <section className="startGame">
                        <p>Without further Ado, are you ready to play some games!!!?</p>
                        <form onSubmit={handleSubmit}>
                            <input type="submit" />
                            </form>
    
                    </section>
        </div>
    )
};

export default GameOverview;
