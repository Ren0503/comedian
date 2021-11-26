import {
    MovieListAction,
    MovieListActionTypes,
    MovieListState,
    MovieDetailAction,
    MovieDetailActionTypes,
    MovieDetailState,
    MovieDeleteAction,
    MovieDeleteActionTypes,
    MovieDeleteState,
    MovieCreateAction,
    MovieCreateActionTypes,
    MovieCreateState,
    MovieUpdateAction,
    MovieUpdateActionTypes,
    MovieUpdateState,
    MovieTopAction,
    MovieTopActionTypes,
    MovieTopState,
} from 'types/movies';

const initialMovieListState: MovieListState = {
    movies: [],
    loading: false
};

export const movieListReducer = (
    state: MovieListState = initialMovieListState,
    action: MovieListAction
) => {
    switch (action.type) {
        case MovieListActionTypes.MOVIES_LIST_REQUEST:
            return {
                loading: true,
                movies: initialMovieListState.movies
            };
        case MovieListActionTypes.MOVIES_LIST_SUCCESS:
            return {
                loading: initialMovieListState.loading,
                movies: action.payload.movies,
                pages: action.payload.pages,
                page: action.payload.page,
                count: action.payload.count,
            };
        case MovieListActionTypes.MOVIES_LIST_FAILURE:
            return {
                loading: initialMovieListState.loading,
                movies: initialMovieListState.movies,
                error: action.payload
            };
        default:
            return state;
    }
};

const initialMovieDetailState: MovieDetailState = {
    loading: false
};

export const movieDetailReducer = (
    state: MovieDetailState = initialMovieDetailState,
    action: MovieDetailAction
) => {
    switch (action.type) {
        case MovieDetailActionTypes.MOVIE_DETAIL_REQUEST:
            return {
                loading: true,
                movie: initialMovieDetailState.movie
            };
        case MovieDetailActionTypes.MOVIE_DETAIL_SUCCESS:
            return {
                loading: initialMovieDetailState.loading,
                movie: action.payload
            };
        case MovieDetailActionTypes.MOVIE_DETAIL_FAILURE:
            return {
                loading: initialMovieDetailState.loading,
                movie: initialMovieDetailState.movie,
                error: action.payload
            };
        default:
            return state;
    }
};

const initialMovieDeleteState: MovieDeleteState = {
    loading: false
};

export const movieDeleteReducer = (
    state: MovieDeleteState = initialMovieDeleteState,
    action: MovieDeleteAction
) => {
    switch (action.type) {
        case MovieDeleteActionTypes.MOVIE_DELETE_REQUEST:
            return { loading: true };
        case MovieDeleteActionTypes.MOVIE_DELETE_SUCCESS:
            return {
                loading: initialMovieDeleteState.loading,
                success: true
            };
        case MovieDeleteActionTypes.MOVIE_DELETE_FAILURE:
            return {
                error: action.payload
            };
        default:
            return state;
    }
};

const initialMovieCreateState: MovieCreateState = {
    loading: false
};

export const movieCreateReducer = (
    state: MovieCreateState = initialMovieCreateState,
    action: MovieCreateAction
) => {
    switch (action.type) {
        case MovieCreateActionTypes.MOVIE_CREATE_REQUEST:
            return { loading: true };
        case MovieCreateActionTypes.MOVIE_CREATE_SUCCESS:
            return {
                loading: initialMovieCreateState.loading,
                success: true,
                movie: action.payload
            };
        case MovieCreateActionTypes.MOVIE_CREATE_FAILURE:
            return {
                error: action.payload
            };
        case MovieCreateActionTypes.MOVIE_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

const initialMovieUpdateState: MovieUpdateState = {
    loading: false
};

export const movieUpdateReducer = (
    state: MovieUpdateState = initialMovieUpdateState,
    action: MovieUpdateAction
) => {
    switch (action.type) {
        case MovieUpdateActionTypes.MOVIE_UPDATE_REQUEST:
            return { loading: true };
        case MovieUpdateActionTypes.MOVIE_UPDATE_SUCCESS:
            return {
                loading: initialMovieUpdateState.loading,
                success: true,
                movie: action.payload
            };
        case MovieUpdateActionTypes.MOVIE_UPDATE_FAILURE:
            return {
                error: action.payload
            };
        case MovieUpdateActionTypes.MOVIE_UPDATE_RESET:
            return {};
        default:
            return state;
    }
};

const initialMovieTopState: MovieTopState = {
    movies: [],
    loading: false
};

export const movieTopRatedReducer = (
    state: MovieTopState = initialMovieTopState,
    action: MovieTopAction
) => {
    switch (action.type) {
        case MovieTopActionTypes.MOVIE_TOP_REQUEST:
            return {
                loading: true,
                movies: initialMovieTopState.movies
            };
        case MovieTopActionTypes.MOVIE_TOP_SUCCESS:
            return {
                loading: initialMovieTopState.loading,
                movies: action.payload
            };
        case MovieTopActionTypes.MOVIE_TOP_FAILURE:
            return {
                movies: initialMovieListState.movies,
                error: action.payload
            };
        default:
            return state;
    }
};
