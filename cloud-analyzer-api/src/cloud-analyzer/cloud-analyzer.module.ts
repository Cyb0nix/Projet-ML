import { Module } from '@nestjs/common';
import { CloudAnalyzerService } from './cloud-analyzer.service';
import { CloudAnalyzerController } from './cloud-analyzer.controller';

@Module({
  providers: [CloudAnalyzerService],
  controllers: [CloudAnalyzerController]
})
export class CloudAnalyzerModule {}
