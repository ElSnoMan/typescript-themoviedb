export interface AccountDetails {
    avatar:        Avatar;
    id:            number;
    iso_639_1:     string;
    iso_3166_1:    string;
    name:          string;
    include_adult: boolean;
    username:      string;
}

interface Avatar {
    gravatar: Gravatar
}

interface Gravatar {
    hash: string
}
