import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Homepage } from '../pages/Homepage/Homepage'
import { Experience } from '../pages/Experience/Experience';
import { Sector } from '../pages/SectorMap/Sector';
import Info from '../pages/Info/Info';
import Ticket from '../pages/Ticket/Ticket';
import { ThemeContextProvider } from '../context/Theme';

export const Routers = () => {
    return (
    <BrowserRouter>
        <ThemeContextProvider>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="experience" element={<Experience />} />
                <Route path="sectorMap" element={<Sector />} />
                <Route path="info" element={<Info />} />
                <Route path="ticket" element={<Ticket />} />
            </Routes>
        </ThemeContextProvider>
    </BrowserRouter>
    )
}

export default Routers