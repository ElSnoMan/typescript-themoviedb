import { discoverMovies } from '../src/discover';

test("discover movies", async () => {
    const params = {page: 100, foo: "bar"}
    const response = await discoverMovies(params)
    expect(response.status).toBe(200)
})
