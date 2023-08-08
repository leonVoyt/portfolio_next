import { ThemeAction, ThemeActionTypes, ThemeState } from '../../types/theme'

const initialState: ThemeState = {
  theme: false,
  loading: false,
  error: null,
}

export const themeReducer = (
  state = initialState,
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case ThemeActionTypes.FETCH_THEME:
      return { loading: true, error: null, theme: false }

    case ThemeActionTypes.FETCH_THEME_SUCCESS:
      return { loading: false, error: null, theme: action.payload }
    default:
      return state
  }
}
