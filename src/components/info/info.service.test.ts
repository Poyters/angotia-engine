import { Test, TestingModule } from "@nestjs/testing";
import { InfoService } from "./info.service";

describe("InfoService", () => {
  let provider: InfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InfoService]
    }).compile();

    provider = module.get<InfoService>(InfoService);
  });

  it("should be defined", () => {
    expect(provider).toBeDefined();
  });
});
