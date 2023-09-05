import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import { Switch } from '@mui/joy'
import { Typography } from '@mui/joy'
import React, { useEffect, useState } from 'react';
import { useDict } from '@/dictionary/DictionaryContext';

export default function LanguageToggler() {
  const {dict, context} = useDict()
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <></>
  }

  const switchEl = (
    <Switch
      checked={context.state === 'ru'}
      onChange={() => context.dispatch({
        type: 'SwitchLanguage',
        language: context.state === 'ru' ? 'en' : 'ru'
      })}
    />
  )

  return (
    <Typography component="label" endDecorator={switchEl}>
      {context.state}
    </Typography>
  )
}