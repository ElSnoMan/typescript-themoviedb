import * as account from "../src/account";


test("create new request token", async () => {
    const token = await account.createRequestToken()
    expect(token).toBeDefined()
})


test("authorize new token", async () => {
    const token = await account.createAuthorizedToken(process.env.USERNAME, process.env.PASSWORD)
    expect(token).toBeDefined()
})


test("create session", async () => {
    const token = await account.createAuthorizedToken(process.env.USERNAME, process.env.PASSWORD)
    const sessionId = await account.createSession(token)
    expect(sessionId).toBeDefined()
})


test("get my account details", async () => {
    const token = await account.createAuthorizedToken(process.env.USERNAME, process.env.PASSWORD)
    const sessionId = await account.createSession(token)
    const details = await account.getAccountDetails(sessionId)
    expect(details.username).toBe("carloskidman")
})


test("mark movie as favorite", async () => {
    const suicideSquad = 436969
    const token = await account.createAuthorizedToken(process.env.USERNAME, process.env.PASSWORD)
    const sessionId = await account.createSession(token)
    const details = await account.getAccountDetails(sessionId)
    const response = await account.markAsFavorite({media_type: "movie", media_id: suicideSquad, favorite: true}, sessionId, details.id)
    expect(response.status_code).toBe(12)
})
