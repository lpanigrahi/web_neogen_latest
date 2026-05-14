import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json() as Record<string, unknown>;
  console.log("Lead captured:", body);
  return NextResponse.json({ success: true });
}
