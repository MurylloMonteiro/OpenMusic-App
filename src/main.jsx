import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './features/Home/HomePage'
import { SearchPage } from './features/Home/SearchPage'
import { ResultSearch } from './features/Home/ResultSearchPage'
import { Player } from './features/Home/PlayerPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/result" element={<ResultSearch/>} />
        <Route path="/play" element={<Player/>} />
        
      </Routes>
    </BrowserRouter>
  </StrictMode>
)