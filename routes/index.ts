import { Router } from "express";
import globalRouter from "./globalRouter";

// Initialiastion du router Express
const router = Router();

// On lie le router "globals" au router principale
router.use(globalRouter);

export default router;