import React, { Component } from "react";
import Header from "parts/Header";
import dataLandingPage from 'data/landingPage.json';
import Hero from "parts/Hero";
import MostPicked from 'parts/MostPicked';
import Category from "parts/Category";

export default class LandingPage extends Component {
  constructor(props){
    super(props);
    this.refMostPicked = React.createRef();
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={dataLandingPage.hero}/>
        <MostPicked refMostPicked={this.refMostPicked} data={dataLandingPage.mostPicked}/>
        <Category data={dataLandingPage.categories} />
      </>
    );
  }
}
