export interface IFilter {
    name: string,
    value: string,
    active: boolean,
    id: number
}

export interface IMoviesFilters {
    filters: IFilter[]
}