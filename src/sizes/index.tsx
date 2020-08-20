import React from 'react';
import Image from '../Image';
import {PropScale, PropSize} from "./types";
import {getScaleForHeight, getScaleForWidth, getScaleToFit, ISized, PropHeight, PropWidth} from "@lindapaiste/geometry";
import {ImageProps} from "../Image/types";

/**
 * create a useful library of standard image display components
 * to minimize the amount of props and inline styling needed to achieve an effect
 */

//------------------------------WITH GIVEN SIZE-------------------------------//

/**
 * Create an image with the provided width and height. The resulting element will always be of the desired size, but
 * the image itself may be truncated on the sides due to resize mode "cover"
 */
export const FixedSizeImage = (props: ImageProps & ISized) => (
    <Image
        {...props}
        resizeMode="cover"
    />
);

/**
 * Create an image which fits inside of the provided width and height, but keeps its own shape.  The resulting element
 * will have the exact size that was specified, but the image may have black/white bars on the side.
 */
export const FixedContainedImage = (props: ImageProps & ISized) => (
    <Image
        {...props}
        resizeMode="contain"
    />
);

/**
 * Similar to a FixedContainedImage, it contains the image in the provided width and height while preserving aspect
 * ratio. Where it differs is that the returned element has the size of the image itself after it has been contained,
 * rather than the size of the container.
 *
 * Due to the flexibility of the underlying getScaleToFit function, width and height can both be optional.
 */
export const RestrainedImage = (props: ImageProps & Partial<ISized>) => (
    <ScaledImage
        {...props}
        scale={getScaleToFit(props.image, props)}
    />
);

/**
 * Behaves the same as RestrainedImage except that it will only scale the image down, not up.
 * If the image is already smaller than the specified size, it will be returned at it's actual size.
 */
export const ShrinkToFit = (props: ImageProps & Partial<ISized>) => (
    <ScaledImage
        {...props}
        scale={Math.min(getScaleToFit(props.image, props), 1)}
    />
);

//-----------------------------SPECIAL SHAPES--------------------------------//

/**
 * pass a single prop "size" for a square image rather than a width and height
 */
export const SquareImage = ({size, ...props}: ImageProps & PropSize) => {
    return FixedSizeImage({...props, width: size, height: size});
};

/**
 * prop "size" controls the image diameter
 * uses borderRadius to achieve the circle effect
 */
export const CircularImage = ({size, style, ...props}: ImageProps & PropSize) => {
    return SquareImage({...props, size, style: {...style, borderRadius: size / 2}});
};

//------------------------SCALED BASED ON PARAMS------------------------------//

/**
 * basic ScaledImage takes a prop "scale" and applies that scale to the original size of the image
 */
export const ScaledImage = ({image, scale = 1, ...props}: ImageProps & PropScale) =>
    <FixedSizeImage
        {...props}
        width={image.width * scale}
        height={image.height * scale}
        image={image}
    />;

/**
 * Create an image where the height is specified and the width is the appropriate width to preserve the aspect ratio
 *
 * Note: For fixed sizes, can calculate sides or can make use of built-in behaviors, for example put in a fixed-height
 * container and set maxHeight to 100%. Preferring to calculate as there is no element of unpredictability.
 */
export const FixedHeightImage = (props: ImageProps & PropHeight) =>
    <ScaledImage
        {...props}
        scale={getScaleForHeight(props.image, props.height)}
    />;

/**
 * Create an image where the width is specified and the height is the appropriate height to preserve the aspect ratio
 */
export const FixedWidthImage = (props: ImageProps & PropWidth) =>
    <ScaledImage
        {...props}
        scale={getScaleForWidth(props.image, props.width)}
    />;

//------------------------------SCALED TO WINDOW------------------------------//

