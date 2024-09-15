// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;

// // src/App.js

// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Issues from './pages/Issues';
// import Team from './pages/Team';
// import Upvote from './pages/Upvote';
// import Navbar from './components/Navbar';  // Navbar component

// const App = () => {
//   const [issues, setIssues] = React.useState([
//     {
//       name: 'Issue 1',
//       description: 'This is a description of issue 1',
//       timestamp: Date.now(),
//       votes: 10,
//       downvotes: 2,
//     },
//     {
//       name: 'Issue 2',
//       description: 'This is a description of issue 2',
//       timestamp: Date.now() - 100000,
//       votes: 5,
//       downvotes: 1,
//     },
//   ]);

//   return (
//     <div className="App">
//       <Navbar />  {/* Navbar appears on all pages */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/issues" element={<Issues />} />
//         {/* <Route path="/team" element={<Team />} />
//         <Route path="/upvote" element={<Upvote />} /> */}
//       </Routes>
//     </div>
//   );
// };

// export default App;


// src/App.js

// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Home  from './pages/Home.js';
// import Issues  from './pages/Issues.js';
// import  Team  from './pages/Team.js';
// import Upvote  from './pages/Upvote.js';
// import Chatbot from './components/ChatBot.js';
// import Navbar from './components/Navbar';
// import IssuesProvider  from './contexts/IssuesContext';  // Import IssuesProvider

// const App = () => {
//   return (
//     <IssuesProvider>
//       <Navbar/>
//         <div>
//           <Routes>
//             <Route path="/" element={<Home/>} />
//             <Route path="/issues" element={<Issues />} />
//             {/*<Route path="/team" element={<Team />} />
//             <Route path="/upvote" element={<Upvote/>} />*/}
//           </Routes>
//           <Chatbot />
//         </div>
//     </IssuesProvider>
//   );
// };

// export default App;


      // <Navbar />  {/* Navbar appears on all pages */}
      // <Routes>
      //   <Route path="/" element={<Home />} />
      //   <Route path="/issues" element={<Issues />} />
      //   {/* <Route path="/team" element={<Team />} />
      //   <Route path="/upvote" element={<Upvote />} /> */}
      // </Routes>


// // src/App.js
// import React from 'react';
// import {Route, Routes } from 'react-router-dom';
// // import Home from './pages/Home.js';
// import Issues from './pages/Issues.js';
// // import Team from './pages/Team.js';
// import Upvote from './pages/Upvote.js';
// // import Chatbot from './components/ChatBot.js';
// // import Navbar from './components/Navbar';
// import IssuesContext from './contexts/IssuesContext.js';  // Import IssuesProvider as named export

// const App = () => {
//   return (
//     <IssuesContext>
//         {/* <Navbar /> */}
//         <div>
//           <Routes>
//             {/* <Route path="/" element={<Home />} /> */}
//             <Route path="/issues" element={<Issues />} />
//             {/* <Route path="/team" element={<Team />} /> */}
//             <Route path="/upvote" element={<Upvote />} />
//           </Routes>
//           {/* <Chatbot /> */}
//         </div>
//     </IssuesContext>
//   );
// };

// export default App;


// / src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Issues from './pages/Issues';
import Team from './pages/Team';
import Upvote from './pages/Upvote';
// import Chatbot from './components/ChatBot';
import Navbar from './components/Navbar';
import { IssuesProvider } from './contexts/IssuesContext';

const App = () => {
  return (
    <IssuesProvider>
    <div>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/issues" element={<Issues />} />
            <Route path="/team" element={<Team />} />
            <Route path="/upvote" element={<Upvote />} />
          </Routes>
          {/* <Chatbot /> */}
        </div>
      </div>
    </IssuesProvider>
  );
};

export default App;
