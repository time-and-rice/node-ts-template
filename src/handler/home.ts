import { catchAsync } from "./lib/catch-async";

export const getHome = catchAsync(async (_req, res) => {
  res.send(`Hi from Home ${process.env.NODE_ENV}.`);
});
