import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import api from "../API/Api"

export default function MoviesPage() {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    

    const navigate = useNavigate();

    const handleChange = (evt) => {
        setSearch(evt.target.value)
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        await fetchApiSearch();
        navigate(`?query=${search}`, { replace: true })
    }

    const fetchApiSearch = async () => {
        try {
            const searchMovies = await api.fetchFromKey(search)
            setMovies(searchMovies.data.results);
            console.log(searchMovies.data.results)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleChange}
                />
                <button type="submit">click</button>
            </form>
            {movies && movies.map((value) =>
                <li key={value.id}>
                    <Link to={`/goit-react-hw-05-movies/movie/${value.id}`}>{value.title || value.name}</Link>
                </li>
            )}
        </div>
    )
}
