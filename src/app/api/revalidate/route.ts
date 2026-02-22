import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      ok: false,
      message: "Revalidation endpoint placeholder. Add secret validation before enabling.",
    },
    { status: 501 }
  );
}
