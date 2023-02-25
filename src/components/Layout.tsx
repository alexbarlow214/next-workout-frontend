
import SideBar from './SideBar'
import TopBar from './TopBar'
import { ColorModeContext, useMode } from '../components/theme';
import { CssBaseline, ThemeProvider, Box } from '@mui/material';

export default function Layout({ children }) {
    const [theme, colorMode] = useMode();
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Box className="app" display="flex" height="100%" minHeight="600px">
            <SideBar flex="1"/>
            <Box className="content" display="flex" flex="1" flexDirection="column">
              <TopBar />
              <Box display="flex" flex="1">
              {children}
              </Box>
            </Box>
          </Box>
      </ThemeProvider>
     </ColorModeContext.Provider>
    </>
  )
}