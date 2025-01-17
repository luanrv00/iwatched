'use server'
import {TMDB_API_URL} from '../../constants'
import type {TMDBTvSeriesType} from '@/app/types/types'

const TMDB_API_READ_ACCESS_TOKEN = process.env.TMDB_API_READ_ACCESS_TOKEN

export async function getTvSeriesDetails(
  tmdbId: number,
): Promise<TMDBTvSeriesType> {
  const apiEndpoint = `${TMDB_API_URL}/tv/${tmdbId}`
  const apiToken = `Bearer ${TMDB_API_READ_ACCESS_TOKEN}`

  const tvSeriesDetails = await fetch(apiEndpoint, {
    headers: {
      authorization: apiToken,
    },
  })
    .then(res => res.json())
    .catch(e => console.log('-----------------e', e))

  return {
    id: tvSeriesDetails.id,
    poster_path: tvSeriesDetails.poster_path,
    release_date: tvSeriesDetails.release_date,
    title: tvSeriesDetails.title || tvSeriesDetails.name,
    media_type: tvSeriesDetails.media_type,
    number_of_seasons: tvSeriesDetails.number_of_seasons,
    number_of_episodes: tvSeriesDetails.number_of_episodes,
  }
}
