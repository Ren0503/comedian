import { Router } from 'express';
import { 
    createMovie, 
    createMovieReview, 
    deleteMovie, 
    getMovieById, 
    getMovies, 
    getTopMovies, 
    updateMovie
} from '../controllers';
import { admin, protect } from '../middleware';

const router = Router();

router.route('/')
    .get(getMovies)
    .post(protect, admin, createMovie)

router.route('/top').get(getTopMovies)

router.route('/:id/reviews')
    .post(protect, createMovieReview)

router.route('/:id')
    .get(getMovieById)
    .put(protect, admin, updateMovie)
    .delete(protect, admin, deleteMovie)

export default router;
