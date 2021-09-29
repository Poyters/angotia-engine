"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const info_service_1 = require("./info.service");
describe("InfoService", () => {
    let provider;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [info_service_1.InfoService]
        }).compile();
        provider = module.get(info_service_1.InfoService);
    });
    it("should be defined", () => {
        expect(provider).toBeDefined();
    });
});
//# sourceMappingURL=info.service.test.js.map