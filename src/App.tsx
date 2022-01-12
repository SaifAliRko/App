import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from "./components/About";
import Intro from "./pages/Intro";
import GetStarted from "./pages/GetStarted";
import Types from "./pages/Types";
import StateReducer from "./pages/StateReducer";
import TestinStarted from "./pages/TestinStarted";
import AddItem from "./pages/AddItem";
import EditDelete from "./pages/EditDelete";
import UserInterface from "./pages/UserInterface";

function App(): JSX.Element {
  return (
    <div>
      <Router>
        <Navbar />
        <Sidebar>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/getStarted" element={<GetStarted />} />
            <Route path="/types" element={<Types />} />
            <Route path="/reducer" element={<StateReducer />} />
            <Route path="/testinStarted" element={<TestinStarted/>} />
            <Route path="/addItem" element={<AddItem/>} />
            <Route path="/editDelete" element={<EditDelete/>} />
            <Route path="/userInterface" element={<UserInterface/>} />
          </Routes>
        </Sidebar>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
