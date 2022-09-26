import React from 'react'
import api from 'API/Api';
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styles from "../components/MovieDetailsPage.module.css";
import { v4 as uuid } from 'uuid';

export default function MovieDetailsPage() {
    const [clicked, setClicked] = useState();
    const [credits, setCredits] = useState();
    const [review, setReview] = useState();
    const [castClick, setCastClick] = useState(false);
    const [reviewClick, setReviewClick] = useState(false);



    const urlId = useParams();
    const backNavigate = useNavigate();

    useEffect(() => {
        fetchbyId();
        fetchbyCredits();
        fetchbyReview();
    }, [])
    
    const fetchbyId = async () => {
        try {
            const searchMovies = await api.fetchFromLinkClick(urlId.id);
            setClicked(searchMovies.data);
        } catch (error) {
            alert("There is no information about this movie currently");
            console.log(error);
        }
    }


    const fetchbyCredits = async () => {
        try {
            const credit = await api.fetchCredits(urlId.id);
            setCredits(credit.data.cast);
        } catch (error) {
            console.log(error);
        }
    }


    const fetchbyReview = async () => {
        try {
            const rev = await api.fetchReview(urlId.id);
            setReview(rev.data.results);
        } catch (error) {
            console.log(error);
        }
    }

    const handleCastClick = async () => {
        setCastClick(true);
        setReviewClick(false);
    }

    const handleReviewClick = async () => {
        setReviewClick(true);
        setCastClick(false);
    }
   
    const handleGoBackBtn = () => {
        backNavigate("/");
    }

    return (
        <div>
            <button onClick={handleGoBackBtn}>Go back</button>
            {clicked && (
                <>
                    <div className={styles.allMainInfoDiv}>
                        <div className={styles.imageDiv}>
                            <img src={`https://image.tmdb.org/t/p/w200${clicked.poster_path}`} />
                        </div>
                        <div className={styles.infoDiv}>
                <h2>{clicked.title}</h2>
                    <p>User Score: {clicked.vote_average * 10}% </p>
                    <h3>Overview</h3>
                    <p>{clicked.overview}</p>
                    <h4>Genres</h4>
                    <ul className={styles.genresList}>
                                {clicked.genres.map((el) => (
                                    <li key={uuid()} className={styles.generalList}>{el.name}</li>
                        ))}
                            </ul>
                        </div>
                    </div>
                    <p>Additional information</p>
                    <ul>
                        <li>
                            <Link to={`/goit-react-hw-05-movies/movie/${clicked.id}/cast`} onClick={handleCastClick}>Cast</Link>
                        </li>
                        <li>
                            <Link to={`/goit-react-hw-05-movies/movie/${clicked.id}/reviews`} onClick={handleReviewClick}>Reviews</Link>
                        </li>
                    </ul>
                    <div>
                        <ul>
                        {castClick && credits.map((el) =>
                    
                                <li key={el.id}>
                                <img src={`https://image.tmdb.org/t/p/w300${el.profile_path}`} alt={`Picture of ${el.name}`}/>
                                <p>{el.name}</p>
                                    <p>{el.character}</p>
                                </li>
                            
                            )}
                        </ul>
                    </div>
                    <div>
                        <ul>
                        {reviewClick && review.length > 0 && review.map((el) =>
                        <li key={el.id}>
                            <p>Author: {el.author}</p>
                            <p>{el.content}</p>
                           
                            </li>
                            
                            )}
                        </ul>
                        {reviewClick && review.length == 0 && (
                            <p>We don't have reviews for this movie</p>
                        )}
                        
                    </div>
                </>
           )}
        </div>
    )
}


