import React , {useEffect} from 'react'
import { Outlet, NavLink, useLocation } from 'react-router-dom'
import styles from "../components/SharedLayout.module.css"
import styled from "styled-components";




export default function SharedLayout() {

    const url = useLocation().pathname;

    return (
        <>
            <div>
              <NavLink></NavLink>
                <ul className={styles.mainlist}>
                    <li className={styles.mainlistitem}>
                        <NavLink to="/" className={`${url}` === "/" ? styles.active : styles.notactive }>Home</NavLink>
                    </li>
                    <li className={styles.mainlistitem}>
                        <NavLink to="/movie" className={`${url}` === "/movie" ? styles.active : styles.notactive}>Movies</NavLink>
                    </li>
                    </ul>
                
            </div>
            <Outlet />
        </>
    )
}
