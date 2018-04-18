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
  Fill,
  Appear
} from "spectacle";

const AppearListItem = ({ children }) => (
  <Appear><ListItem>{children}</ListItem></Appear>
);

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
      <AppearListItem>Kto som</AppearListItem>
      <AppearListItem>Čo je ML/DL 🤖</AppearListItem>
      <AppearListItem>Kolko €€€ treba na vyhratie volieb</AppearListItem>
      <AppearListItem>Sme šťastný národ</AppearListItem>
      <AppearListItem>Aké je to číslo</AppearListItem>
      <AppearListItem>Ako klamať</AppearListItem>
    </List>
  </Slide>
);
