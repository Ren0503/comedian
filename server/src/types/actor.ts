import mongoose, { Document } from 'mongoose';

export interface Actor {
    user: string;
    name: string;
    fullName: string;
    image: string;
    bio: string;
    birth: Date;
    sex: string;
}

export interface ActorDocument extends Actor, Document {}

export interface ActorModel extends mongoose.Model<ActorDocument> {}