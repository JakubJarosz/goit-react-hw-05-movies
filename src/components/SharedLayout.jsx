import React , {useEffect} from 'react'
import { Outlet, NavLink, useLocation } from 'react-router-dom'
import styles from "../components/SharedLayout.module.css"
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;




export default function SharedLayout() {

    const url = useLocation().pathname;

    return (
        <>
            <div>
              <NavLink></NavLink>
                <ul className={styles.mainlist}>
                    <li className={styles.mainlistitem}>
              <NavLink to="/goit-react-hw-05-movies/" className={`${url}` === "/goit-react-hw-05-movies/" ? styles.active : styles.notactive }>Home</NavLink>
                    </li>
                    <li className={styles.mainlistitem}>
              <NavLink to="/goit-react-hw-05-movies/movie" className={`${url}` === "/goit-react-hw-05-movies/movie" ? styles.active : styles.notactive}>Movies</NavLink>
                    </li>
                    </ul>
                
            </div>
            <Outlet />
        </>
    )
}
