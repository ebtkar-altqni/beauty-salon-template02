import { headers } from "next/headers";

export async function getClientIP(): Promise<string | null> {
  const headersList = await headers();

  // Try different headers in order of preference
  const forwardedFor = headersList.get("x-forwarded-for");
  const realIp = headersList.get("x-real-ip");
  const cfConnectingIp = headersList.get("cf-connecting-ip");

  if (forwardedFor) {
    // x-forwarded-for can contain multiple IPs (client, proxy1, proxy2, ...)
    // The first one is usually the original client IP
    return forwardedFor.split(",")[0]?.trim() || null;
  }

  return realIp || cfConnectingIp || null;
}
