import SvG1 from '../../images/svg-2.svg';
import SvG2 from '../../images/svg-1.jpg';
import SvG3 from '../../images/jpg-2.jpg';
import SvG4 from '../../images/jpg-3.jpg';

export const homeObjOne = {
    primary: true,
    lightBg: false,
    lightTopLine: true,
    lightText: true,
    lightTextDesc: true,
    topLine: 'CABINET DE CONSEIL ET DE FORMATION',
    headline: 'Nous sommes une Société de Conseil et D’accompagnement',
    description:
      'Nous accompagnons les entreprises dans la définition et la déclinaison opérationnelle de leurs stratégies de transformation.',
    buttonLabel: 'Get Started',
    imgStart: '',
    img:  SvG1,
    alt: 'Home',
    start: ''
  };

  export const homeObjTwo = {
    primary: true,
    lightBg: false,
    lightTopLine: true,
    lightText: true,
    lightTextDesc: true,
    topLine: '',
    headline: 'Nos axes de travail',
    description:<>
      <p>Selon vos attentes et priorités, nos interventions et efforts de formation, portent sur l’acquisition de techniques et méthodes, ainsi que sur la pratique de comportements productifs, afin de promouvoir des terminologies et référentiels communs.</p><br />
      <p>Nous travaillons par adaptation / amélioration d’outils existants et par des mises en situations qui reflètent les réalités opérationnelles rencontrées par les acteurs.</p><br />
      <p>L’objectif est l’acquisition de réflexes plutôt qu’une simple compréhension intellectuelle.</p> </>,
    buttonLabel: 'Learn More',
    imgStart: '',
    img: SvG2,
    alt: 'Vault',
    start: ''
  };
  
  export const homeObjThree = {
    primary: false,
    lightBg: true,
    lightTopLine: false,
    lightText: false,
    lightTextDesc: false,
    topLine: '',
    headline:
      'Nos valeurs',
    description:
      <p>Transmettre avec pragmatisme et humilité une réflexion , des méthodes et des savoir-faire, enrichis par une expérience terrain. <br /><br /> Faire l’effort de comprendre vos réalités opérationnelles , afin que nos actions de formation servent vos priorités.<br /><br />Faire preuve d’honnêteté et de franchise  dans toutes les étapes de la relation.</p>,
    buttonLabel: 'View Case Study',
    imgStart: 'start',
    img: SvG3,
    alt: 'Vault',
    start: 'true'
  };
  
  export const homeObjFour = {
    primary: true,
    lightBg: true,
    lightTopLine: false,
    lightText: false,
    lightTextDesc: false,
    topLine: '',
    headline: 'Toutes vos données sont stockées sur notre serveur sécurisé',
    description:
      <>
      <p>Vous n'aurez jamais à vous soucier de la fuite de vos informations. Notre équipe d'experts en sécurité veillera à ce que vos dossiers sont conservés en toute sécurité.</p>
      </>,
    buttonLabel: 'Sign Up Now',
    imgStart: 'start',
    img: SvG4,
    alt: 'Vault',
    start: 'true'
  };
  