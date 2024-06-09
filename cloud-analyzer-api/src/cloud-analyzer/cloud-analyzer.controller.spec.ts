import { Test, TestingModule } from '@nestjs/testing';
import { CloudAnalyzerController } from './cloud-analyzer.controller';

describe('CloudAnalyzerController', () => {
  let controller: CloudAnalyzerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CloudAnalyzerController],
    }).compile();

    controller = module.get<CloudAnalyzerController>(CloudAnalyzerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
