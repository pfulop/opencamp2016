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

export default () => (
  <Slide bgColor="secondary" textColor="primary">
    <Cite>
      zdroj: <Link href="http://yann.lecun.com/exdb/mnist/">MNIST</Link>
    </Cite>
    <Image height="500px" src={require("./assets/mnist.jpeg")} />
  </Slide>
);
