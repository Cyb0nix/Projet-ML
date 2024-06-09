import {Controller, Inject, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {FileInterceptor} from "@nestjs/platform-express";
import {CloudAnalyzerService} from "./cloud-analyzer.service";
import {ApiBody, ApiConsumes, ApiTags} from "@nestjs/swagger";

@ApiTags('cloud-analyzer')
@Controller('/')
export class CloudAnalyzerController {

    @Inject() private readonly cloudAnalyzerService: CloudAnalyzerService;

    @Post('analyze-image')
    @UseInterceptors(FileInterceptor('image'))
    @ApiConsumes('multipart/form-data')
    async analyzeImage(@UploadedFile() image: Express.Multer.File): Promise<string> {
        return this.cloudAnalyzerService.analyzeImage(image);
    }

}
