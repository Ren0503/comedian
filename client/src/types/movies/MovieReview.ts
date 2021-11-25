export interface MovieCreateReviewState {
	success?: boolean;
	loading?: boolean;
	error?: any;
}

export enum MovieCreateReviewActionTypes {
	MOVIE_CREATE_REVIEW_REQUEST = 'MOVIE_CREATE_REVIEW_REQUEST',
	MOVIE_CREATE_REVIEW_SUCCESS = 'MOVIE_CREATE_REVIEW_SUCCESS',
	MOVIE_CREATE_REVIEW_FAILURE = 'MOVIE_CREATE_REVIEW_FAILURE',
	MOVIE_CREATE_REVIEW_RESET = 'MOVIE_CREATE_REVIEW_RESET'
}

export interface MovieCreateReviewRequestAction {
	type: MovieCreateReviewActionTypes.MOVIE_CREATE_REVIEW_REQUEST;
}

export interface MovieCreateReviewSuccessAction {
	type: MovieCreateReviewActionTypes.MOVIE_CREATE_REVIEW_SUCCESS;
}

export interface MovieCreateReviewFailureAction {
	type: MovieCreateReviewActionTypes.MOVIE_CREATE_REVIEW_FAILURE;
	payload: any;
}

export interface MovieCreateReviewResetAction {
	type: MovieCreateReviewActionTypes.MOVIE_CREATE_REVIEW_RESET;
}

export type MovieCreateReviewAction =
	| MovieCreateReviewRequestAction
	| MovieCreateReviewSuccessAction
	| MovieCreateReviewFailureAction
	| MovieCreateReviewResetAction;
