import { Movie } from './Movie';

export interface MovieCreateState {
    success?: boolean;
    movie?: Movie;
    loading?: boolean;
    error?: any;
}

export enum MovieCreateActionTypes {
    MOVIE_CREATE_REQUEST = 'MOVIE_CREATE_REQUEST',
    MOVIE_CREATE_SUCCESS = 'MOVIE_CREATE_SUCCESS',
    MOVIE_CREATE_FAILURE = 'MOVIE_CREATE_FAILURE',
    MOVIE_CREATE_RESET = 'MOVIE_CREATE_RESET'
}

export interface MovieCreateRequestAction {
    type: MovieCreateActionTypes.MOVIE_CREATE_REQUEST;
}

export interface MovieCreateSuccessAction {
    type: MovieCreateActionTypes.MOVIE_CREATE_SUCCESS;
    payload: Movie;
}

export interface MovieCreateFailureAction {
    type: MovieCreateActionTypes.MOVIE_CREATE_FAILURE;
    payload: any;
}

export interface MovieCreateResetAction {
    type: MovieCreateActionTypes.MOVIE_CREATE_RESET;
}

export type MovieCreateAction =
    | MovieCreateRequestAction
    | MovieCreateSuccessAction
    | MovieCreateFailureAction
    | MovieCreateResetAction;
