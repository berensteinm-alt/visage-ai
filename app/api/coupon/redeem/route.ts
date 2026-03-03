import { NextResponse } from 'next/server';
import { PRICING_PLANS } from '@/types';

type RequestBody = {
  code: string;
  planId: string;
};

export async function POST(req: Request) {
  const { code, planId } = (await req.json()) as RequestBody;

  // Very simplified logic: only LAUNCH2025 works, everything else invalid
  if (code !== 'LAUNCH2025') {
    return NextResponse.json({ error: 'Invalid coupon code' }, { status: 400 });
  }

  const plan = PRICING_PLANS.find((p) => p.id === planId);
  if (!plan) {
    return NextResponse.json({ error: 'Invalid plan' }, { status: 400 });
  }

  // Here you would normally insert a row into generation_credits, etc.
  // For now we just simulate success:
  return NextResponse.json({
    type: 'free_credit',
    creditId: 'test-credit-id',
    message: '🎉 Free access granted!',
  });
}
