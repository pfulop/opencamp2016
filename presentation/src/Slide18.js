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
  <Slide bgColor="primary" textColor="secondary">
    <Heading textSize={50} textColor="secondary" caps>
      Zaujimavé odkazy
    </Heading>
    <List margin="10% 0">
      <ListItem>
        <Link href="https://github.com/FormidableLabs/spectacle">
          Spectacle
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://github.com/keras-team/keras/blob/master/examples/mnist_cnn.py">
          Keras MNIST
        </Link>
      </ListItem>
      <ListItem>
        <Link href="http://pytorch.org">
          PYTORCH
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://www.coursera.org/learn/machine-learning">
          Machine Learning Coursera
        </Link>
      </ListItem>
      <ListItem>
        <Link href="http://course.fast.ai">
          Deep Learning for coders
        </Link>
      </ListItem>
    </List>
  </Slide>
);
