import React, { useState, useEffect, useRef } from "react";
import { ColorModeContext, useMode } from "../components/theme";
import {
  Box,
  CssBaseline,
  ThemeProvider,
  useTheme,
  Button,
} from "@mui/material";
import Header from "../components/Header";
//import {v4 as uuidv4} from 'uuid';
import Topbar from "../components/TopBar";
//import Workouts from "./scenes/workouts"
import SideBar from "../components/SideBar";
//import Calendar from './scenes/calendar';
import { tokens } from "../components/theme";
import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  //const inputRef = useRef()
  //const [theme, colorMode] = useMode();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const router = useRouter();
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
    <Box m="20px" display="flex" flex="1" flexDirection="column">
      <Box display="flex" justifyContent="space-between" alignItems="center" flex="0">
        <Header title="DASHBOARD" subtitle="Welcome tasdasd" />
      </Box>
      {/* Grid */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap="20px"
        flex="1"
      >
        {/* <Link href={"/workouts"}> */}
        <Box
          onClick={(e) => {
            e.preventDefault();
            router.push("/workouts");
          }}
          gridColumn="span 12"
          backgroundColor={colors.cherryRed[500]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flex = "1"
        >
          <Button href={"/frequency"} display="flex">
            yo
          </Button>
        </Box>
        <Box
          onClick={(e) => {
            e.preventDefault();
            router.push("/workouts");
          }}
          gridColumn="span 12"
          backgroundColor={colors.cherryRed[500]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flex = "1"
        >
          <Button href={"/frequency"} display="flex">
            yo
          </Button>
        </Box>
        <Box
          onClick={(e) => {
            e.preventDefault();
            router.push("/workouts");
          }}
          gridColumn="span 12"
          backgroundColor={colors.cherryRed[500]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flex = "1"
        >
          <Button href={"/frequency"} display="flex">
            yo
          </Button>
        </Box>
        {/* </Link> */}
      </Box>
    </Box>
  );
}

export default Home;
