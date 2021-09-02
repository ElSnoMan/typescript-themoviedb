export interface DiscoverRequest {
    language?: string
    region?: string
    sort_by?: string
    certification_country?: string
    certification?: string
    certification_lte?: string
    certification_gte?: string
    include_adult?: boolean
    include_video?: boolean
    page?: number
    primary_release_year?: number
    primary_release_date_gte?: string
    primary_release_date_lte?: string
    release_date_gte?: string
    release_date_lte?: string
    with_release_type?: string
    year?: number
    vote_count_gte?: number
    vote_count_lte?: number
    vote_average_gte?: number
    vote_average_lte?: number
    with_cast?: string
    with_crew?: string
    with_people?: string
    with_companies?: string
    with_genres?: string
    without_genres?: string
    with_keywords?: string
    without_keywords?: string
    with_runtime_gte?: number
    with_runtime_lte?: number
    with_original_language?: string
    with_watch_providers?: string
    watch_region?: string
    with_watch_monetization_types?: string
}

export interface DiscoverResponse {
    page: number
    results: Array<Movie>
    total_pages: number
    total_results: number
}

export interface Movie {
    adult: boolean
    backdrop_path: string
    genre_ids: Array<number>
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}
