import { Router } from "express";

const router = Router();

//cuando soliciten la siguiente ruta...
router.get('/', (req, res) => res.render('index', {title: 'Main page'}))

router.get('/contact', (req, res) => res.render('contact'))

router.get('/about', (req, res) => res.render('about'))

export default router;