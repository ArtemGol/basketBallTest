import {ErrorInterface} from "../globaltypes";

export interface ImageInitialStateInterface {
    error: ErrorInterface | null
    imageUrl: string
}

export interface RootImageStateInterface {
    image: ImageInitialStateInterface
}