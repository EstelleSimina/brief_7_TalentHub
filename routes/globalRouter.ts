import { Router } from "express";
import { GlobalController } from "../controllers/GlobalController";

// Initialiastion du bookRouter Express
const globalRouter = Router();

// Déclaration de la route 'homepage'
globalRouter.get("/", (request, response) => {
  const controller = new GlobalController(request, response);
  controller.homepage();
});


export default globalRouter;