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
    <BlockQuote>
      <Quote>
        The field of study that gives computers the ability to learn without being explicitly programmed.
      </Quote>
      <Cite>Arthur Lee Samue</Cite>
    </BlockQuote>
  </Slide>
);
