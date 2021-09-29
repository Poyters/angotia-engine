import { createNewUser } from "./createNewUser";

describe("createNewUser test suite", () => {
  const blankUser = createNewUser(
    "ssoid",
    "Rafał",
    "Kostecki"
  );

  test("is a function", () => {
    expect(typeof createNewUser).toEqual("function");
  });

  test("blank user exists ssoId", () => {
    expect(blankUser.ssoId).toBe("ssoid");
  });

  test("blank user exists created", () => {
    expect(blankUser.created).not.toBe(null);
  });

  test("blank user exists firstName", () => {
    expect(blankUser.profile.firstName).toBe("Rafał");
  });

  test("blank user exists lastName", () => {
    expect(blankUser.profile.lastName).toBe("Kostecki");
  });

  test("blank user exists description", () => {
    expect(blankUser.profile.description).toBe("");
  });

  test("blank user exists avatar", () => {
    expect(blankUser.profile.avatar).toBe(null);
  });

  test("blank user exists backgroundPicture", () => {
    expect(blankUser.profile.backgroundPicture).toBe(null);
  });

  test("blank user exists companyName", () => {
    expect(blankUser.profile.companyName).toBe(null);
  });

  test("blank user exists phone", () => {
    expect(blankUser.profile.phone).toBe(null);
  });

  test("blank user exists gender", () => {
    expect(blankUser.profile.gender).toBe(null);
  });

  test("blank user exists age", () => {
    expect(blankUser.profile.age).toBe(null);
  });
});
