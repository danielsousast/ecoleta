import { Request, Response } from "express";
import connection from "../database/connection";

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await connection("items").select("*");

    const serializedItems = items.map((item) => {
      return {
        ...item,
        image_url: `http://localhost:3333/uploads/${item.image}`,
      };
    });

    return response.json(serializedItems);
  }
}

export default ItemsController;
