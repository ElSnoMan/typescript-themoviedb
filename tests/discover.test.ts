import { discoverMovies } from '../src/discover';

test("discover movies", async () => {
    const response = await discoverMovies()
    expect(response).not.toBeNull()
})
