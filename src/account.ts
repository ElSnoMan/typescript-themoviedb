import axios from "axios"
import _ = require("lodash")
import { AccountDetails } from "./models/accountModels"
import { GenericeResponse } from "./models/baseModels"
import { MediaObject } from "./models/mediaModels"
import { BASE_URL, config } from "./settings"

const AUTH_URL = BASE_URL + "/authentication"
const ACCOUNT_URL = BASE_URL + "/account"


export async function createRequestToken(): Promise<string> {
    const response = await axios.get(AUTH_URL + "/token/new", config)
    return response.data.request_token
}


export async function authorizeToken(requestToken: string, username: string, password: string): Promise<string> {
    const data = {"username": username, "password": password, "request_token": requestToken}
    const response = await axios.post(AUTH_URL + "/token/validate_with_login", data, config)
    return response.data.success ? response.data.request_token : ""
}


export async function createAuthorizedToken(username: string, password: string): Promise<string> {
    const token = await createRequestToken()
    const authenticatedToken = await authorizeToken(token, username, password)
    return authenticatedToken
}


export async function createSession(authenticatedToken: string): Promise<string> {
    const data = {"request_token": authenticatedToken}
    const response = await axios.post(AUTH_URL + "/session/new", data, config)
    return response.data.session_id
}


export async function getAccountDetails(sessionId: string): Promise<AccountDetails> {
    const request = {...config, params: {"session_id": sessionId}}
    const response = await axios.get(ACCOUNT_URL, request)
    return response.data
}


export async function markAsFavorite(media: MediaObject, sessionId: string, accountId: number): Promise<GenericeResponse> {
    const data = {...media}
    const request = {...config, params: {"session_id": sessionId}}
    const response = await axios.post(`${ACCOUNT_URL}/${accountId}/favorite`, data, request)
    return response.data
}
