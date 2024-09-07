import type {NextRequest} from 'next/server'
import type {TMDBResponseItemType, WatchItemType} from '@/app/types/types'
import {TMDB_API_URL} from '@/app/constants'

const TMDB_API_READ_ACCESS_TOKEN = process.env.TMDB_API_READ_ACCESS_TOKEN

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const searchQuery = searchParams.get('searchQuery')

  if (!searchQuery) {
    return
  }

  const apiEndpoint = `${TMDB_API_URL}/search/multi?query=${searchQuery}`
  const apiToken = `Bearer ${TMDB_API_READ_ACCESS_TOKEN}`

  const res = await fetch(apiEndpoint, {
    headers: {
      authorization: apiToken,
    },
  })
    .then(res => res.json())
    .then(res =>
      res.results.filter(
        (matchItem: TMDBResponseItemType) =>
          matchItem['media_type'] !== 'person',
      ),
    )
    .catch(err => console.log('---------------- err', err))

  const data: WatchItemType = res.map((matchItem: TMDBResponseItemType) => ({
    tmdb_id: matchItem.id,
    poster_path: matchItem.poster_path,
    release_date: matchItem.release_date,
    title: matchItem?.title || matchItem?.name,
    media_type: matchItem.media_type,
  }))

  return Response.json({data})
}