export interface ActorDeleteState {
    success?: boolean;
    loading?: boolean;
    error?: any;
}

export enum ActorDeleteActionTypes {
    ACTOR_DELETE_REQUEST = 'ACTOR_DELETE_REQUEST',
    ACTOR_DELETE_SUCCESS = 'ACTOR_DELETE_SUCCESS',
    ACTOR_DELETE_FAILURE = 'ACTOR_DELETE_FAILURE'
}

export interface ActorDeleteRequestAction {
    type: ActorDeleteActionTypes.ACTOR_DELETE_REQUEST;
}

export interface ActorDeleteSuccessAction {
    type: ActorDeleteActionTypes.ACTOR_DELETE_SUCCESS;
}

export interface ActorDeleteFailureAction {
    type: ActorDeleteActionTypes.ACTOR_DELETE_FAILURE;
    payload: any;
}

export type ActorDeleteAction =
    | ActorDeleteRequestAction
    | ActorDeleteSuccessAction
    | ActorDeleteFailureAction;
