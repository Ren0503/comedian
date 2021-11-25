import { Actor } from 'types/actors';

export interface Movie {
    _id: string;
    name: string;
    user: string;
    description: string;
    genres: string[];
    thumbnail: string;
    trailer: string;
    url: string;
    actors: Actor[];
    release: Date;
    times: number;
    views: number;
    rating: number;
    numReviews: number;
    reviews: Array<Review>;
}

export interface Review {
    _id: string;
    user: {
        _id: string;
        name: string;
        avatar: string;
    };
    rating: number;
    comment: string;
    createdAt: string;
}
