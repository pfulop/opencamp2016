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
  Image
} from "spectacle";

export default () => (
  <Slide bgColor="secondary" textColor="primary">
    <Cite>zdroj: XKCD (xkcd.com)</Cite>
    <Image src={require("./assets/machine_learning_2x.png")} />
  </Slide>
);
