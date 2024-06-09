import {Injectable} from '@nestjs/common';
import * as tf from '@tensorflow/tfjs-node';


@Injectable()
export class CloudAnalyzerService {

    public async analyzeImage(image: Express.Multer.File): Promise<string> {
        const model = await tf.loadLayersModel('file://model/model.json');

        const buffer = image.buffer;
        const decodedImage = tf.node.decodeImage(buffer as Uint8Array, 3);
        const resizedImage = tf.image.resizeBilinear(decodedImage, [224, 224]);
        const normalizedImage = resizedImage.div(255.0);
        const tensor = normalizedImage.expandDims(0);

        const prediction = model.predict(tensor) as tf.Tensor;
        const predictionData = prediction.dataSync();
        const maxIndex = predictionData.indexOf(Math.max(...predictionData));

        return this.getLabel(maxIndex);
    }



    private getLabel(index: number): string {
        const labels = [
            'sunny',
            'thunderstorm',
            'rainy',
            'cloudy',
            'rainy',
            'cloudy'
        ];

        return labels[index];
    }
}
