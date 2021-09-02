import axios, { AxiosResponse } from "axios"
import { API_KEY, BASE_URL } from "./settings"
import { DiscoverResponse } from "./models/movies"


export async function discoverMovies(): Promise<AxiosResponse<DiscoverResponse>> {
    const config = {headers: {"Authorization": `Bearer ${API_KEY}`}}
    const response = await axios.get<DiscoverResponse>(BASE_URL + "/discover/movie", config)
    return response
}
