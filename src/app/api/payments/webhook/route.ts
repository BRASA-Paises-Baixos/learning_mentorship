import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      ok: false,
      message: "Payment webhook placeholder. Wire up Gumroad signature validation when ready.",
    },
    { status: 501 }
  );
}
