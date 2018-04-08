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
  Layout,
  Fill
} from "spectacle";

export default () => (
  <Slide
    align="center center"
    progressColor="secondary"
    bgColor="primary"
    textColor="secondary"
  >
    <Heading textSize={50} textColor="secondary" caps>
      O čom hovorím
    </Heading>
    <List margin="10% 0">
      <ListItem>Kto som</ListItem>
      <ListItem>Čo je ML/DL 🤖</ListItem>
      <ListItem>Kolko €€€ treba na vyhratie volieb</ListItem>
      <ListItem>Aké je to pivo 🍺</ListItem>
      <ListItem>Ako klamať</ListItem>
    </List>
  </Slide>
);
