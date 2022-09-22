
import React from 'react'
import {ReactComponent as LogoSvg} from '../../logo.svg'
import { Anchor,createStyles } from '@mantine/core';
const useStyles = createStyles((theme)=>({
  logo: {
    width: 200,
    height: 80,
    transition: 'all .1s ease-in',
      '@media (max-width: 500px)':{
        width: 150,
        height: 60
      }
  }
}))
function Logo() {
  const {classes} = useStyles();
  return (
    <Anchor href="/">
      <LogoSvg className={classes.logo}/>
    </Anchor>
  )
}

export default Logo