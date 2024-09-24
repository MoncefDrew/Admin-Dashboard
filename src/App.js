import {ColorModeContext,useMode} from "./theme";
import {CssBaseline,ThemeProvider} from "@mui/material";
import topbar from "./scenes/Global/Topbar";
import Topbar from "./scenes/Global/Topbar";


function App() {
  const [theme, colorMode] = useMode();
  return (
      //this is the way to set up the color context
      //so we have its access everywhere inside the app
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <div className="App">
            <main className="content">
              <Topbar></Topbar>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>

  );
}

export default App;
