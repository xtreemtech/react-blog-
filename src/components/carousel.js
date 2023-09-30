import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';

var heroData = [
  {
    id: 1,
    image: require('../assets/Images/Austria.jpg'),
    button: 'Green Hydrogen',
    title: 'Advancing Sustainable Hydrogen Production: Innovative Photoanode Breakthrough',
    description: 'Date of dates',
  },
  {
    id: 2,
    image: require('../assets/Images/Austrian-power-grid.png'),
    button: 'Solar Energy',
    title: 'In "Promoting Austrias Solar Revolution: Unveiling the Grid Capacity Map and Highlighting the Remarkable Growth of Photovoltaic Installations',
    description: 'Date of dates',
  },
  {
    id: 3,
    image: require('../assets/Images/hydrogen-electricity-pharma.png'),
    button: 'Green Hydrogen',
    title: 'Green Hydrogen Innovations Making Waves Across the Globe',
    description: 'Date of dates',
  },
];

function AppHero() {
  return (
    <section id="home" className="hero-block">
      <Carousel>
        {
          heroData.map(hero => {
            return (
              <Carousel.Item key={hero.id}>
                <img
                  className="d-block w-100"
                  src={hero.image}
                  alt={"slide " + hero.id}
                />
                <Carousel.Caption>
                  <div className='desc-block ml-20'>
                    <a className="btn btn-success" href={hero.link}>{hero.button}</a>
                    <h2 className='row'>{hero.title}</h2>
                    <p className='p-center'>{hero.description}</p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })
        }
      </Carousel>
    </section>
  );
}

export default AppHero;
