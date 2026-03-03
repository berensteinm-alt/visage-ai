import { NextResponse } from 'next/server';

export async function GET() {
  const freeMode = process.env.NEXT_PUBLIC_FREE_MODE === 'true';

  if (freeMode) {
    return NextResponse.json({ granted: true, reason: 'free_mode' });
  }

  // Placeholder: normally you’d check subscription / credits here
  return NextResponse.json({ granted: false, reason: 'payment_required' });
}

