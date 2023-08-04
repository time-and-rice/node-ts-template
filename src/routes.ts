import { Router } from "express";

import { getHome } from "./handler/home";
import { getMe } from "./handler/me";

const homeRouter = Router();
homeRouter.route("/").get(getHome);

const meRouter = Router();
meRouter.route("/").get(getMe);

const routes = [
  { path: "/", route: homeRouter },
  { path: "/me", route: meRouter },
];

export const router = Router();

routes.forEach(({ path, route }) => {
  router.use(path, route);
});
