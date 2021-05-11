import {IError} from "../globaltypes";

export interface ImageInitialStateInterface {
    error: IError | null
    imageUrl: string
}

export interface RootImageStateInterface {
    image: ImageInitialStateInterface
}