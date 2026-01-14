import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div>
      <div className="app-download" id='app-download'>
        <p>For Better Experience Download <br /> CloudKitchen App</p>
        <div className="app-download-platforms">
            <a
              href="https://play.google.com/store/games?hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.play_store} alt="Play Store" />
            </a>
            <a
              href="https://www.apple.com/in/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.app_store} alt="Play Store" />
            </a>
        </div>
      </div>
    </div>
  )
}

export default AppDownload
