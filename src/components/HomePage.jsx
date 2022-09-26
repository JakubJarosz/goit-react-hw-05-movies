import React from 'react'
import { Link } from 'react-router-dom'


export default function HomePage(props) {


    return (

        <div>
            <h1>Tranding today</h1>
            <ul>
                {props.PopularMovies && props.PopularMovies.map((value) =>
                    <li key={value.id}>
                        <Link to={`/goit-react-hw-05-movies/movie/${value.id}`}>{value.title || value.name}</Link>
                    </li>
                )}
            </ul>
        </div>

    )
}

