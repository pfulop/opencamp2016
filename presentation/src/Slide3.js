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
  Text
} from "spectacle";

export default () => (
  <Slide bgColor="secondary" textColor="primary">
    <Heading textSize={50} caps>
      Kto som?
    </Heading>
    <List margin="10% 0">
      <ListItem>❤️ developer</ListItem>
      <ListItem>Fullstack</ListItem>
      <ListItem>Momentálne frontend</ListItem>
      <ListItem>ML zo zaujímavosti</ListItem>
    </List>
  </Slide>
);
