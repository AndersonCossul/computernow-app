import { OSEnum } from "../enums/OSEnum";

export interface Computer {
    id: number,
    os: OSEnum,
    title: string,
    description: string,
    price: number,
}