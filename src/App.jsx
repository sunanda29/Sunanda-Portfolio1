import {useState} from 'react';
import {skills} from './data/skills';
import Hero from './components/Hero';
import ExploreWork from './components/ExploreWork';
import SkillExplorer from './components/SkillExplorer';
import Journey from './components/Journey';
import Contact from './components/Contact';
import './App.css';
export default function App(){const [selected,setSelected]=useState(skills[0]);return <><nav><a className="brand" href="#home">S.</a><div><a href="#work">Work</a><a href="#skills">Skills</a><a href="#journey">Journey</a><a href="#contact">Contact</a></div></nav><main><Hero/><ExploreWork skills={skills} onSelect={setSelected}/><SkillExplorer skill={selected} skills={skills} onSelect={setSelected}/><Journey/><Contact/></main><footer><span>Sunanda</span><span>Portfolio · {new Date().getFullYear()}</span></footer></>}
