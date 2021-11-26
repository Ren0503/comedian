import { Actor } from './Actor';

export interface ActorUpdateState {
    success?: boolean;
    actor?: Actor;
    loading?: boolean;
    error?: any;
}

export enum ActorUpdateActionTypes {
    ACTOR_UPDATE_REQUEST = 'ACTOR_UPDATE_REQUEST',
    ACTOR_UPDATE_SUCCESS = 'ACTOR_UPDATE_SUCCESS',
    ACTOR_UPDATE_FAILURE = 'ACTOR_UPDATE_FAILURE',
    ACTOR_UPDATE_RESET = 'ACTOR_UPDATE_RESET'
}

export interface ActorUpdateRequestAction {
    type: ActorUpdateActionTypes.ACTOR_UPDATE_REQUEST;
}

export interface ActorUpdateSuccessAction {
    type: ActorUpdateActionTypes.ACTOR_UPDATE_SUCCESS;
    payload: Actor;
}

export interface ActorUpdateFailureAction {
    type: ActorUpdateActionTypes.ACTOR_UPDATE_FAILURE;
    payload: any;
}

export interface ActorUpdateResetAction {
    type: ActorUpdateActionTypes.ACTOR_UPDATE_RESET;
}

export type ActorUpdateAction =
    | ActorUpdateRequestAction
    | ActorUpdateSuccessAction
    | ActorUpdateFailureAction
    | ActorUpdateResetAction;
