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
      <h4>Convolution</h4>
      <ol>
        <li>skalarny sucin</li>
        <li>Vytahuje zaujimave vlastnosti obrazka</li>
      </ol>
    </Notes>
    <Cite>
      zdroj:
      <Link href="https://cambridgespark.com/content/tutorials/convolutional-neural-networks-with-keras/index.html/">
        CambridgeSpark
      </Link>
    </Cite>
    <Image height="500px" src={require("./assets/convolve.png")} />
  </Slide>
);
