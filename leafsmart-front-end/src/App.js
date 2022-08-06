import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import About from "./components/About";
import Contact from "./components/Contact";
import LogIn from "./components/LogIn";
import Favourites from "./components/Favourites";
import Dashboard from "./components/Dashboard";



const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />

          {/* AuthRoutes*/}
          <Route path="LogIn" element={<LogIn />} />
          <Route path="Favourites" element={<Favourites />} />

          {/* Comp Routes*/}
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
