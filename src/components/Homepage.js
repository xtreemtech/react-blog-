import React from "react";

export default function Homepage() {
  return (
    <div className="container">
      <div className="row">
      <div className="col-md-4">
        <div class="card">
        <div class="card-image">
            <img src="https://dynamotechtrends.com/wp-content/uploads/2023/09/AI2-1.jpg" alt="Card Image"/>
            <a href="#" class="zoom-button">SMART TECHNOLOGY</a>
        </div>
        <div class="card-content">
            <h2 class="card-title"><a href="#">Machine Learning for Energy Efficiency</a></h2>
            <p class="card-date">Date: September 19, 2023</p>
            <p class="card-description">The pursuit of energy efficiency is a driving force behind innovation in the heating and cooling industry. Scientists at South Korea’s Pusan National University have made significant strides in this arena by developing an Artificial…</p>
        </div>
    </div>
        </div>
        <div className="col-md-4">
        <div class="card">
        <div class="card-image">
            <img src="https://dynamotechtrends.com/wp-content/uploads/2023/09/plane-2.jpg" alt="Card Image"/>
            <a href="#" class="zoom-button">GREEN HYDROGEN</a>
        </div>
        <div class="card-content">
            <h2 class="card-title">Global Partnerships Fuel Hydrogen Technology Advancements</h2>
            <p class="card-date">Date: September 19, 2023</p>
            <p class="card-description">In an era where sustainability and eco-consciousness are paramount, innovations in clean energy are taking center stage across various sectors. Two recent developments in the world of hydrogen power have turned heads and sparked conversations…</p>
        </div>
    </div>
        </div>
        <div className="col-md-4">
        <div class="card">
        <div class="card-image">
            <img src="https://dynamotechtrends.com/wp-content/uploads/2023/09/Nigeria.jpg" alt="Card Image"/>
            <a href="#" class="zoom-button">SOLAR ENERGY</a>
        </div>
        <div class="card-content">
            <h2 class="card-title">Nigeria's Solar Energy Conundrum: "Shining Light on Curtailment"</h2>
            <p class="card-date">Date: September 19, 2023</p>
            <p class="card-description">Nigeria, a country blessed with abundant sunshine and a growing interest in renewable energy, is setting the stage for a rooftop solar and battery energy storage revolution. As the world transitions towards sustainable energy sources,…</p>
        </div>
    </div>
        </div>
      </div>
    </div>
  );
}
