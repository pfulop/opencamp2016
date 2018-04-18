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

const AppearListItem = ({ children }) => (
  <Appear><ListItem>{children}</ListItem></Appear>
);

export default () => (
  <Slide
    progressColor="secondary"
    textColor="secondary"
    transition={["zoom"]}
    bgColor="transparent"
  >
    <Heading textSize={4} fit caps lineHeight={1} textColor="secondary">
      Ďakujem
    </Heading>
  </Slide>
);
