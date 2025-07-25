import {useState, useEffect} from 'react'
import  './Cards.css'
import Devlens from '../images/logo-devlens.svg'
import Plus from '../images/logo-console-plus.svg'
import Dom from '../images/logo-dom-snapshot.svg'
import Grid from '../images/logo-grid-guides.svg'
import Json from '../images/logo-json-wizard.svg'
import Link from '../images/logo-link-checker.svg'
import Markup from '../images/logo-markup-notes.svg'
import Palette from '../images/logo-palette-picker.svg'
import Speed from '../images/logo-speed-boost.svg'
import Spy from '../images/logo-style-spy.svg'
import Tab from '../images/logo-tab-master-pro.svg'
import Buddy from '../images/logo-viewport-buddy.svg'
import Filter from './Filter'

function Cards() {
    const [cards, setCards] = useState([
      {
        id: 1,
        title: 'DevLens',
        description: 'Inspect layouts and visualize element boundaries.',
        logo: Devlens,
        isOn: false
      },
      {
        id: 2,
        title: 'StyleSpy',
        description: 'Instantly analyze and copy CSS from any webpage element.',
        logo: Spy,
        isOn: false
      },
      {
        id: 3,
        title: 'SpeedBoost',
        description: 'Optimizes browser resource usage to accelerate page loading.',
        logo: Speed,
        isOn: false
      },
      {
        id: 4,
        title: 'JSONWizard',
        description: 'Formats, validates, and prettifies JSON responses in-browser.',
        logo: Json,
        isOn: false
      },
      {
        id: 5,
        title: 'TabMaster Pro',
        description: 'Organizes browser tabs into groups and sessions.',
        logo: Tab,
        isOn: false
      },      {
        id: 6,
        title: 'ViewportBuddy',
        description: 'Simulates various screen resolutions directly within the browser.',
        logo: Buddy,
        isOn: false
      },      {
        id: 7,
        title: 'Markup Notes',
        description: 'Enables annotation and notes directly onto webpages for collaborative debugging.',
        logo: Markup,
        isOn: false
      },      {
        id: 8,
        title: 'GridGuides',
        description: 'Overlay customizable grids and alignment guides on any webpage.',
        logo: Grid,
        isOn: false
      },      {
        id: 9,
        title: 'Palette Picker',
        description: ' Instantly extracts color palettes from any webpage.',
        logo: Palette,
        isOn: false
      },      {
        id: 10,
        title: 'LinkChecker',
        description: '  Scans and highlights broken links on any page.',
        logo: Link,
        isOn: false
      },      {
        id: 11,
        title: 'DOM Snapshot',
        description: 'Capture and export DOM structures quickly.',
        logo: Dom,
        isOn: false
      },      {
        id: 12,
        title: 'ConsolePlus',
        description: 'Enhanced developer console with advanced filtering and logging.',
        logo: Plus,
        isOn: false
      },
    ]);
  
    const toggleSwitch = (id) => {
      setCards(prevCards =>
        prevCards.map(card =>
          card.id === id ? { ...card, isOn: !card.isOn } : card
        )
      );
    };

    const [filter, setFilter] = useState('all')
    const filteredCards = cards.filter(card =>{
        if (filter === 'active') return card.isOn;
        if (filter === 'inactive') return !card.isOn;
        return true;
    })

    const removeCard = (id) =>{
        setCards(prevCards => prevCards.filter(card => card.id !== id))
    }
  
    return (
        <div>
      <Filter setFilter={setFilter} />

      <div className="container">
        <div className="cards">
          {filteredCards.map(card => (
            <div key={card.id} className="card">
              <div className="about-card">
                <img src={card.logo} alt={card.title} />
                <div className="about-card-text">
                  <h1 className="card-heading">{card.title}</h1>
                  <p className="card-p">{card.description}</p>
                </div>
              </div>
              <div className="card-changes">
              <button onClick={() => removeCard(card.id)} className="remove-card-btn">Remove</button>
              <div
                  className={`toggle-switch ${card.isOn ? 'on' : 'off'}`}
                  onClick={() => toggleSwitch(card.id)}
                >
                  <div className="toggle-circle" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
  }

export default Cards;