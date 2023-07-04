import { Image } from "./image-model";

export interface Dataset {
    id: string;
    name: string;
    description: string;
    images: Image[];
}