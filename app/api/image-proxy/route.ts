import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const imageUrl = req.nextUrl.searchParams.get("url");

  if (!imageUrl) {
    return NextResponse.json({ error: "Missing URL" }, { status: 400 });
  }

  try {
    // Allow only URLs starting with https:// and ending with .ufs.sh
    const url = new URL(imageUrl);

    const isAllowedHost = url.hostname.endsWith(".ufs.sh");
    const isHttps = url.protocol === "https:";

    if (!isAllowedHost || !isHttps) {
      return NextResponse.json({ error: "Invalid host" }, { status: 403 });
    }

    const imageResponse = await fetch(url.toString());

    if (!imageResponse.ok) {
      return NextResponse.json(
        { error: "Failed to fetch image" },
        { status: 500 }
      );
    }

    const contentType =
      imageResponse.headers.get("content-type") || "image/png";
    const arrayBuffer = await imageResponse.arrayBuffer();

    console.log(
      `Image fetched successfully: ${url.toString()} - Content-Type: ${contentType}`
    );

    return new NextResponse(arrayBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  } catch (_: any) {
    return NextResponse.json({ error: "Invalid URL format" }, { status: 400 });
  }
}
