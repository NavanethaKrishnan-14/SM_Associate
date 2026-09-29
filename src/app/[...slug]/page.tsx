import { redirect } from 'next/navigation';

/**
 * Catch-all fallback for stale or malformed application URLs.
 * Known routes still win through Next.js route matching.
 */
export default function CatchAllRoute() {
  redirect('/');
}
