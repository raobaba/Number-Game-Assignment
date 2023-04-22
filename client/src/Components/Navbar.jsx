import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./Navbar.module.css";
const Links = [
    {
        path:"/",
        title:"Home"
    },
    {
        path:"/play",
        title:"Play"
    },
    {
        path:"/leaderboard",
        title:"LeaderBoard"
    }
]
export default function Navbar() {
  return (
    <>
    <div className={styles.navDiv}>
      {Links.map((link) => (
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.default
          }
          key={link.path}
          to={link.path}
        >
           {link.title}
          
        </NavLink>
      ))}
    </div>
    </>
  )
}
