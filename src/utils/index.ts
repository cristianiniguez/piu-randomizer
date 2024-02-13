import { DEFAULT_FORM_VALUES, MAX_LEVEL, MIN_LEVEL } from '@/contants'
import songs from '@/data/songs.json'
import steps from '@/data/steps'

export const getRandomSong = (params: RandomSongParams) => {
  const stepsForGameEdition = steps[params.gameEdition]

  if (!stepsForGameEdition) {
    console.log(`No steps for game edition ${params.gameEdition}`)
    return undefined
  }

  const songsForSongTypes: Song[] = songs.filter(song => song.type === params.songType)

  const stepsFiltered: Step[] = []

  songsForSongTypes.forEach(song => {
    const stepsForSong = stepsForGameEdition[song.name]
    if (!stepsForSong) {
      console.log(`No steps for song ${song.name}`)
      return
    }

    const levelsForSong = stepsForSong[params.stepType] ?? []

    levelsForSong.forEach(stepLevel => {
      if (params.minLevel <= stepLevel && stepLevel <= params.maxLevel) stepsFiltered.push({ ...song, stepType: params.stepType, stepLevel })
    })
  })

  console.table(stepsFiltered)

  return stepsFiltered[Math.floor(Math.random() * stepsFiltered.length)]
}

export const getValuesFromSearchParams = (searchParams: URLSearchParams): RandomSongParams => {
  const minLevel = +(searchParams.get('minLevel') ?? MIN_LEVEL)
  const maxLevel = +(searchParams.get('maxLevel') ?? MAX_LEVEL)
  return {
    gameEdition: searchParams.get('gameEdition') ?? DEFAULT_FORM_VALUES.gameEdition,
    songType: searchParams.get('songType') ?? DEFAULT_FORM_VALUES.songType,
    stepType: searchParams.get('stepType') ?? DEFAULT_FORM_VALUES.stepType,
    minLevel: isNaN(minLevel) ? MIN_LEVEL : minLevel,
    maxLevel: isNaN(maxLevel) ? MAX_LEVEL : maxLevel
  }
}

export const getSearchParamsFromValues = (values: RandomSongParams) => new URLSearchParams({
  ...values,
  minLevel: String(values.minLevel),
  maxLevel: String(values.maxLevel)
})
