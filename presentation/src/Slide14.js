import React, { Component } from "react";
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Notes,
  Magic,
  Appear,
  Link
} from "spectacle";

export default () => (
  <Slide bgColor="secondary" textColor="primary">
    <Notes>
      <h4>Pooling</h4>
      <ol>
        <li>priemerny alebo maximalny vyber hodnoty sucin</li>
      </ol>
    </Notes>
    <Cite>
      zdroj:
      <Link href="https://cambridgespark.com/content/tutorials/convolutional-neural-networks-with-keras/index.html/">
        CambridgeSpark
      </Link>
    </Cite>
    <Image height="500px" src={require("./assets/pool.png")} />
  </Slide>
);
