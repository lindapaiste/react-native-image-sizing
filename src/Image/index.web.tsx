import React from "react";
import {ImageProps} from "./types";

export default ({image, className, width, height, resizeMode, alt = "", style}: ImageProps) => {
    return (
        <img
            src={image.source_url}
            style={{
                objectFit: resizeMode,
                ...style,
            }}
            width={width || image.width}
            height={height || image.height}
            alt={alt}
            className={className}
        />
    );
};
