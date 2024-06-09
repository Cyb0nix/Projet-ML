import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CloudAnalyzerModule } from './cloud-analyzer/cloud-analyzer.module';

@Module({
  imports: [CloudAnalyzerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
