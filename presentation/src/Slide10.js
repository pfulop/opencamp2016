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
  Appear
} from "spectacle";

export default () => (
  <Slide bgColor="secondary" textColor="primary">
    <Heading fontSize={10} textColor="primary">🍺</Heading>
    <List margin="10% 0">
      <Appear>
        <ListItem>Brewer's Friend Beer Recipes</ListItem>
      </Appear>
      <Appear>
        <ListItem>75 000 receptov na pivo</ListItem>
      </Appear>
    </List>
  </Slide>
);
