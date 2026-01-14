import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assests'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
          <img className='adds' src={assets.add_icon} alt="" />
          <p>Add Items</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
          <img className='order' src={assets.order_icon} alt="" />
          <p>List Items</p>
        </NavLink>
        <NavLink to='/order' className="sidebar-option">
          <img className='orders' src={assets.order_icon} alt="" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
