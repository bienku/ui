import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './assets/styles/GlobalStyles';
import Welcome from './components/Welcome/Welcome';
import Navigation from './components/Navigation/Navigation';
import InfiniteScroll from './components/InfiniteScroll/InfiniteScroll';
import AccordionFaq from './components/AccordionFaq/AccordionFaq';
import Sidebar from './components/Sidebar/Sidebar';
import Combobox from './components/Combobox/Combobox';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navigation />
        <Routes>
          <Route path="/combobox" element={<Combobox />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/accordion-faq" element={<AccordionFaq />} />
          <Route path="/infinite-scroll" element={<InfiniteScroll />} />
          <Route path="/" element={<Welcome />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
