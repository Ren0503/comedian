import mongoose from 'mongoose';
import { MovieDocument } from '../types';

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const movieSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    genres: [{
        type: String,
        required: true,
    }],
    thumbnail: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    trailer: {
        type: String,
    },
    actors: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Actor',
    }],
    reviews: [reviewSchema],
    rating: {
        type: Number,
        default: 0,
    },
    views: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true
});

export const Movie = mongoose.model<MovieDocument>('Movie', movieSchema);