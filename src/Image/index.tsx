import React from 'react';
import {Image} from 'react-native';
import {ImageProps} from "./types";

/**
 * style gets the desired width and height, if set, while source gets the original width and height
 *
 * source also takes a scale property
 *
 * note: renders well with height set and undefined width, but not with width set and undefined height
 */

export default ({image, width, height, resizeMode, alt, style}: ImageProps) => {
    return (
        <Image
            source={{
                width: image.width,
                height: image.height,
                uri: image.source_url
            }}
            style={[
                style, {
                    width: width || image.width,
                    height: height || image.height,
            }
            ]}
            resizeMode={resizeMode}
            accessibilityLabel={alt}
        />
    )
}
