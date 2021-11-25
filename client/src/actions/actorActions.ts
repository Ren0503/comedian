import axios from 'axios';
import { errorHandler } from 'error';

import { AppThunk } from 'store';
import {
    ActorListActionTypes,
    ActorDetailActionTypes,
    Actor,
    ActorCreateActionTypes,
    ActorDeleteActionTypes,
    ActorUpdateActionTypes,
} from 'types/actors';

interface UpdateActorInput {
    _id: string;
    name: string;
    bio: string;
    image: string;
    sex: string;
    birth: Date;
};

export const listActors = (
    keyword: string = '',
    pageNumber: string = ''
): AppThunk => async (dispatch) => {
    try {
        dispatch({
            type: ActorListActionTypes.ACTOR_LIST_REQUEST
        });

        const { data } = await axios.get<{
            actors: Actor[];
            page: number;
            pages: number;
        }>(`/api/actors?keyword=${keyword}&pageNumber=${pageNumber}`);

        dispatch({
            type: ActorListActionTypes.ACTOR_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: ActorListActionTypes.ACTOR_LIST_FAILURE,
            payload: errorHandler(error)
        });
    }
};

export const detailActor = (id: string): AppThunk => async (
    dispatch
) => {
    try {
        dispatch({
            type: ActorDetailActionTypes.ACTOR_DETAIL_REQUEST
        });

        const { data } = await axios.get<Actor>(`/api/actors/${id}`);

        dispatch({
            type: ActorDetailActionTypes.ACTOR_DETAIL_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: ActorDetailActionTypes.ACTOR_DETAIL_FAILURE,
            payload: errorHandler(error)
        });
    }
};
  
export const createActor = (): AppThunk => async (dispatch, getState) => {
    try {
        dispatch({ type: ActorCreateActionTypes.ACTOR_CREATE_REQUEST });

        const { userInfo } = getState().userLogin;
        
        const config = {
            headers: {
                'Content-Type': 'Application/json',
                Authorization: `Bearer ${userInfo?.token}`
            }
        };

        const { data } = await axios.post<Actor>(`/api/actors`, {}, config);

        dispatch({
            type: ActorCreateActionTypes.ACTOR_CREATE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: ActorCreateActionTypes.ACTOR_CREATE_FAILURE,
            payload: errorHandler(error)
        });
    }
};

export const updateActor = (actor: UpdateActorInput): AppThunk => async (
    dispatch,
    getState
) => {
    try {
        dispatch({ type: ActorUpdateActionTypes.ACTOR_UPDATE_REQUEST });
        
        const { userInfo } = getState().userLogin;
        
        const config = {
            headers: {
                'Content-Type': 'Application/json',
                Authorization: `Bearer ${userInfo?.token}`
            }
        };

        const { data } = await axios.put<Actor>(
            `/api/actors/${actor._id}`,
            actor,
            config
        );

        dispatch({
            type: ActorUpdateActionTypes.ACTOR_UPDATE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: ActorUpdateActionTypes.ACTOR_UPDATE_FAILURE,
            payload: errorHandler(error)
        });
    }
};

export const deleteActor = (id: string): AppThunk => async (
    dispatch,
    getState
) => {
    try {
        dispatch({
            type: ActorDeleteActionTypes.ACTOR_DELETE_REQUEST
        });

        const { userInfo } = getState().userLogin;

        const config = {
            headers: {
                'Content-Type': 'Application/json',
                Authorization: `Bearer ${userInfo?.token}`
            }
        };
        
        await axios.delete(`/api/actors/${id}/`, config);

        dispatch({
            type: ActorDeleteActionTypes.ACTOR_DELETE_SUCCESS
        });
    } catch (error) {
        dispatch({
            type: ActorDeleteActionTypes.ACTOR_DELETE_FAILURE,
            payload: errorHandler(error)
        });
    }
};