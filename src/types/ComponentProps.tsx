export interface Episode {
    title: string;
    episode: string;
    url: string;
    images: {
        jpg: {
            image_url: string | null;
        }
    }
};

export interface CardEpisodeProps {
    data: Episode;
}

export type trailerResponse = {
    data: { name: any; key: any; id: any; };
    iso_639_1: string,
    iso_3166_1: string,
    name: string,
    key: string,
    site: string,
    size: number,
    type: string,
    official: boolean,
    published_at: string,
    id: string
};

export type paramTrailer = {
    api_key: string;
};

export type videoItemProps = {
    trailerId: string;
    isPlaying: boolean;
};

export type dataPropType = {
    id: number;
    type: string;
    uri: string;
}

export type freshComponentType = {
    initial: string;
    name: string;
    date: string;
    tag: string[];
    data: dataPropType[];
};
