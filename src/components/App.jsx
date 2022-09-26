import React, { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import api from 'API/Api'


const HomePage = lazy(() => import("./HomePage"));
const MoviesPage = lazy(() => import("./MoviesPage"));
const MovieDetailsPage = lazy(() => import("./MovieDetailsPage"));



export const App = () => {
  const [PopularMovies, setPopularMovies] = useState([])
 

  useEffect(() => {
    fetchApiMostPopular();
  
  }, [])




  const fetchApiMostPopular = async () => {
    try {
      const PopMovies = await api.fetchMostPopularMovies();
      setPopularMovies(PopMovies.data.results);
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes basename="/goit-react-hw-05-movies">
          <Route path="/" element={<SharedLayout/>}>
     
          <Route index element={<HomePage
            PopularMovies={PopularMovies}
          />} />
          <Route path="/movie" element={<MoviesPage />} />
          <Route path={`/movie/:id`} element={<MovieDetailsPage
        
            
          />} />
          <Route path={`/movie/:id/cast`} element={<MovieDetailsPage />} />
          <Route path={`/movie/:id/reviews`} element={<MovieDetailsPage />} />
        </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
