import { Actor } from './Actor';

export interface ActorCreateState {
    success?: boolean;
    actor?: Actor;
    loading?: boolean;
    error?: any;
}

export enum ActorCreateActionTypes {
    ACTOR_CREATE_REQUEST = 'ACTOR_CREATE_REQUEST',
    ACTOR_CREATE_SUCCESS = 'ACTOR_CREATE_SUCCESS',
    ACTOR_CREATE_FAILURE = 'ACTOR_CREATE_FAILURE',
    ACTOR_CREATE_RESET = 'ACTOR_CREATE_RESET'
}

export interface ActorCreateRequestAction {
    type: ActorCreateActionTypes.ACTOR_CREATE_REQUEST;
}

export interface ActorCreateSuccessAction {
    type: ActorCreateActionTypes.ACTOR_CREATE_SUCCESS;
    payload: Actor;
}

export interface ActorCreateFailureAction {
    type: ActorCreateActionTypes.ACTOR_CREATE_FAILURE;
    payload: any;
}

export interface ActorCreateResetAction {
    type: ActorCreateActionTypes.ACTOR_CREATE_RESET;
}

export type ActorCreateAction =
    | ActorCreateRequestAction
    | ActorCreateSuccessAction
    | ActorCreateFailureAction
    | ActorCreateResetAction;
