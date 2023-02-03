import { ColorModeContext, useMode } from '../components/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from "../components/TopBar"
//import Workouts from "./scenes/workouts"
import SideBar from "../components/SideBar"

export default function Workouts(){
    const [theme, colorMode] = useMode();
    return(<ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className="app">
              <SideBar/>
              <main className="content">
                <Topbar />
                HI
                {/* <Exercises exercises = {exercises}/>
                <input type="text" ref={inputRef}/>
                <button onClick={handleInput} >Click me! </button>
                <button onClick={colorMode.toggleColorMode} >Switch </button> */}
              </main>
            </div>
        </ThemeProvider>
       </ColorModeContext.Provider>)
}