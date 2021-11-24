import { Router } from 'express';
import { 
    createActor, 
    deleteActor, 
    getActorById, 
    getActors, 
    updateActor
} from '../controllers';
import { admin, protect } from '../middleware';

const router = Router();

router.route('/')
    .get(getActors)
    .post(protect, admin, createActor)

router.route('/:id')
    .get(getActorById)
    .put(protect, admin, updateActor)
    .delete(protect, admin, deleteActor)

export default router;
