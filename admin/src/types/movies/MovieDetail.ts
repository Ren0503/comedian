import { Movie } from './Movie';

export interface MovieDetailState {
    loading: boolean;
    movie?: Movie;
    error?: undefined;
}

export enum MovieDetailActionTypes {
    MOVIE_DETAIL_REQUEST = 'MOVIE_DETAIL_REQUEST',
    MOVIE_DETAIL_SUCCESS = 'MOVIE_DETAIL_SUCCESS',
    MOVIE_DETAIL_FAILURE = 'MOVIE_DETAIL_FAILURE'
}

export interface FetchMovieRequestAction {
    type: MovieDetailActionTypes.MOVIE_DETAIL_REQUEST;
}

export interface FetchMovieSuccessAction {
    type: MovieDetailActionTypes.MOVIE_DETAIL_SUCCESS;
    payload: Movie;
}

export interface FetchMovieFailureAction {
    type: MovieDetailActionTypes.MOVIE_DETAIL_FAILURE;
    payload: any;
}

export type MovieDetailAction =
    | FetchMovieSuccessAction
    | FetchMovieFailureAction
    | FetchMovieRequestAction;
