import {TMDB_POSTERS_URL} from '@/app/constants'
import {SearchMatches} from '.'
import type {StoryObj, Meta} from '@storybook/react'

const meta: Meta<typeof SearchMatches> = {
  component: SearchMatches,
  tags: ['autodocs'],
}
export default meta

export const Primary: StoryObj<typeof SearchMatches> = {
  args: {
    matchesList: [
      {
        tmdbId: 0,
        posterUrl: `${TMDB_POSTERS_URL}weyR73iYr1lWg17Q2r4sc7aEr2p.jpg`,
        releaseYear: '2000',
        title: 'title',
        mediaType: 'tv',
        seasonsCount: 2,
        episodesCount: 300,
      },
    ],
  },
}

export const NoResults: StoryObj<typeof SearchMatches> = {
  args: {
    matchesList: [],
  },
}
