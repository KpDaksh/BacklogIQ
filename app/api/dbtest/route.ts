import { NextResponse } from "next/server";
import { query } from "@/lib/db/postgres";

export async function GET() {
  try {
    // Simple query: get current time from Postgres
    const result = await query("SELECT NOW()");
    return NextResponse.json({ success: true, time: result.rows[0].now });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
