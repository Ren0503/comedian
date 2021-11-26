import { Actor } from './Actor';

export interface ActorDetailState {
    loading: boolean;
    actor?: Actor;
    error?: undefined;
}

export enum ActorDetailActionTypes {
    ACTOR_DETAIL_REQUEST = 'ACTOR_DETAIL_REQUEST',
    ACTOR_DETAIL_SUCCESS = 'ACTOR_DETAIL_SUCCESS',
    ACTOR_DETAIL_FAILURE = 'ACTOR_DETAIL_FAILURE'
}

export interface FetchActorRequestAction {
    type: ActorDetailActionTypes.ACTOR_DETAIL_REQUEST;
}

export interface FetchActorSuccessAction {
    type: ActorDetailActionTypes.ACTOR_DETAIL_SUCCESS;
    payload: Actor;
}

export interface FetchActorFailureAction {
    type: ActorDetailActionTypes.ACTOR_DETAIL_FAILURE;
    payload: any;
}

export type ActorDetailAction =
    | FetchActorSuccessAction
    | FetchActorFailureAction
    | FetchActorRequestAction;
