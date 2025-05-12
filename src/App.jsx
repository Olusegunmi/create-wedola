import react from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/index";
import Story from "./Pages/Story-page";
import Gallery from "./Pages/Gallery-page";
import Timeline from "./Pages/Timeline-page";
import NewsPage from "./Pages/News-page";
import NewsDetailsPage from "./Pages/News-details-page";
import RSVP from "./Pages/RSVP-page";
import Event from "./Pages/events-Page";
import EventDetails from "./Pages/Event-details-page";

function App() {
 
return (
    <>
     <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/News-details-page" element={<NewsDetailsPage />} /> 
          <Route path="/RSVP" element={<RSVP />} />
          <Route path="/event" element={<Event />} />
          <Route path="/event-details" element={<EventDetails />} />
        </Routes>
      </Router>
     
    </>
  )
}

export default App
