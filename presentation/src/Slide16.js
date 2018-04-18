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
  <Slide bgColor="secondary" textColor="primary">
    <Heading textSize={50} caps>
      Čo teraz?
    </Heading>
    <List margin="10% 0">
      <AppearListItem>Spracovanie dát</AppearListItem>
      <AppearListItem>Spracovanie dát</AppearListItem>
      <AppearListItem>Spracovanie dát</AppearListItem>
    </List>
  </Slide>
);
