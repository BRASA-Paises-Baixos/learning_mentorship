import { getCurrentUserEmail, getCurrentUserId } from "./clerk";

export type AuthSession = {
  userId: string;
  userEmail?: string;
};

export async function getRequiredSession(): Promise<AuthSession> {
  const userId = await getCurrentUserId();

  if (!userId) {
    throw new Error("UNAUTHENTICATED");
  }

  const userEmail = await getCurrentUserEmail();

  return {
    userId,
    userEmail: userEmail || undefined,
  };
}
