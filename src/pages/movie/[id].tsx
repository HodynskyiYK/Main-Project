import { NextPage } from 'next'
import { MovieModalContextProvider } from '../../context/movie-modal-context'
import { MovieDetailsContextProvider, useMovieDetailsContext } from '../../context/movie-details-context'
import { Header } from '../../shared/header'
import { MovieDetails } from '../../shared/movie-details'
import { Footer } from '../../shared/footer'
import { ErrorBoundary } from '../../shared/error-boundaries'
import { getMovieById } from '../../utils'
import { IMovieItem } from '../../store/actions-types'

interface IMovie {
    movie: IMovieItem
}

const Movie: NextPage<IMovie> = ({movie}) => {

    return (
        <ErrorBoundary errorText={'Oops! Something went wrong. Please try again later.'}>
            <MovieModalContextProvider>
                <MovieDetailsContextProvider>
                    <Header/>
                    <MovieDetails movieDetails={movie}/>
                    <Footer/>
                </MovieDetailsContextProvider>
            </MovieModalContextProvider>
        </ErrorBoundary>
    )
}

export const getServerSideProps = async (context: any) => {
    let {id} = context.query
    const movie = await getMovieById(id)

    return {
        props: {movie}
    }
}

export default Movie