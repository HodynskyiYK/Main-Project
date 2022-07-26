import { initialState, movieReducer } from './movieReducer'
import { MovieActionsTypes } from '../actions-types'
import { MoviesActionCreators } from '../actions-creators/moviesActionCreators'

describe('movieReducer tests', () => {
    let movies: any
    beforeEach(() => {
        movies = [
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

    test('default should return state', () => {
        // @ts-ignore
        expect(movieReducer(undefined, {})).toEqual(initialState)
    })

    test('should change isLoading to true', () => {
        const expectedResult = {
            movies: [],
            isLoading: true,
            error: null,
            sortBy: 'release_date',
            filterBy: ''
        }

        // @ts-ignore
        expect(movieReducer(initialState, MoviesActionCreators.setLoading(true))).toEqual(expectedResult)
    })

    test('should return movies array', () => {
        const expectedResult = {
            movies: movies,
            isLoading: false,
            error: null,
            sortBy: 'release_date',
            filterBy: ''
        }

        // @ts-ignore
        expect(movieReducer(initialState, MoviesActionCreators.setMovies(movies))).toEqual(expectedResult)
    })

    test('should set filterBy', () => {
        const expectedResult = {
            movies: [],
            isLoading: false,
            error: null,
            sortBy: 'release_date',
            filterBy: 'filterBy'
        }

        // @ts-ignore
        expect(movieReducer(initialState, MoviesActionCreators.setFilterBy('filterBy'))).toEqual(expectedResult)
    })

    test('should set sortBy', () => {
        const expectedResult = {
            movies: [],
            isLoading: false,
            error: null,
            sortBy: 'sortBy',
            filterBy: ''
        }

        // @ts-ignore
        expect(movieReducer(initialState, MoviesActionCreators.setSortingBy('sortBy'))).toEqual(expectedResult)
    })

    test('should set error', () => {
        const expectedResult = {
            movies: [],
            isLoading: false,
            error: 'Some error',
            sortBy: 'release_date',
            filterBy: ''
        }

        // @ts-ignore
        expect(movieReducer(initialState, MoviesActionCreators.setError('Some error'))).toEqual(expectedResult)
    })
})