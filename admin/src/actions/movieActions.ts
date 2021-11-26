import axios from 'axios';
import { errorHandler } from 'error';
import { Actor } from 'types/actors';
import { AppThunk } from 'store';
import {
    MovieListActionTypes,
    MovieDetailActionTypes,
    Movie,
    MovieCreateActionTypes,
    MovieDeleteActionTypes,
    MovieUpdateActionTypes,
    MovieTopActionTypes,
} from 'types/movies';

interface UpdateMovieInput {
    _id: string;
    name: string;
    description: string;
    genres: string[];
    thumbnail: string;
    trailer: string;
    url: string;
    actors: Actor[];
    release: Date;
    times: number;
};

interface CreateMovieInput {
    name: string;
    description: string;
    genres: string[];
    thumbnail: string;
    trailer: string;
    url: string;
    actors: Actor[];
    release: Date;
    times: number;
};

export const listMovies = (
    keyword: string = '',
    pageNumber: string = ''
): AppThunk => async (dispatch) => {
    try {
        dispatch({
            type: MovieListActionTypes.MOVIES_LIST_REQUEST
        });

        const { data } = await axios.get<{
            movies: Movie[];
            page: number;
            pages: number;
            count: number;
        }>(`/api/movies?keyword=${keyword}&pageNumber=${pageNumber}`);

        dispatch({
            type: MovieListActionTypes.MOVIES_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: MovieListActionTypes.MOVIES_LIST_FAILURE,
            payload: errorHandler(error)
        });
    }
};

export const detailMovie = (id: string): AppThunk => async (
    dispatch
) => {
    try {
        dispatch({
            type: MovieDetailActionTypes.MOVIE_DETAIL_REQUEST
        });

        const { data } = await axios.get<Movie>(`/api/movies/${id}`);

        dispatch({
            type: MovieDetailActionTypes.MOVIE_DETAIL_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: MovieDetailActionTypes.MOVIE_DETAIL_FAILURE,
            payload: errorHandler(error)
        });
    }
};
  
export const createMovie = (movie: CreateMovieInput): AppThunk => async (dispatch, getState) => {
    try {
        dispatch({ type: MovieCreateActionTypes.MOVIE_CREATE_REQUEST });

        const { userInfo } = getState().userLogin;
        
        const config = {
            headers: {
                'Content-Type': 'Application/json',
                Authorization: `Bearer ${userInfo?.token}`
            }
        };

        const { data } = await axios.post<Movie>(`/api/movies`, movie, config);

        dispatch({
            type: MovieCreateActionTypes.MOVIE_CREATE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: MovieCreateActionTypes.MOVIE_CREATE_FAILURE,
            payload: errorHandler(error)
        });
    }
};

export const updateMovie = (movie: UpdateMovieInput): AppThunk => async (
    dispatch,
    getState
) => {
    try {
        dispatch({ type: MovieUpdateActionTypes.MOVIE_UPDATE_REQUEST });
        
        const { userInfo } = getState().userLogin;
        
        const config = {
            headers: {
                'Content-Type': 'Application/json',
                Authorization: `Bearer ${userInfo?.token}`
            }
        };

        const { data } = await axios.put<Movie>(
            `/api/movies/${movie._id}`,
            movie,
            config
        );

        dispatch({
            type: MovieUpdateActionTypes.MOVIE_UPDATE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: MovieUpdateActionTypes.MOVIE_UPDATE_FAILURE,
            payload: errorHandler(error)
        });
    }
};

export const deleteMovie = (id: string): AppThunk => async (
    dispatch,
    getState
) => {
    try {
        dispatch({
            type: MovieDeleteActionTypes.MOVIE_DELETE_REQUEST
        });

        const { userInfo } = getState().userLogin;

        const config = {
            headers: {
                'Content-Type': 'Application/json',
                Authorization: `Bearer ${userInfo?.token}`
            }
        };
        
        await axios.delete(`/api/movies/${id}/`, config);

        dispatch({
            type: MovieDeleteActionTypes.MOVIE_DELETE_SUCCESS
        });
    } catch (error) {
        dispatch({
            type: MovieDeleteActionTypes.MOVIE_DELETE_FAILURE,
            payload: errorHandler(error)
        });
    }
};

export const listTopStories = (): AppThunk => async (dispatch) => {
    try {
        dispatch({ type: MovieTopActionTypes.MOVIE_TOP_REQUEST });

        const { data } = await axios.get<Movie[]>(`/api/movies/top`);

        dispatch({
            type: MovieTopActionTypes.MOVIE_TOP_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: MovieTopActionTypes.MOVIE_TOP_FAILURE,
            payload: errorHandler(error)
        });
    }
};