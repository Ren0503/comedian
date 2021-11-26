import { Actor } from './Actor';

export interface ActorListState {
    actors: Actor[];
    pages?: number;
    page?: number;
    loading: boolean;
    error?: undefined;
}

export enum ActorListActionTypes {
    ACTOR_LIST_REQUEST = 'ACTOR_LIST_REQUEST',
    ACTOR_LIST_SUCCESS = 'ACTOR_LIST_SUCCESS',
    ACTOR_LIST_FAILURE = 'ACTOR_LIST_FAILURE'
}

export interface FetchStoriesRequestAction {
    type: ActorListActionTypes.ACTOR_LIST_REQUEST;
}

export interface FetchStoriesSuccessAction {
    type: ActorListActionTypes.ACTOR_LIST_SUCCESS;
    payload: { actors: Actor[]; pages: number; page: number };
}

export interface FetchStoriesFailureAction {
    type: ActorListActionTypes.ACTOR_LIST_FAILURE;
    payload: any;
}

export type ActorListAction =
    | FetchStoriesSuccessAction
    | FetchStoriesFailureAction
    | FetchStoriesRequestAction;
