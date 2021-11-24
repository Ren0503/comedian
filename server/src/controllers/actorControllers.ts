import asyncHandler from '../middleware/asyncHandler';
import { Request, Response } from '../types';
import { Actor, Movie } from '../models';

export const createActor = asyncHandler(
    async (req: Request, res: Response) => {
        const actor = new Actor({
            user: req.user?._id,
            name: 'Sample title',
            image: '/images/sample.jpg',
            sex: 'male',
            bio: 'sample description',
            birth: '01/01/1999',
        });

        const createdActor = await actor.save();
        res.status(201).json(createdActor);
    }
);

export const getActors = asyncHandler(
    async (req: Request, res: Response) => {
        const pageSize = 8;
        const page = Number(req.query.pageNumber) || 1;
        const keyword = req.query.keyword
            ? {
                name: {
                    $regex: req.query.keyword,
                    $options: 'i'
                } as any
            }
            : {};

        const count = await Actor.countDocuments({ ...keyword });
        const actors = await Actor.find({ ...keyword })
            .limit(pageSize)
            .skip(pageSize * (page - 1))
            .sort({ createdAt: -1 })

        res.json({ actors, page, pages: Math.ceil(count / pageSize) });
    }
);

export const getActorById = asyncHandler(
    async (req: Request, res: Response) => {
        const { id } = req.params as { id: string };

        const actor = await Actor.findById(id);

        if (actor) {
            res.json(actor);
        } else {
            res.status(404);
            throw new Error('Actor not found');
        }
    }
)


export const updateActor = asyncHandler(
    async (req: Request, res: Response) => {
        const { id } = req.params as { id: string };
        const actor = await Actor.findById(id);

        if (!actor) {
            res.status(404);
            throw new Error('Actor not found.');
        } else {
            const {
                name,
                image,
                sex,
                bio,
                birth,
            } = req.body as {
                name: string;
                image: string;
                sex: string;
                bio: string;
                birth: Date;
            };

            actor.name = name;
            actor.image = image;
            actor.sex = sex;
            actor.bio = bio;
            actor.birth = birth;

            const updatedActor = await actor.save();
            res.status(201).json(updatedActor);
        }
    }
);

export const deleteActor = asyncHandler(
    async (req: Request, res: Response) => {
        const { id } = req.params as { id: string };
        const actor = await Actor.findById(id);

        if (!actor) {
            res.status(404);
            throw new Error('Actor not found.');
        } else {
            await actor.remove();
            res.json({ message: 'Actor Removed' });
        }
    }
);