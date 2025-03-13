import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/Heading'
import SkillList from './components/SkillList'
import NewSkillForm from './components/NewSkillForm'


function App() {
  const [count, setCount] = useState(0)
  const [skills, setSkill] = useState ([{name: 'HTML', level: 5}, 
  {name: 'CSS', level: 3},
   {name: 'Javascript', level: 4},
   {name: 'Python', level: 2}
  ]);

 
  return (
    
      <div className="App">
        <Heading className='teal-text' />
        <SkillList skills={skills} />
        <NewSkillForm setSkill={setSkill} skills={skills}/>
        </div>
   
  )
}

export default App;
