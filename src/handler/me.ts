import { catchAsync } from "./lib/catch-async";

export const getMe = catchAsync(async (_req, res) => {
  res.send(`Hi from Me ${process.env.NODE_ENV}.`);
});
