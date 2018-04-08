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
  Magic
} from "spectacle";

export default () => (
  <Slide bgColor="secondary" textColor="primary">
    <Notes>
      <h5>Backpropagation a forward propagation</h5>
      <ol>
        <li>
          Metóda spätného šírenia chyb
        </li>
        <li>
          Nastavuju sa nou parametre siete s ohladom na minimalizaciu uciacej sa chyby
        </li>
        <li>
          Kopec derivacii o ktore sa za vas postara framework
        </li>
      </ol>
    </Notes>
    <Heading lineHeight={2} fit>Backpropagation</Heading>
    <Heading fit>Forwardpropagation</Heading>
  </Slide>
);
