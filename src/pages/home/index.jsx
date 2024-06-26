import React from "react";
import Hero from "../../components/hero/Hero";
import Katolog from "../../components/katolog/Katolog";
import Norlight from "../../components/norlight/Norlight";
import Brend from "../../components/brend/Brend";
import Blok from "../../components/blok/Blok";
import Story from "../../components/story/Story";
import Product from "../product/index";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Katolog />
      <Norlight />
      <Product />
      <Brend />
      <Blok />
      <Story />
    </div>
  );
};

export default Home;
