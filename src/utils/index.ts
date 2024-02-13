import songs from '@/data/songs.json'
import steps from '@/data/steps'

export const getRandomSong = (params: RandomSongParams) => {
  const stepsForGameEdition = steps[params.gameEdition]

  if (!stepsForGameEdition) {
    console.log(`No steps for game edition ${params.gameEdition}`)
    return undefined
  }

  const songsForSongTypes: Song[] = songs.filter(song => params.songTypes.includes(song.type))

  const stepsFiltered: Step[] = []

  songsForSongTypes.forEach(song => {
    const stepsForSong = stepsForGameEdition[song.name]
    if (!stepsForSong) {
      console.log(`No steps for song ${song.name}`)
      return
    }

    Object.entries(stepsForSong).forEach(([stepType, stepLevels]) => {
      stepLevels.forEach(stepLevel => {
        const stepTypeValid = params.stepTypes.includes(stepType)
        const stepLevelValid = params.minLevel <= stepLevel && stepLevel <= params.maxLevel
        if (stepTypeValid && stepLevelValid) stepsFiltered.push({ ...song, stepType, stepLevel })
      })
    })
  })

  console.table(stepsFiltered)

  return stepsFiltered[Math.floor(Math.random() * stepsFiltered.length)]
}

