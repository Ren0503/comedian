import mongoose from 'mongoose';
import { ActorDocument } from '../types';

const actorSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true,
    },
    birth: {
        type: Date,
        required: true,
    }
}, {
    timestamps: true,
});

export const Actor = mongoose.model<ActorDocument>('Actor', actorSchema);