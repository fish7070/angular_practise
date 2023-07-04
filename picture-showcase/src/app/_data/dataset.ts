import { Dataset } from "../_model/dataset-model";
import { IMAGES_ONE, IMAGES_TWO } from "./images";

export const DATASET: Dataset[] = [{
    id: '1',
    name: 'dataset-01',
    description: '這是第一筆資料集',
    images: IMAGES_ONE
},
{
    id: '2',
    name: 'dataset-02',
    description: '這是第二筆資料集',
    images: IMAGES_TWO
}]