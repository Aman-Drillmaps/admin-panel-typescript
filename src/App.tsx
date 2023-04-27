import React from "react";
import { ColorModeContax, useMode } from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import SideBar from "./scenes/global/Sidebar";
import Team from "./scenes/team";
import Invoice from "./scenes/invoices";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import Faq from "./scenes/faq";
import Form from "./scenes/form";
import Geography from "./scenes/geography";
import Bar from "./scenes/bar";
import Contacts from "./scenes/contacts";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContax.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/invoice" element={<Invoice />} />
              {/* <Route path="/form" element={<Form />} /> */}
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/contacts" element={<Contacts />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/faq" element={<Faq />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}

            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContax.Provider>
  );
}

export default App;
