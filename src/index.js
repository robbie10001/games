import React from "react"; 
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import PlayerIntro from "./Components/playerintroduction/playerintro";
import GameOverview from "./Components/gameoverview/gameoverview"
import landingPage from "./Components/landingpage/landingpage"
import Quiz from "./Components/quiz/quiz"

ReactDOM.render(
    <div>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={landingPage} />
          <Route exact path="/welcomenoobs" component={PlayerIntro} />
          <Route exact path="/welcomenoobs" component={GameOverview}/>
          <Route exact path="/quiz" component={Quiz}/>
        </div>
        </BrowserRouter>
    </div>,
        document.getElementById("root") 
    );
