import { useColorScheme } from '@mui/joy/styles';
import { Switch } from '@mui/joy'
import { Typography } from '@mui/joy'
import React, { useEffect, useState } from 'react';
import LightMode from '@mui/icons-material/LightMode'
import DarkMode from '@mui/icons-material/DarkMode'

export default function DarkModeToggler() {
  const { mode, systemMode, setMode } = useColorScheme()
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <></>
  }

  const isDarkMode = mode === 'dark' || systemMode === 'dark'
  const switchEl = (
    <Switch
      checked={isDarkMode}
      onChange={() => setMode(mode === 'light' ? 'dark' : 'light')}
    />
  )

  const iconEl = isDarkMode ? (
    <DarkMode />
  ) : (
    <LightMode /> 
  )

  return (
    <Typography component="label" endDecorator={switchEl}>
      {iconEl}
    </Typography>
  )
}