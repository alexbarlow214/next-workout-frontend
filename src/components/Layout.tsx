
import SideBar from './SideBar'
import TopBar from './TopBar'
import { ColorModeContext, useMode } from '../components/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

export default function Layout({ children }) {
    const [theme, colorMode] = useMode();
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
          <CssBaseline/>
          <div className="app" display="flex">
            <SideBar flex="1"/>
            <main className="content">
              <TopBar />
                {children}
            </main>
          </div>
      </ThemeProvider>
     </ColorModeContext.Provider>
    </>
  )
}