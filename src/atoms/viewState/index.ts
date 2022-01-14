import { atom, useRecoilState } from 'recoil'

export const viewState = atom({
  key: 'viewState',
  default: { showAlert: false },
})

export const useViewState = () => useRecoilState(viewState)
