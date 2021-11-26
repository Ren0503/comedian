import asyncHandler from 'express-async-handler';
import { ActorDocument, Request, Response } from '../types';
import { Movie } from '../models';

export const getMovies = asyncHandler(
    async (req: Request, res: Response) => {
        const pageSize = 12;
        const page = Number(req.query.pageNumber) || 1;
        const sort = req.query.sort || '-createdAt';

        const keyword = req.query.keyword
            ? {
                name: {
                    $regex: req.query.keyword,
                    $options: 'i'
                } as any
            }
            : {};

        const count = await Movie.countDocuments({ ...keyword });
        const movies = await Movie.find({ ...keyword })
            .limit(pageSize)
            .skip(pageSize * (page - 1))
            .sort(sort)

        res.json({ movies, page, pages: Math.ceil(count / pageSize), count });
    }
);

export const getMovieById = asyncHandler(
    async (req: Request, res: Response) => {
        const { id } = req.params as { id: string };

        const movie = await Movie.findByIdAndUpdate(
            id,
            { $inc: { views: 1 } },
            { new: true }
        )
            .populate('actors')
            .populate('reviews.user', 'name avatar')

        if (movie) {
            res.json(movie);
        } else {
            res.status(404);
            throw new Error('Movie not found');
        }
    }
);

export const createMovie = asyncHandler(
    async (req: Request, res: Response) => {
        const {
            name,
            description,
            genres,
            thumbnail,
            url,
            trailer,
            actors,
            release,
            times,
        } = req.body as {
            name: string;
            description: string;
            genres: string[];
            thumbnail: string;
            url: string;
            trailer: string;
            actors: ActorDocument[];
            release: Date;
            times: number;
        }

        const movie = new Movie({
            user: req.user?._id,
            name,
            description,
            genres,
            thumbnail,
            url,
            trailer,
            actors,
            release,
            times,
        });

        const createdMovie = await movie.save();
        res.status(201).json(createdMovie);
    }
);

export const updateMovie = asyncHandler(
    async (req: Request, res: Response) => {
        const { id } = req.params as { id: string };
        const movie = await Movie.findById(id);

        if (!movie) {
            res.status(404);
            throw new Error('Movie not found.');
        } else {
            const {
                name,
                description,
                genres,
                thumbnail,
                url,
                trailer,
                actors,
                release,
                times,
            } = req.body as {
                name: string;
                description: string;
                genres: string[];
                thumbnail: string;
                url: string;
                trailer: string;
                actors: ActorDocument[];
                release: Date;
                times: number;
            }

            movie.name = name;
            movie.description = description;
            movie.genres = genres;
            movie.thumbnail = thumbnail;
            movie.url = url;
            movie.trailer = trailer;
            movie.actors = actors;
            movie.release = release;
            movie.times = times;

            const updatedMovie = await movie.save();
            res.status(201).json(updatedMovie);
        }
    }
);

export const deleteMovie = asyncHandler(
    async (req: Request, res: Response) => {
        const { id } = req.params as { id: string };
        const movie = await Movie.findById(id);

        if (!movie) {
            res.status(404);
            throw new Error('Movie not found.');
        } else {
            await movie.remove();
            res.json({ message: 'Movie Removed' });
        }
    }
);

export const createMovieReview = asyncHandler(
    async (req: Request, res: Response) => {
        const { id } = req.params as { id: string };
        const movie = await Movie.findById(id);

        if (!req.user) {
			res.status(400);
			throw new Error('User not found');
		}

        const { rating, comment } = req.body as {
			rating: number;
			comment: string;
		};

        if (movie) {
            const alreadyReviewed = movie.reviews.find(
                (r) => r.user.toString() === req.user!._id.toString()
            );

            if (alreadyReviewed) {
				res.status(400);
				throw new Error('Movie already reviewed');
			}

            const review = {
				rating,
				comment,
				user: req.user._id
			};
            
            movie.reviews.push(review);
            movie.numReviews = movie.reviews.length;
            movie.rating =
                movie.reviews.reduce((acc, item) => item.rating + acc, 0) /
                movie.reviews.length;

            await movie.save();
            res.status(201).json({ message: 'Review Added' });
        } else {
            res.status(404);
			throw new Error('Movie not found.');
        }
    }
);

export const getTopMovies = asyncHandler(
    async (req: Request, res: Response) => {
        const movies = await Movie.find({}).sort({ views: -1 }).limit(5);

        res.json(movies);
    }
);

