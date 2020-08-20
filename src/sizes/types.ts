import {IRectangle} from "@lindapaiste/geometry";


/**
 * cropped or contained images require a rectangle
 */
export interface PropRectangle {
    rectangle: IRectangle;
}

/**
 * square and circular images with "size" instead of "width"
 */
export interface PropSize {
    size: number;
}

/**
 * scaled images can take a number prop "scale"
 */
export interface PropScale {
    scale?: number;
}
