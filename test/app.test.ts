import request from "supertest";

import { app } from "@/app";
import { sleep } from "@test/util";

test("1 == 1", async () => {
  await sleep(1_000);
  expect(1).toBe(1);
});

describe("home", () => {
  test("get", async () => {
    const res = await request(app).get("/");
    expect(res.text).toBe("Hi from home in test env.");
  });
});

describe("me", () => {
  test("get", async () => {
    const res = await request(app).get("/me");
    expect(res.text).toBe("Hi from me in test env.");
  });
});
