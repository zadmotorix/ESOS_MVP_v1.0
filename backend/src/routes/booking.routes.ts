import {Router} from 'express';
import {BookingController} from '../controllers/BookingController';
import {authenticate} from '../middleware/auth';
import {authorize} from '../middleware/authorize';
import {validateBooking} from '../middleware/validateBooking';

const router=Router();
const c=new BookingController();

router.use(authenticate);
router.get('/', c.list);
router.post('/', authorize('admin','dispatcher'), validateBooking, c.create);
router.put('/:id', authorize('admin','dispatcher'), c.update);
router.delete('/:id', authorize('admin'), c.remove);

export default router;
