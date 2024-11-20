import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import WebFont from 'webfontloader';
import Home from './pages/home';
import Footer from './components/footer';
import Membership from './pages/membership';
import Contact from './pages/contact';
import Navigation from './components/navigation';
import TeamInfo from './pages/teamInfo';
import './app.css';

function App() {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Alegreya Sans', 'Alegreya SC'],
            },
        });
    }, []);

    return (
        <div id="app">
            <main>
                <Navigation />
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/membership" element={<Membership />} />
                    <Route path="/teams" element={<TeamInfo />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
