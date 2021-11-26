export interface MovieDeleteState {
    success?: boolean;
    loading?: boolean;
    error?: any;
}

export enum MovieDeleteActionTypes {
    MOVIE_DELETE_REQUEST = 'MOVIE_DELETE_REQUEST',
    MOVIE_DELETE_SUCCESS = 'MOVIE_DELETE_SUCCESS',
    MOVIE_DELETE_FAILURE = 'MOVIE_DELETE_FAILURE'
}

export interface MovieDeleteRequestAction {
    type: MovieDeleteActionTypes.MOVIE_DELETE_REQUEST;
}

export interface MovieDeleteSuccessAction {
    type: MovieDeleteActionTypes.MOVIE_DELETE_SUCCESS;
}

export interface MovieDeleteFailureAction {
    type: MovieDeleteActionTypes.MOVIE_DELETE_FAILURE;
    payload: any;
}

export type MovieDeleteAction =
    | MovieDeleteRequestAction
    | MovieDeleteSuccessAction
    | MovieDeleteFailureAction;
