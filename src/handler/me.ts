import { catchAsync } from "./lib/catch-async";

export const getMe = catchAsync(async (_req, res) => {
  res.send(`Hi from me.`);
});
