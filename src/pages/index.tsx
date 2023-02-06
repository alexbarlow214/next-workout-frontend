import React, { useState, useEffect, useRef } from 'react';
import { ColorModeContext, useMode } from '../components/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
//import {v4 as uuidv4} from 'uuid';
import Topbar from "../components/TopBar"
//import Workouts from "./scenes/workouts"
import SideBar from "../components/SideBar"
//import Calendar from './scenes/calendar';

function Home() {
  const inputRef = useRef()
  const [theme, colorMode] = useMode();
//   async function handleInput(e){
//     const name = inputRef.current.value
//     await fetch("http://localhost:8002/exercise", {
//     method: 'POST',
//     headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     name: name,
//     type: 0,
//   })
// })
    
//     // setRetrieve(oldEx => {
//     //   return !oldEx
//     // })
//     // console.log(shouldRetrieve)
//     console.log(name)

//   }

  // const [exercises2, setExercises2] = useState([{id: 1, name: "hi"}, {id:2, name: "hello"}])


  // const[shouldRetrieve, setRetrieve] = useState(true)

  // const [exercises, setExercises] = useState([])
  // useEffect(() => {
  //   fetch("http://localhost:8002/exercise")
  //     .then((res) => res.json())
  //     .then((data) => setExercises(data.data));
  // }, [shouldRetrieve]);
  
      return (
    
              <>sdfsdf</>
              // <Exercises exercises = {exercises}/>
              // <input type="text" ref={inputRef}/>
              // <button onClick={handleInput} >Click me! </button>
              // <button onClick={colorMode.toggleColorMode} >Switch </button>

 );
            }


export default Home;
