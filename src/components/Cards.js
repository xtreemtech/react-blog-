import React from "react";
import "./cards.css";

import ai from "../assets/Images/BIm.jpg";
import plane from "../assets/Images/plane-2.jpg";
import nigeria from "../assets/Images/Nigeria.jpg";
import building from "../assets/Images/cons.jpg"
import renew from "../assets/Images/power-grid.jpg"
import aus from "../assets/Images/Aus.jpg"
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div>
      <div className="cards">
        <div className="card">
          <div className="image_card">
            <img src={ai} alt="ai-img" className="card-img" />
            <div className="post_category">
              <Link to="#">
                <h6>SMART TECHNOLOGY</h6>
              </Link>
            </div>
          </div>
          <h3 className="post_title">Machine Learning for Energy Efficiency</h3>
          <p className="post_date">September 14, 2023</p>
          <p className="post_except">
            The pursuit of energy efficiency is a driving force behind
            innovation in the heating and cooling industry. Scientists at South
            Korea’s Pusan National University have made significant strides in
            this arena by developing an Artificial…
          </p>
        </div>

        <div className="card">
          <div className="image_card">
            <img src={plane} alt="plane-img" className="card-img" />
            <div className="post_category">
              <Link to="#">
                <h6>GREEN HYDROGEN</h6>
              </Link>
            </div>
          </div>

          <h3 className="post_title">
            Global Partnerships Fuel Hydrogen Technology Advancements
          </h3>
          <p className="post_date">September 12, 2023</p>
          <p className="post_except">
            In an era where sustainability and eco-consciousness are paramount,
            innovations in clean energy are taking center stage across various
            sectors. Two recent developments in the world of hydrogen power have
            turned heads and sparked conversations…
          </p>
        </div>

        <div className="card">
          <div className="image_card">
            <img src={nigeria} alt="flag-img" className="card-img" />
            <div className="post_category">
              <Link to="#">
                <h6>SOLAR ENERGY</h6>
              </Link>
            </div>
          </div>
          <h3 className="post_title">
            Nigeria's Solar Energy Conundrum: "Shining Light on Curtailment"
          </h3>
          <p className="post_date">September 9, 2023</p>
          <p className="post_except">
            Nigeria, a country blessed with abundant sunshine and a growing
            interest in renewable energy, is setting the stage for a rooftop
            solar and battery energy storage revolution. As the world
            transitions towards sustainable energy sources,…
          </p>
        </div>
        <div className="card">
          <div className="image_card">
            <img src={building} alt="flag-img" className="card-img" />
            <div className="post_category">
              <Link to="#">
                <h6>SUSTAINABLE BUILDING</h6>
              </Link>
            </div>
          </div>
          <h3 className="post_title">
          Visual Tools for a Sustainable World: Shaping Green Practices"
          </h3>
          <p className="post_date">September 9, 2023</p>
          <p className="post_except">
          The construction industry is undergoing a profound transformation, 
          driven by the urgent need for sustainability
           and environmental responsibility. As we…
          </p>
        </div>
        <div className="card">
          <div className="image_card">
            <img src={renew} alt="flag-img" className="card-img" />
            <div className="post_category">
              <Link to="#">
                <h6>GREEN HYDROGEN</h6>
              </Link>
            </div>
          </div>
          <h3 className="post_title">
          The Role of Renewable Energy in Achieving Europe's Net-Zero Emissions Goal
          </h3>
          <p className="post_date">September 9, 2023</p>
          <p className="post_except">
          Europe’s Net-Zero Drive: Power Grid & Hydrogen Network Synergy The pursuit of
           global carbon neutrality reveals a game-changing strategy. Researchers…
          </p>
        </div>
        <div className="card">
          <div className="image_card">
            <img src={aus} alt="flag-img" className="card-img" />
            <div className="post_category">
              <Link to="#">
                <h6>SOLAR ENERGY</h6>
              </Link>
            </div>
          </div>
          <h3 className="post_title">
          Curtailment Challenges in Australia's Rooftop Solar and Battery Market
          </h3>
          <p className="post_date">September 9, 2023</p>
          <p className="post_except">
          Introduction The global transition towards sustainable energy sources is in full swing, 
          with rooftop solar panels and battery energy storage…
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;