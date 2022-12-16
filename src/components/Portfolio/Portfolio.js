import { React, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './Portfolio.scss';
import { ReactComponent as LeftArrow } from '../../icons/left-arrow-svgrepo-com.svg';
import { ReactComponent as RightArrow } from '../../icons/right-arrow-svgrepo-com.svg';

const Portfolio = () => {
  const [hidden, setHidden] = useState(true);
  const [right, setRight] = useState(false);
  const [left, setLeft] = useState(false);

  const portfolioEl = useRef(null);

  const Right = () => {
    if (left) {
      setLeft(!left);
      for (let element of portfolioEl.current.children) {
        if (element.className === "middle") {
          element.classList.replace("middle", "left");
        }
        else if (element.className === "right") {
          element.classList.replace("right", "middle");
        }
        else if (element.className === "hidden") {
          element.classList.replace("hidden", "right");
        }
      }
    }

    else {
      setRight(!right);
      for (let element of portfolioEl.current.children) {
        if (element.className === "left") {
          element.classList.replace("left", "hidden");
        }
        else if (element.className === "middle") {
          element.classList.replace("middle", "left");
        }
        else if (element.className === "right") {
          element.classList.replace("right", "middle");
        }
      }
    }

  };

  const Left = () => {
    if (right) {
      setRight(!right);
      for (let element of portfolioEl.current.children) {
        if (element.className === "hidden") {
          element.classList.replace("hidden", "left");
        }
        else if (element.className === "left") {
          element.classList.replace("left", "middle");
        }
        else if (element.className === "middle") {
          element.classList.replace("middle", "right");
        }
      }
    }

    else {
      setLeft(!left);
      for (let element of portfolioEl.current.children) {
        if (element.className === "left") {
          element.classList.replace("left", "middle");
        }

        else if (element.className === "right") {
          element.classList.replace("right", "hidden");
        }

        else if (element.className === "middle") {
          element.classList.replace("middle", "right");
        }
      }
    }
  };


  return (
    <div className="Portfolio" >

      <div className='carousel' ref={portfolioEl}>
        {/* <LeftArrow onClick={() => Left()} style={left ? { display: "none" } : { display: "block" }} /> */}
        {/* <img src="https://picsum.photos/300/300?random=1" alt="" className='hidden' /> */}
        {/* <img src="https://picsum.photos/300/300?random=2" alt="" className='left' /> */}
        <img src="/assets/pictures/Sleutelbeeld_Final_Work_Luka_Crabbe.jpg" alt="" className='middle' />
        {/* <img src="https://picsum.photos/300/300?random=4" alt="" className='right' /> */}
        {/* <img src="https://picsum.photos/300/300?random=5" alt="" className='hidden' /> */}
        {/* <RightArrow onClick={() => Right()} style={right ? { display: "none" } : { display: "block" }} /> */}
      </div>

      <div className='portfolio_info'>
        <h3>Elysion D&D</h3>
        <p>Dit is een website met de bedoeling om DM's in een Dungeons & Dragons game te helpen met het organiseren van hun
          game. Dungeons & Dragons is een rollenspel waarbij een groep mensen op een fictioneel avontuur gaat
          met hun zelf gemaakte personages in een fantasiewereld. De website is gemaakt met behulp van Django voor de backend en React voor de frontend. Het belangrijkste
          voor deze website was dat er een canvas beschikbaar die de gebruiker zelf kon organiseren. De gebruiker zou er dan ook
          meerdere kunnen creëren als hij deze nodig had. Er waren twee componenten beschikbaar: Een notitiecomponent zodat je
          notities kon nemen tijdens het spel en verder was er ook nog een combattracker. De combattracker maakte gevechten die er
          vaak zijn in een D&D campagne overzichtelijker.
        </p>
      </div>
    </div>
  )
};

Portfolio.propTypes = {};

Portfolio.defaultProps = {};

export default Portfolio;
