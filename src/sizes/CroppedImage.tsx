import React from "react";
import {PropRectangle, PropScale} from "./types";
import {ScaledImage} from "./index";
import {View} from "react-native";
import {ImageProps} from "..";

/**
 * visually crop an image to just the area selected by a rectangle
 * an additional prop "scale" determines the final size at which it is displayed
 */

export type Props = ImageProps & PropRectangle & PropScale;

export const CroppedImage = ({image, rectangle, scale = 1, ...props}: Props) => {
    return (
        <View style={{
            width: rectangle.width * scale,
            height: rectangle.height * scale,
            overflow: 'hidden',
        }}
        >
            <View
                style={{
                    transform: [
                        {translateX: -1 * rectangle.x * scale},
                        {translateY: -1 * rectangle.y * scale}
                    ]
                }}
            >
                <ScaledImage
                    {...props}
                    image={image}
                    scale={scale}
                />
            </View>
        </View>
    );
};

export default CroppedImage;

/*
export const MaxSizeCroppedImage = ({image, rectangle}) => {
    const scale = ScalableObject.fromObject(rectangle).calculateScale();
    return <CroppedImage image={image} rectangle={rectangle} scale={scale}/>
};
 */
