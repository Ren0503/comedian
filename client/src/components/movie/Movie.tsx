import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { Movie as MovieType } from 'types/movies';

interface MovieProps {
    movie: MovieType;
}

const Movie: FunctionComponent<MovieProps> = ({ movie }: MovieProps) => {
    return (
        <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
            <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 ">
                {movie.genres}
            </span>

            <img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src={movie.thumbnail} alt="Thumbnail" />
            <div className="flex flex-col items-center my-3 space-y-2">
                <h1 className="text-gray-900 poppins text-lg">{movie.name}</h1>
                <p className="text-gray-500 poppins text-sm text-center">{movie.description.slice(0, 50)}</p>
                <Link to={`/movies/${movie._id}`}
                    className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
                    Watch Now
                </Link>
            </div>
        </div>
    )
}

export default Movie;
