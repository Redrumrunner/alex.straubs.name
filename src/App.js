// import React, { Component } from '../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import React, {Component} from 'react';
import logo from './logo.svg';
import {Container, Row, Navbar, Nav, NavbarBrand} from 'reactstrap';
import LikesCard from './LikesCard.js';
import LikesJumbo from './LikesJumbo';

class App extends Component {
  render() {
    return (
      <span>
        <Navbar className="bg-light">
          <NavbarBrand href="#"><img src={logo} alt="logo" /> Welcome to my likes!</NavbarBrand>
          <Nav className="ml-auto" navbar>
          </Nav>
        </Navbar>
        <LikesJumbo />
        <Container fluid>
          <Row>
            <LikesCard />
            <LikesCard thing="Board Games" why="I like to have fun!" />          
            <LikesCard thing="Food" why="My belly thinks it's tasty!" />          
            <LikesCard thing="Reese's Peanut Butter Cups" why="Chocolate & Peanut Butter... I don't need to say more." />          
            <LikesCard thing="Seahawks" why="Go Hawks!" />          
            <LikesCard thing={<span>the book <em>14</em></span>} why={<a href="https://www.amazon.com/14-Peter-Clines/dp/1618680528">It's a good book!</a>} />
          </Row>
        </Container>
      </span>
    );
  }
}

export default App;
