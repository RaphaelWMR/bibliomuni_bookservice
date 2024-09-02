import { Router } from 'express';
import { deleteBook, getBook, getBooks, postBook } from '../controllers/book';

const router = Router();

router.get('/', getBooks);
router.get('/:id', getBook);
router.delete('/:id', deleteBook);
router.post('/', postBook);

export default router;