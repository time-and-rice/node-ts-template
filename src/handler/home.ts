import { catchAsync } from "./lib/catch-async";

export const getHome = catchAsync(async (_req, res) => {
  res.send(`Hi from home in ${process.env.NODE_ENV} env.`);
});
