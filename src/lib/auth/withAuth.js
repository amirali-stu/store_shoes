import { getCurrentUser } from "./getCurrentUser";

export function withAuth(handler) {
  return async (req, ctx) => {
    const { user, error } = await getCurrentUser();
    if (error) return error;
    return handler(req, ctx, user);
  };
}
