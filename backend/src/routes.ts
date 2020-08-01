import express from "express";
import ItemsController from "./controllers/ItemsController";
import PointsController from "./controllers/PointsController";

const routes = express.Router();
const itemsController = new ItemsController();
const pointsController = new PointsController();

// Get all items
routes.get("/items", itemsController.index);

// Create a point
routes.post("/points", pointsController.store);

// Get all points
routes.get("/points", pointsController.index);

// Get specific point
routes.get("/points/:id", pointsController.show);

export default routes;
