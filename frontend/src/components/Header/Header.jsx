import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Your favorite food, just a click away</h2>
        <p>Order your favorite food here and enjoy delicious, freshly prepared meals delivered straight to your doorstep. Explore a wide range of cuisines, easy ordering, fast delivery, and quality food that satisfies every craving—anytime, anywhere.</p>
        <a href="#explore-menu">
          <button>View Menu</button>
        </a>
      </div>
    </div>
  )
}

export default Header
