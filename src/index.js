import React from "react"; 
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import PlayerIntro from "./Components/playerintroduction/playerintro";
import GameOverview from "./Components/gameoverview/gameoverview";
import landingPage from "./Components/landingpage/landingpage";
import Quiz from "./Components/quiz/quiz";
import Snake from "./Components/snake/snake"

ReactDOM.render(
    <div>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={landingPage} />
          <Route exact path="/welcomenoobs" component={PlayerIntro} />
          <Route exact path="/welcomenoobs" component={GameOverview}/>
          <Route exact path="/quiz" component={Quiz}/>
          <Route exact path="/joke1" component={Snake}/>
        </div>
        </BrowserRouter>
    </div>,
        document.getElementById("root") 
    );
