import React from 'react'
import CageImage from '../assets/Cage.jpg'
import demonslayer from '../assets/demonslayer.png'
import naruto from '../assets/naruto.png'
import jujustu from '../assets/jujustu.jpg'

const Slide = [
  {
    title: 'Jujutsu Kaisen',
    season: 'Season 1',
    type: 'TV series',
    duration: '23min',
    releaseDate: '21 April 2021',
    description:
      'Jujutsu Kaisen is the story of Yuji Itadori, an easygoing high school student who joins the occult club at school. When they accidentally summon grotesque creatures by messing with a cursed object, Itadori fights to save his friends.',
    details: 'Studio: MAPPA, Released: 2020',
    image: jujustu,
  },
  {
    title: 'Demon Slayer',
    season: 'Season 1',
    type: 'TV series',
    duration: '24min',
    releaseDate: '6 April 2019',
    description:
      'Demon Slayer follows the journey of Tanjiro Kamado, a young boy who becomes a demon slayer after his family is slaughtered by demons and his sister Nezuko is turned into one.',
    details: 'Studio: Ufotable, Released: 2019',
    image: demonslayer,
  },
  {
    title: 'Naruto',
    season: 'Original Series',
    type: 'TV series',
    duration: '23min',
    releaseDate: '3 October 2002',
    description:
      'Naruto follows the story of Naruto Uzumaki, a young ninja with dreams of becoming the strongest ninja and leader of his village, known as the Hokage.',
    details: 'Studio: Pierrot, Released: 2002',
    image: naruto,
  },
]

export default Slide
