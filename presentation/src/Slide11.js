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
    <Heading fontSize={10} textColor="primary">1 2 3 9 0</Heading>
    <List margin="10% 0">
      <Appear>
        <ListItem>MNIST</ListItem>
      </Appear>
      <Appear>
        <ListItem>
          Hello world pre ML
        </ListItem>
      </Appear>
    </List>
    <Appear>
      <Cite>
        <Link href="https://github.com/keras-team/keras/blob/master/examples/mnist_cnn.pys">
          Keras
        </Link>
      </Cite>
    </Appear>
  </Slide>
);
