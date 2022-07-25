import { concatMovieGenres, configureRuntime, getFullYear, searchMovie, splitMoviesGenres } from './movieUtils'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('movie utils tests', () => {
    let genresArray: string[]
    let genresString: string
    let searchResponse: any
    beforeEach(() => {
        genresArray = ["Comedy", "Drama", "Romance"]
        genresString = "Comedy, Drama, Romance"
        searchResponse = [
            {
                "id": 91314,
                "title": "Transformers: Age of Extinction",
                "tagline": "This is not war. It's extinction.",
                "vote_average": 5.8,
                "vote_count": 3718,
                "release_date": "2014-06-25",
                "poster_path": "https://image.tmdb.org/t/p/w500/ykIZB9dYBIKV13k5igGFncT5th6.jpg",
                "overview": "As humanity picks up the pieces, following the conclusion of \"Transformers: Dark of the Moon,\" Autobots and Decepticons have all but vanished from the face of the planet. However, a group of powerful, ingenious businessman and scientists attempt to learn from past Transformer incursions and push the boundaries of technology beyond what they can control - all while an ancient, powerful Transformer menace sets Earth in his cross-hairs.",
                "budget": 210000000,
                "revenue": 1091405097,
                "genres": [
                    "Science Fiction",
                    "Action",
                    "Adventure"
                ],
                "runtime": 165
            },
            {
                "id": 335988,
                "title": "Transformers: The Last Knight",
                "tagline": "For one world to live, the other must die.",
                "vote_average": 6,
                "vote_count": 2140,
                "release_date": "2017-06-16",
                "poster_path": "https://image.tmdb.org/t/p/w500/s5HQf2Gb3lIO2cRcFwNL9sn1o1o.jpg",
                "overview": "Autobots and Decepticons are at war, with humans on the sidelines. Optimus Prime is gone. The key to saving our future lies buried in the secrets of the past, in the hidden history of Transformers on Earth.",
                "budget": 217000000,
                "revenue": 605425157,
                "genres": [
                    "Action",
                    "Science Fiction",
                    "Thriller",
                    "Adventure"
                ],
                "runtime": 149
            },
            {
                "id": 424785,
                "title": "Transformers 7",
                "tagline": "",
                "vote_average": 0,
                "vote_count": 0,
                "release_date": "2019-06-26",
                "poster_path": "https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg",
                "overview": "Plot unknown.",
                "budget": 0,
                "revenue": 0,
                "genres": [
                    "Science Fiction",
                    "Action",
                    "Adventure"
                ],
                "runtime": null
            },
            {
                "id": 1857,
                "title": "The Transformers: The Movie",
                "tagline": "Beyond good. Beyond evil. Beyond your wildest imagination.",
                "vote_average": 7,
                "vote_count": 161,
                "release_date": "1986-08-08",
                "poster_path": "https://image.tmdb.org/t/p/w500/a6v1mtEnhwBLI9q9ACbAGmHy6bb.jpg",
                "overview": "The Autobots must stop a colossal planet-consuming robot who goes after the Autobot Matrix of Leadership. At the same time, they must defend themselves against an all-out attack from the Decepticons.",
                "budget": 6000000,
                "revenue": 5849647,
                "genres": [
                    "Animation"
                ],
                "runtime": 84
            }
        ]
    })

    test('getFullYear should return year', () => {
        const date = '2016-12-29'
        expect(getFullYear(date)).toBe(2016)
    })

    test('concatMovieGenres should return string with genres', () => {
        expect(concatMovieGenres(genresArray)).toBe(genresString)
    })

    test('configureRuntime should return runtime with hours and minutes', () => {
        const runtime = 128
        expect(configureRuntime(runtime)).toBe('2h 8min')
    })

    test('splitMoviesGenres should return array with string items', () => {
        expect(splitMoviesGenres(genresString)).toEqual(genresArray)
    })

    /*test('searchMovie should return movies', async () => {
        mockedAxios.get.mockReturnValue(searchResponse)
        const data = await searchMovie()
        expect(data.length).toBe(4)
    })*/
})