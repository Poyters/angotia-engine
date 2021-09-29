import { createNewUser } from "./createNewUser";

describe("createNewUser test suite", () => {
  const blankUser = createNewUser("ssoid");

  test("is a function", () => {
    expect(typeof createNewUser).toEqual("function");
  });

  test("blank user exists ssoId", () => {
    expect(blankUser.ssoId).toBe("ssoid");
  });

  test("blank user exists created", () => {
    expect(blankUser.created).not.toBe(null);
  });
});
