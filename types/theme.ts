export enum ThemeActionTypes {
  FETCH_THEME = 'FETCH_THEME',
  FETCH_THEME_SUCCESS = 'FETCH_THEME_SUCCESS',
}

interface FetchThemeAction {
  type: ThemeActionTypes.FETCH_THEME
}
interface FetchThemeSuccessAction {
  type: ThemeActionTypes.FETCH_THEME_SUCCESS
  payload: boolean
}

export interface ThemeState {
  theme: boolean
  loading: boolean
  error: null | string
}

export type ThemeAction = FetchThemeAction | FetchThemeSuccessAction
