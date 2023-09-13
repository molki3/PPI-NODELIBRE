import { Router } from "express";

const router = Router();

//cuando soliciten la siguiente ruta...
router.get('/', (req, res) => res.render('index', {title: 'Main page'}))

router.get('/contact', (req, res) => res.render('contact', {title: 'Contact'}))

router.get('/about', (req, res) => res.render('about', {title: 'About'}))

export default router;