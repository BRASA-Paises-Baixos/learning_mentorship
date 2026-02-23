"use client";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function AuthControls() {
  return (
    <div className="flex items-center gap-2">
      <SignedOut>
        <SignInButton mode="redirect">
          <button
            type="button"
            className="inline-flex h-9 items-center justify-center rounded-full border border-foreground/15 bg-surface px-4 text-sm font-medium text-foreground transition hover:border-foreground/30"
          >
            Sign in
          </button>
        </SignInButton>
        <SignUpButton mode="redirect">
          <button
            type="button"
            className="inline-flex h-9 items-center justify-center rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Sign up
          </button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </div>
  );
}
