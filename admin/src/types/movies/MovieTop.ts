import { Movie } from './Movie';

export interface MovieTopState {
	movies: Movie[];
	loading?: boolean;
	error?: undefined;
}

export enum MovieTopActionTypes {
	MOVIE_TOP_REQUEST = 'MOVIE_TOP_REQUEST',
	MOVIE_TOP_SUCCESS = 'MOVIE_TOP_SUCCESS',
	MOVIE_TOP_FAILURE = 'MOVIE_TOP_FAILURE'
}

export interface MovieTopRequestAction {
	type: MovieTopActionTypes.MOVIE_TOP_REQUEST;
}

export interface MovieTopSuccessAction {
	type: MovieTopActionTypes.MOVIE_TOP_SUCCESS;
	payload: Movie[];
}

export interface MovieTopFailureAction {
	type: MovieTopActionTypes.MOVIE_TOP_FAILURE;
	payload: any;
}

export type MovieTopAction =
	| MovieTopSuccessAction
	| MovieTopFailureAction
	| MovieTopRequestAction;
