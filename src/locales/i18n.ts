import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import commonEn from './en/common.json'
import commonZh from './zh/common.json'

const resources = {
  en: { common: commonEn },
  zh: { common: commonZh },
} as { [key: string]: any }

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  defaultNS: 'common',

  interpolation: {
    escapeValue: false,
  },
})

export default i18n
