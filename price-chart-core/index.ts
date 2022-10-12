import { createCanvas } from "canvas";

export interface IPriceData {
    time: string;
    price: number;
}

export function CreateChart () {

    const width = 1980;
    const height = 1080;

    const canvas = createCanvas(width, height);

    const context = canvas.getContext('2d');

    context.fillStyle = '#000';
    context.fillRect(0, 0, width, height);

    const text = 'Test Text';
    context.font = 'bold 70pt Menlo';
    context.textAlign = 'center';
    context.fillStyle = '#fff';
    context.fillText(text, 600, 170);

    return canvas.toBuffer();
}

