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
  Notes
} from "spectacle";

export default () => (
  <Slide bgColor="secondary" textColor="primary">
    <Notes>
      <h4>Deep learning</h4>
      <ol>
        <li>Buzzword</li>
        <li>Velke siete</li>
        <li>
          Siete ktore maju vacsinou vela vrstiev ktore vieme dostatocne rychlo iterotvat
        </li>
      </ol>
    </Notes>
    <Heading textSize={50} caps>
      Deep Learning
    </Heading>
    <Text textSize={100} margin="10px 0 0" textColor="primary">
      ?
    </Text>
  </Slide>
);
