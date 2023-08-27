import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import { Switch } from '@mui/joy'
import { Typography } from '@mui/joy'
import React, { useEffect, useState } from 'react';

export default function DarkModeToggler() {
  const { mode, setMode } = useColorScheme()
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <></>
  }

  const switchEl = (
    <Switch
      checked={mode === 'dark'}
      onChange={() => setMode(mode === 'light' ? 'dark' : 'light')}
    />
  )

  return (
    <Typography component="label" endDecorator={switchEl}>
      Dark mode
    </Typography>
  )
}