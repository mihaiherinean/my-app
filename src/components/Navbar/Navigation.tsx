import { NavLink as MantineNavLink } from "@mantine/core"
import React from "react"
import { NavLink } from "react-router-dom"
import { BsPhone } from "react-icons/bs"
import { AiOutlineLaptop, AiOutlineHome } from "react-icons/ai"
import { FaTabletAlt } from "react-icons/fa"
import { RiComputerLine } from "react-icons/ri"
import { TiVendorMicrosoft } from "react-icons/ti"

export const Navigation = () => {
  return (
    
      <div>
        <NavLink to='/' end>
          {({ isActive }) => (
            <MantineNavLink
              label='Home'
              active={isActive}
              icon={<AiOutlineHome size={20} />}
            />
          )}
        </NavLink>
        <NavLink to='/phones'>
          {({ isActive }) => (
            <MantineNavLink
              label='Phones'
              active={isActive}
              icon={<BsPhone size={20} />}
            />
          )}
        </NavLink>
        <NavLink to='/laptop'>
          {({ isActive }) => (
            <MantineNavLink
              label='Laptop'
              active={isActive}
              icon={<AiOutlineLaptop size={20} />}
            />
          )}
        </NavLink>

        <NavLink to='/tablets'>
          {({ isActive }) => (
            <MantineNavLink
              label='Tablets'
              active={isActive}
              icon={<FaTabletAlt size={20} />}
            />
          )}
        </NavLink>
        <NavLink to='/pc'>
          {({ isActive }) => (
            <MantineNavLink
              label='PC'
              active={isActive}
              icon={<RiComputerLine size={20} />}
            />
          )}
        </NavLink>
        <NavLink to='/software'>
          {({ isActive }) => (
            <MantineNavLink
              label='Software'
              active={isActive}
              icon={<TiVendorMicrosoft size={20} />}
            />
          )}
        </NavLink>
      </div>
   
  )
}
