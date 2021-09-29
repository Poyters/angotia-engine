"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userToPublic_1 = require("./userToPublic");
describe("userToPublic test suite", () => {
    const exampleUser = {
        _id: "234",
        ssoId: "123",
        created: 123456789,
        profile: {
            firstName: "Rafał",
            lastName: "Kostecki",
            description: "test",
            avatar: "blob",
            companyName: "company",
            phone: "666123696",
            gender: "nonbinary",
            age: 18,
            pet: {
                types: ["dog"],
                description: "cute"
            },
            keywords: ["pies zbigniew"]
        }
    };
    const publicExampleUser = (0, userToPublic_1.userToPublic)(exampleUser);
    const invalidId = {
        id: "12",
        ssoId: "412412",
        created: 123456789
    };
    const publicInvalidId = (0, userToPublic_1.userToPublic)(invalidId);
    test("is a function", () => {
        expect(typeof userToPublic_1.userToPublic).toEqual("function");
    });
    test("deletes sso id", () => {
        expect(publicExampleUser.ssoId).toEqual(undefined);
    });
    test("id is valid", () => {
        expect(publicExampleUser._id).toBe("234");
    });
    test("description is valid", () => {
        expect(publicExampleUser.profile.description).toBe("test");
    });
    test("avatar is valid", () => {
        expect(publicExampleUser.profile.avatar).toBe("blob");
    });
    test("firstName is valid", () => {
        expect(publicExampleUser.profile.firstName).toBe("Rafał");
    });
    test("lastName is valid", () => {
        expect(publicExampleUser.profile.lastName).toBe("Kostecki");
    });
    test("companyName is valid", () => {
        expect(publicExampleUser.profile.companyName).toBe("company");
    });
    test("phone is valid", () => {
        expect(publicExampleUser.profile.phone).toBe("666123696");
    });
    test("gender is valid", () => {
        expect(publicExampleUser.profile.gender).toBe("nonbinary");
    });
    test("age is valid", () => {
        expect(publicExampleUser.profile.age).toBe(18);
    });
    test("pet types are valid", () => {
        expect(publicExampleUser.profile.pet.types).toEqual(["dog"]);
    });
    test("pet description is valid", () => {
        expect(publicExampleUser.profile.pet.description).toBe("cute");
    });
    test("keywords are valid", () => {
        expect(publicExampleUser.profile.keywords).toEqual(["pies zbigniew"]);
    });
    test("publicInvalidId 1", () => {
        expect(publicInvalidId._id).toEqual("12");
    });
    test("publicInvalidId 2", () => {
        expect(publicInvalidId.id).toEqual(undefined);
    });
});
//# sourceMappingURL=userToPublic.test.js.map