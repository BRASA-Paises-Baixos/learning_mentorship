import { auth, clerkClient } from "@clerk/nextjs/server";

export async function getCurrentUserId() {
  const { userId } = await auth();
  return userId ?? null;
}

export async function getCurrentUserEmail() {
  const { userId, sessionClaims } = await auth();
  if (!userId) {
    return null;
  }

  const emailFromClaims =
    typeof sessionClaims?.email === "string"
      ? sessionClaims.email
      : typeof sessionClaims?.email_address === "string"
        ? sessionClaims.email_address
        : null;

  if (emailFromClaims) {
    return emailFromClaims.toLowerCase();
  }
  return null;
}

export async function findClerkUserByEmail(email: string) {
  const normalized = email.trim().toLowerCase();
  if (!normalized) {
    return null;
  }

  const client = await clerkClient();
  const users = await client.users.getUserList({
    emailAddress: [normalized],
    limit: 1,
  });

  return users.data[0] ?? null;
}
