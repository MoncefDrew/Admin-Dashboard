import {ColorModeContext,useMode} from "./theme";
import {CssBaseline,ThemeProvider} from "@mui/material";
import Topbar from "./scenes/Global/Topbar";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./scenes/Dashboard";
import Sidebar from "./scenes/Global/sidebar";
import { ProSidebar } from "react-pro-sidebar";
import Invoices from "./scenes/Invoices/index";
import Contacts from "./scenes/Contacts/index";
import Team from "./scenes/Team/index";
import Form from "./scenes/form";

import Bar from "./scenes/Bar/index";
import Pie from "./scenes/Pie/index";
import Line from "./scenes/Line/index";
import FAQ from "./scenes/Faq/index" ;
import Calendar from "./scenes/Calendar/calendar";
import Geography from "./scenes/Geography/index";




function App() {
  const [theme, colorMode] = useMode();
  return (
      //this is the way to set up the color context
      //,so we have its access everywhere inside the app
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <div className="App">
              <Sidebar/>
              <main className="content">
                  <Topbar/>
                  <Routes>
                      <Route path="/" element={<Dashboard/>}/>
                      <Route path="/invoices" element={<Invoices/>}/>
                      <Route path="/team" element={<Team/>}/>
                      <Route path="/contacts" element={<Contacts/>}/>
                      <Route path="/form" element={<Form/>}/>
                    <Route path="/bar" element={<Bar/>}/>
                    <Route path="/pie" element={<Pie/>}/>
                    <Route path="/line" element={<Line/>}/>
                    <Route path="/faq" element={<FAQ/>}/>
                    <Route path="/geography"element={<Geography/>}/>
                    <Route path="/calendar"element={<Calendar/>}/>


                </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>

  );
}

export default App;
