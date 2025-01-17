import {TextParagraph, TextSubtitle} from '@/app/ui/Text'
import {WatchedItemsList} from '../WatchedItemsList'
import type {WatchItemType} from '@/app/types/types'

export function WatchedTvSeries({
  watchedItems,
}: {
  watchedItems: WatchItemType[]
}) {
  return (
    <>
      <TextSubtitle>Watched TV Series</TextSubtitle>
      <WatchedItemsList watchedItems={watchedItems} />
      {!watchedItems.length && (
        <TextParagraph>Add watched TV Series</TextParagraph>
      )}
    </>
  )
}
