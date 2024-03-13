//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Landing from './components/Landing';
import About from './components/About';
import Login from './components/Login';
import NavigationBar from './components/NavigationBar';


function App() {
  return (
    <div className="App">
         
         
         <Router>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/Login" element={<Login />} />  
          </Routes>
         </Router>
        {/*
//        <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//   */}     </div>
  );
}

export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import CombinedPage from './components/CombinedPage9';

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={CombinedPage} />
//         {/* Add more routes if needed */}
//       </Switch>
//     </Router>
//   );
// };

// export default App;

