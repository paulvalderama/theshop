import React from "react";
import { render } from "react-dom";
import Navigation from "./Navigation";
import Search from "./Search";

const App = () => {
  return (
    <div>
      <h1>Book Me Bitch!</h1>
      <Navigation />
      <Search />
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
