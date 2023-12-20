import React from 'react';
import './App.css';
import { ChatBox } from './pages/ChatBox';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/layout/Layout';
import Blogs from './pages/layout/Blogs';
import Contact from './pages/layout/Contact';
import NoPage from './pages/layout/NoPage';
import Home from './pages/layout/Home';
import Gestures from './pages/gesture/Gesture';
import { ChatPro } from './pages/ChatPro';


function App() {
  return (
    <div className="App">
      {/* <ChatBox/> */}
      <Routes>
        <Route path="/" element={<ChatBox />}>
          <Route index element={<ChatBox />} />
        </Route>
        <Route path="/pro" element={<ChatPro />} />
        <Route path="/g" element={<Gestures />}>
          <Route index element={<Gestures />} />
        </Route>
        <Route path="/layout" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
