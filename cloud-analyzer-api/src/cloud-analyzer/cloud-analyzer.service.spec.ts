import { Test, TestingModule } from '@nestjs/testing';
import { CloudAnalyzerService } from './cloud-analyzer.service';

describe('CloudAnalyzerService', () => {
  let service: CloudAnalyzerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CloudAnalyzerService],
    }).compile();

    service = module.get<CloudAnalyzerService>(CloudAnalyzerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
