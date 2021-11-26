import { combineReducers } from 'redux';
import {
    userLoginReducer,
	userRegisterReducer,
	userDetailReducer,
	userUpdateProfileReducer,
    userListReducer,
	userDeleteReducer,
	userUpdateReducer,
} from './userReducers';

import {
	movieListReducer,
	movieDetailReducer,
    movieDeleteReducer,
	movieCreateReducer,
	movieUpdateReducer,
    movieTopRatedReducer,
} from './movieReducers';

import {
    actorCreateReducer,
    actorDeleteReducer,
    actorDetailReducer,
    actorListReducer,
    actorUpdateReducer,
} from './actorReducers';

import { ReduxState } from 'types/ReduxState';

const reducer = combineReducers<ReduxState>({
    userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userDetail: userDetailReducer,
	userUpdateProfile: userUpdateProfileReducer,
	userList: userListReducer,
	userDelete: userDeleteReducer,
	userUpdate: userUpdateReducer,
    movieList: movieListReducer,
	movieDetail: movieDetailReducer,
	movieDelete: movieDeleteReducer,
	movieCreate: movieCreateReducer,
	movieUpdate: movieUpdateReducer,
	movieTopRated: movieTopRatedReducer,
    actorCreate: actorCreateReducer,
    actorDelete: actorDeleteReducer,
    actorDetail: actorDetailReducer,
    actorList: actorListReducer,
    actorUpdate: actorUpdateReducer,
});

export default reducer;