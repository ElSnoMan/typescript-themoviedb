import _ = require("lodash")
import axios, { AxiosResponse } from "axios"
import { BASE_URL, config } from "./settings"
import { DiscoverRequest, DiscoverResponse } from "./models/movieModels"


export async function discoverMovies(params: DiscoverRequest): Promise<AxiosResponse<DiscoverResponse>> {
    let request = _.clone(config)
    request["params"] = params
    const response = await axios.get<DiscoverResponse>(BASE_URL + "/discover/movie", config)
    return response
}
