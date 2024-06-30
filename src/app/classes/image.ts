export type StrapiImage = {
    attributes: ImageAttributes
};

export type ImageAttributes = {
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    name: string;
    width: number;
    height: number;
    alternativeText: string | null;
    caption: string | null;

    formats: ImageFormats;
    
    previewUrl: string | null;
    provider: string;
    provider_metadata: string | null; 
};

export type ImageFormats = {
    large: ImageData;
    small: ImageData;
    medium: ImageData;
    thumbnail: ImageData;
};

export type ImageData = {
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    name: string;
    width: number;
    height: number;
}