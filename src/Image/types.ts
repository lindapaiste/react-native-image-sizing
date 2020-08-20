import {ImageResizeMode, ImageStyle} from "react-native";
import {CSSProperties} from "react";

/**
 * create a standard set of props which can be used by images in both web and native applications
 * this is better than just relying on react-native-web because it allows passing a custom className
 */
export interface ImageProps {
    /**
     * the source for an image is an object which contains the file src or path as well as the original size of the
     * image
     */
    image: ImageFile;
    /**
     * web images require an alt tag. on native this becomes accessibilityLabel
     */
    alt?: string;
    /**
     * can either cover the provided size rectangle, or be contained in it
     */
    resizeMode?: ImageResizeMode & CSSProperties['objectFit']
    /**
     * can provide any custom style properties
     */
    style?: CSSProperties & ImageStyle;
    /**
     * className will be passed down on web and ignored on native
     */
    className?: string;
    /**
     * width and height at which to display the image. this can be the same as the file width and height, but does not
     * have to be.
     */
    width?: number;
    height?: number;
}


/**
 * define a standard interface for an image file
 */
export interface ImageFile {
    /**
     * the file path, either remote or local
     */
    source_url: string;
    /**
     * width and height of the image file
     */
    width: number;
    height: number;
}
