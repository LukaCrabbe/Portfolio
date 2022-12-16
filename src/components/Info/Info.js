import React from 'react';
import PropTypes from 'prop-types';
import './Info.scss';
import { ReactComponent as JSlogo } from '../../icons/javascript-logo-svgrepo-com.svg';
import { ReactComponent as Reactlogo } from '../../icons/react-svgrepo-com.svg';
import { ReactComponent as InDesignlogo } from '../../icons/adobe-indesign-cs6-logo-svgrepo-com.svg';
import { ReactComponent as XDlogo } from '../../icons/adobe-xd-1-logo-svgrepo-com.svg';
import { ReactComponent as Laravellogo } from '../../icons/laravel-svgrepo-com.svg';
import { ReactComponent as CSSLogo } from '../../icons/css-3-svgrepo-com.svg';
import { ReactComponent as AngularLogo } from '../../icons/angular-svgrepo-com.svg';
import { ReactComponent as IllustratorLogo } from '../../icons/adobe-illustrator-svgrepo-com.svg';
import { ReactComponent as PhotoshopLogo } from '../../icons/photoshop-svgrepo-com.svg';
import { ReactComponent as PythonLogo } from '../../icons/python-svgrepo-com.svg';
import { ReactComponent as JavaLogo } from '../../icons/java-svgrepo-com.svg';
import { ReactComponent as PHPLogo } from '../../icons/php-svgrepo-com.svg';
import { ReactComponent as LinkedInLogo } from '../../icons/linkedin-svgrepo-com.svg';
import { ReactComponent as FacebookLogo } from '../../icons/facebook-svgrepo-com.svg';
import { ReactComponent as Telephone } from '../../icons/telephone-svgrepo-com.svg';
import { ReactComponent as Email } from '../../icons/email-svgrepo-com.svg';



const Info = () => {


  return (<div className="Info">
    <div className='personalInfo'>
      <h3>Wie ben ik?</h3>
      <p>
        Mijn naam is Luka Crabbe en ik ben een derdejaarsstudent multimedia en creative technologies aan de Erasmus
        hogeschool Brussel. In deze opleiding volg ik de specialisatie
        web. Back-end en front-end development heb ik geleerd in
        deze specialisatie maar mijn voorkeur gaat eerder uit naar
        front-end development. Ik zou mezelf omschrijven als iemand
        die behulpzaam is en geen enkel problem heeft om in een
        team te werken. Mijn moedertaal is Nederlands maar omdat ik
        al mijn hele leven naar school ga in Brussel heb ik nog een
        goede kennis van Frans. Met Engels heb ik ook helemaal geen
        problemen.
      </p>
    </div>

    <div className='skills'>
      <h3>Skills</h3>
      <ul>
        <li>
          <JSlogo />
          <p>Javascript</p>
        </li>
        <li>
          <Reactlogo />
          <p>React</p>
        </li>
        <li>
          <InDesignlogo />
          <p>Indesign</p>
        </li>
        <li>
          <XDlogo />
          <p>XD</p>
        </li>
        <li>
          <Laravellogo />
          <p>Laravel</p>
        </li>
        <li>
          <CSSLogo />
          <p>CSS</p>
        </li>
        <li>
          <AngularLogo />
          <p>Angular</p>
          <p className='baseKnowledge'>Basiskennis</p>
        </li>
        <li>
          <IllustratorLogo />
          <p>Illustrator</p>
          <p className='baseKnowledge'>Basiskennis</p>
        </li>
        <li>
          <PhotoshopLogo />
          <p>Photoshop</p>
          <p className='baseKnowledge'>Basiskennis</p>
        </li>
        <li>
          <PythonLogo />
          <p>Python</p>
          <p className='baseKnowledge'>Basiskennis</p>
        </li>
        <li>
          <JavaLogo />
          <p>Java</p>
          <p className='baseKnowledge'>Basiskennis</p>
        </li>
        <li>
          <PHPLogo />
          <p>PHP</p>
          <p className='baseKnowledge'>Basiskennis</p>
        </li>
      </ul>
    </div>

    <div className='contact'>
      <h3>Links + contactinfo</h3>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/luka-crabbe-9b00791a6/">
            <LinkedInLogo />
            <p>LinkedIn</p>
          </a>
        </li>
        <li>
          <Telephone />
          <p>GSM</p>
          <p><b>+32477182090</b></p>
        </li>
        <li>
          <a href="mailto:lukacrabbe@hotmail.com">
            <Email />
            <p>Email</p>
          </a>
        </li>
      </ul>
    </div>
  </div>)
};

Info.propTypes = {};

Info.defaultProps = {};

export default Info;
