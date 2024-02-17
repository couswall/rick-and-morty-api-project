import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { RickAndMortyApp } from './RickAndMortyApp'
import { UrlProvider } from './context/UrlProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UrlProvider>
      <RickAndMortyApp />
    </UrlProvider>
  </React.StrictMode>,
)
