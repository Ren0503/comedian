import {
    ActorCreateState,
    ActorDetailState,
    ActorListState,
    ActorUpdateState,
    ActorDeleteState,
    ActorListAction,
    ActorListActionTypes,
    ActorDetailAction,
    ActorDetailActionTypes,
    ActorDeleteAction,
    ActorDeleteActionTypes,
    ActorCreateAction,
    ActorCreateActionTypes,
    ActorUpdateAction,
    ActorUpdateActionTypes,
} from 'types/actors';

const initialActorListState: ActorListState = {
    actors: [],
    loading: false,
};

export const actorListReducer = (
    state: ActorListState = initialActorListState,
    action: ActorListAction
) => {
    switch(action.type) {
        case ActorListActionTypes.ACTOR_LIST_REQUEST:
            return {
                loading: true,
                actors: initialActorListState.actors
            };
        case ActorListActionTypes.ACTOR_LIST_SUCCESS:
            return {
                loading: initialActorListState.loading,
                actors: action.payload.actors,
                pages: action.payload.pages,
                page: action.payload.page,
            };
        case ActorListActionTypes.ACTOR_LIST_FAILURE:
            return {
                loading: initialActorListState.loading,
                actors: initialActorListState.actors,
                error: action.payload
            };
        default:
            return state;
    }
};

const initialActorDetailState: ActorDetailState = {
    loading: false
};

export const actorDetailReducer = (
    state: ActorDetailState = initialActorDetailState,
    action: ActorDetailAction
) => {
    switch (action.type) {
        case ActorDetailActionTypes.ACTOR_DETAIL_REQUEST:
            return {
                loading: true,
                actor: initialActorDetailState.actor
            };
        case ActorDetailActionTypes.ACTOR_DETAIL_SUCCESS:
            return {
                loading: initialActorDetailState.loading,
                actor: action.payload
            };
        case ActorDetailActionTypes.ACTOR_DETAIL_FAILURE:
            return {
                loading: initialActorDetailState.loading,
                actor: initialActorDetailState.actor,
                error: action.payload
            };
        default:
            return state;
    }
}; 

const initialActorDeleteState: ActorDeleteState = {
    loading: false
};

export const actorDeleteReducer = (
    state: ActorDeleteState = initialActorDeleteState,
    action: ActorDeleteAction
) => {
    switch (action.type) {
        case ActorDeleteActionTypes.ACTOR_DELETE_REQUEST:
            return { loading: true };
        case ActorDeleteActionTypes.ACTOR_DELETE_SUCCESS:
            return {
                loading: initialActorDeleteState.loading,
                success: true
            };
        case ActorDeleteActionTypes.ACTOR_DELETE_FAILURE:
            return {
                error: action.payload
            };
        default:
            return state;
    }
};

const initialActorCreateState: ActorCreateState = {
    loading: false
};

export const actorCreateReducer = (
    state: ActorCreateState = initialActorCreateState,
    action: ActorCreateAction
) => {
    switch (action.type) {
        case ActorCreateActionTypes.ACTOR_CREATE_REQUEST:
            return { loading: true };
        case ActorCreateActionTypes.ACTOR_CREATE_SUCCESS:
            return {
                loading: initialActorCreateState.loading,
                success: true,
                actor: action.payload
            };
        case ActorCreateActionTypes.ACTOR_CREATE_FAILURE:
            return {
                error: action.payload
            };
        case ActorCreateActionTypes.ACTOR_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

const initialActorUpdateState: ActorUpdateState = {
    loading: false
};

export const actorUpdateReducer = (
    state: ActorUpdateState = initialActorUpdateState,
    action: ActorUpdateAction
) => {
    switch (action.type) {
        case ActorUpdateActionTypes.ACTOR_UPDATE_REQUEST:
            return { loading: true };
        case ActorUpdateActionTypes.ACTOR_UPDATE_SUCCESS:
            return {
                loading: initialActorUpdateState.loading,
                success: true,
                actor: action.payload
            };
        case ActorUpdateActionTypes.ACTOR_UPDATE_FAILURE:
            return {
                error: action.payload
            };
        case ActorUpdateActionTypes.ACTOR_UPDATE_RESET:
            return {};
        default:
            return state;
    }
};