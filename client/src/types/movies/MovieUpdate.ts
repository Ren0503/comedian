import { Movie } from './Movie';

export interface MovieUpdateState {
    success?: boolean;
    movie?: Movie;
    loading?: boolean;
    error?: any;
}

export enum MovieUpdateActionTypes {
    MOVIE_UPDATE_REQUEST = 'MOVIE_UPDATE_REQUEST',
    MOVIE_UPDATE_SUCCESS = 'MOVIE_UPDATE_SUCCESS',
    MOVIE_UPDATE_FAILURE = 'MOVIE_UPDATE_FAILURE',
    MOVIE_UPDATE_RESET = 'MOVIE_UPDATE_RESET'
}

export interface MovieUpdateRequestAction {
    type: MovieUpdateActionTypes.MOVIE_UPDATE_REQUEST;
}

export interface MovieUpdateSuccessAction {
    type: MovieUpdateActionTypes.MOVIE_UPDATE_SUCCESS;
    payload: Movie;
}

export interface MovieUpdateFailureAction {
    type: MovieUpdateActionTypes.MOVIE_UPDATE_FAILURE;
    payload: any;
}

export interface MovieUpdateResetAction {
    type: MovieUpdateActionTypes.MOVIE_UPDATE_RESET;
}

export type MovieUpdateAction =
    | MovieUpdateRequestAction
    | MovieUpdateSuccessAction
    | MovieUpdateFailureAction
    | MovieUpdateResetAction;
