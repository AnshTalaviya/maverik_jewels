import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Header_ad from './components/Header_ad'
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import ViewAllJewellary from './pages/ViewAllJewellary';
import Footer from './components/Footer';
import ChatBubble from './components/ChatBubble';
import RingPage from './pages/RingPage';
import NecklacePage from './pages/NecklacePage';
import RingSizeGuide from './pages/RingSizeGuide';
import EaringsPage from './pages/EaringsPage';
  

function App() {

  return (
    <>
  
      <Header_ad />
      <Header />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/viewAllJewellary" element={<ViewAllJewellary />} />
        <Route path="/ringpage" element={<RingPage />} />
        <Route path="/necklacepage" element={<NecklacePage />} />
        <Route path="/earringspage" element={<EaringsPage />} />
        <Route path="/ring-guide" element={<RingSizeGuide />} />


        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer/>
      <ChatBubble/>

    </>
  )
}

export default App
