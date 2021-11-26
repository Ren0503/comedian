import {
    UserLoginState,
	UserRegisterState,
	UserDetailState,
	UserListState,
	UserUpdateProfileState,
    UserUpdateState,
	UserDeleteState,
} from './users';

import {
    ActorCreateState,
    ActorDetailState,
    ActorListState,
    ActorUpdateState,
    ActorDeleteState,
} from './actors';

import {
    MovieCreateState,
    MovieDetailState,
    MovieListState,
    MovieUpdateState,
	MovieDeleteState,
    MovieTopState,
} from './movies';

export interface ReduxState {
    userLogin: UserLoginState;
	userRegister: UserRegisterState;
	userDetail: UserDetailState;
	userUpdateProfile: UserUpdateProfileState;
	userList: UserListState;
	userDelete: UserDeleteState;
	userUpdate: UserUpdateState;
    movieList: MovieListState;
	movieDetail: MovieDetailState;
	movieDelete: MovieDeleteState;
	movieCreate: MovieCreateState;
	movieUpdate: MovieUpdateState;
	movieTopRated: MovieTopState;
    actorList: ActorListState;
	actorDetail: ActorDetailState;
	actorDelete: ActorDeleteState;
	actorCreate: ActorCreateState;
	actorUpdate: ActorUpdateState;
}