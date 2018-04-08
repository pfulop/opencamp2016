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
  <Magic>
    <Slide bgColor="secondary" textColor="primary">
      <Heading fit>Prezident Slovenskej Republiky</Heading>
    </Slide>
    <Slide bgColor="secondary" textColor="primary">
      <Notes>
        <h5>Linearna regresia</h5>
        <ol>
          <li>
            linearny pristup k modelovaniu vztahu medzi vystupom a vstupom
          </li>
          <li>linearny model ktoreho parametre su odhadnute z dat </li>
          <li>
            Cielom je minimalizacia suctu chyb pre najdenie najlepsiej zapadajucej priamky
          </li>
        </ol>
      </Notes>
      <Heading fit>Prezident Svolenskej Razpubliky</Heading>
    </Slide>
  </Magic>
);
