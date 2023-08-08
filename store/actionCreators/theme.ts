import { Dispatch } from 'redux'
import { ThemeAction, ThemeActionTypes } from '../../types/theme'

export const setTheme = (prop: boolean) => {
  return async (dispatch: Dispatch<ThemeAction>) => {
    dispatch({
      type: ThemeActionTypes.FETCH_THEME_SUCCESS,
      payload: prop,
    })
  }
}
