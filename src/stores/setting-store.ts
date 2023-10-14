import {useStorage,useDark} from '@vueuse/core'

export const themeColor: any = useStorage('icons-theme-color', '#329672')

export const isDark = useDark({
  storageKey:'theme-schema'
})
