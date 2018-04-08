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
  <Slide
    progressColor="secondary"
    textColor="secondary"
    transition={["zoom"]}
    bgColor="transparent"
  >
    <Heading textSize={4} fit caps lineHeight={1} textColor="secondary">
      Úvod do Machine Learningu
    </Heading>
    <Heading textSize={4} fit caps lineHeight={2} textColor="secondary">
      pre programátorov
    </Heading>
    <Text textSize={4} margin="10px 0 0" textColor="quartenary" size={1} fit>
      {"<< Pavol Fülöp @ BA OpenCamp 2018 >>"}
    </Text>
  </Slide>
);
