import { useState } from 'react'
import AppEn from './AppEn'
import AppEl from './AppEl'

export default function App() {
  const [lang, setLang] = useState('en')

  if (lang === 'el') {
    return <AppEl onSwitchLanguage={() => setLang('en')} />
  }

  return <AppEn onSwitchLanguage={() => setLang('el')} />
}