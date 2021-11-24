import mongoose, { Document } from 'mongoose';
import { ActorDocument } from './actor';

export interface Movie {
    user: string;
    name: string;
    description: string;
    genres: string[];
    thumbnail: string;
    url: string;
    trailer: string;
    actors: ActorDocument[];
    views: number;
    rating: number;
    numReviews: number;
    reviews: Review[];
}

export interface Review {
	user: string;
	rating: number;
	comment: string;
}

export interface MovieDocument extends Movie, Document {}

export interface MovieModel extends mongoose.Model<MovieDocument> {}