import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://usw1-glorious-bulldog-34852.upstash.io",
  token: process.env.REDIS_KEY!,
});
