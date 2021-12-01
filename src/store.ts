import { init, RematchDispatch, RematchRootState } from '@rematch/core'
import { models, RootModel } from './models'
import loading, { ExtraModelsFromLoading } from '@rematch/loading'

type FullModel = ExtraModelsFromLoading<RootModel> 

export const store = init<RootModel, FullModel>({
	models,
    plugins: [
        loading(),
    ]
})

export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel, FullModel>
