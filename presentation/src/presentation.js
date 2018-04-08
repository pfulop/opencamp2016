// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import preloader from "spectacle/lib/utils/preloader";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
import Slide5 from "./Slide5";
import Slide6 from "./Slide6";
import Slide7 from "./Slide7";
import Slide8 from "./Slide8";
import Slide9 from "./Slide9";
import Slide10 from "./Slide10";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#001f3f",
    tertiary: "#FFFFF0",
    quartenary: "#3E3E3E",
    transparent: "transparent"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const images = {
  xkcd: require("./assets/machine_learning_2x.png")
};

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
        {Slide1()}
        {Slide2()}
        {Slide3()}
        {Slide4()}
        {Slide5()}
        {Slide6()}
        {Slide7()}
        {Slide8()}
        {Slide9()}
        {Slide10()}
      </Deck>
    );
  }
}
