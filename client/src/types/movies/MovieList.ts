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
    Movies_LIST_REQUEST = 'Movies_LIST_REQUEST',
    Movies_LIST_SUCCESS = 'Movies_LIST_SUCCESS',
    Movies_LIST_FAILURE = 'Movies_LIST_FAILURE'
}

export interface FetchStoriesRequestAction {
    type: MovieListActionTypes.Movies_LIST_REQUEST;
}

export interface FetchStoriesSuccessAction {
    type: MovieListActionTypes.Movies_LIST_SUCCESS;
    payload: { movies: Movie[]; pages: number; page: number, count: number };
}

export interface FetchStoriesFailureAction {
    type: MovieListActionTypes.Movies_LIST_FAILURE;
    payload: any;
}

export type MovieListAction =
    | FetchStoriesSuccessAction
    | FetchStoriesFailureAction
    | FetchStoriesRequestAction;
