import React, { useState } from "react";
import "./landingpage.css";


const LandingPage = () => {
  const [name, setName] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const nametolower = name.toLowerCase()
    console.log("lowercase name")

    if (nametolower === "bruce" || nametolower === "harry") {
        window.location.href = "http://localhost:3000/welcomenoobs";
    } else {
      window.location.href = "https://tenor.com/view/no-nooo-nope-eat-fingerwag-gif-14832139";
    }
  };
  return (
    <div className="landingPageIntro">
      <section>
        <h1> Welcome Dearest Buddies!</h1>
        <p>Please Enter your details, so i know it's you AND THEN WE CAN GET ON WITH THE GAMES!</p>
      </section>
      <p>Enter your FIRST NAME</p>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        value={name}
        onChange={e => setName(e.target.value)}/>
        <input type="submit" />
      </form>
    </div>
  )
};

export default LandingPage;