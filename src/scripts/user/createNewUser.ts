export const createNewUser = (ssoId: string) => ({
  ssoId,
  created: Date.now()
});
