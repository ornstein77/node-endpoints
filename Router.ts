import { Elysia, t } from "elysia";
import { CategoryController } from "./controllers/CategoryController";

export class Router {
   static categories = new Elysia()
        .post(
            "/",
            ({ body }) => CategoryController.create(body),
            {
                body: t.Object({
                    name: t.String(),
                    description: t.Optional(t.String())
                })
            }
        )
        .get(
            "/:id",
            ({ params: { id } }) => CategoryController.getById(Number(id)),
            {
                params: t.Object({
                    id: t.String()
                })
            }
        )
        .get(
            "/",
            () => CategoryController.getAll()
        )
        .delete(
            "/:id",
            ({ params: { id } }) => CategoryController.delete(Number(id)),
            {
                params: t.Object({
                    id: t.String()
                })
            }
        );
}