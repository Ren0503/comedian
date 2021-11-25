import { Movie } from './Movie';

export interface MovieUpdateState {
    success?: boolean;
    movie?: Movie;
    loading?: boolean;
    error?: any;
}

export enum MovieUpdateActionTypes {
    Movies_UPDATE_REQUEST = 'Movies_UPDATE_REQUEST',
    Movies_UPDATE_SUCCESS = 'Movies_UPDATE_SUCCESS',
    Movies_UPDATE_FAILURE = 'Movies_UPDATE_FAILURE',
    Movies_UPDATE_RESET = 'Movies_UPDATE_RESET'
}

export interface MovieUpdateRequestAction {
    type: MovieUpdateActionTypes.Movies_UPDATE_REQUEST;
}

export interface MovieUpdateSuccessAction {
    type: MovieUpdateActionTypes.Movies_UPDATE_SUCCESS;
    payload: Movie;
}

export interface MovieUpdateFailureAction {
    type: MovieUpdateActionTypes.Movies_UPDATE_FAILURE;
    payload: any;
}

export interface MovieUpdateResetAction {
    type: MovieUpdateActionTypes.Movies_UPDATE_RESET;
}

export type MovieUpdateAction =
    | MovieUpdateRequestAction
    | MovieUpdateSuccessAction
    | MovieUpdateFailureAction
    | MovieUpdateResetAction;
