import { Movie } from './Movie';

export interface MovieListState {
    movies: Movie[];
    pages?: number;
    page?: number;
    count?: number;
    loading: boolean;
    error?: undefined;
}

export enum MovieListActionTypes {
    MOVIES_LIST_REQUEST = 'MOVIES_LIST_REQUEST',
    MOVIES_LIST_SUCCESS = 'MOVIES_LIST_SUCCESS',
    MOVIES_LIST_FAILURE = 'MOVIES_LIST_FAILURE'
}

export interface FetchMoviesRequestAction {
    type: MovieListActionTypes.MOVIES_LIST_REQUEST;
}

export interface FetchMoviesSuccessAction {
    type: MovieListActionTypes.MOVIES_LIST_SUCCESS;
    payload: { movies: Movie[]; pages: number; page: number, count: number };
}

export interface FetchMoviesFailureAction {
    type: MovieListActionTypes.MOVIES_LIST_FAILURE;
    payload: any;
}

export type MovieListAction =
    | FetchMoviesSuccessAction
    | FetchMoviesFailureAction
    | FetchMoviesRequestAction;
