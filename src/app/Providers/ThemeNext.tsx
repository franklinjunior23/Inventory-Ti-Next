
"use client"

import {ThemeProvider} from 'next-themes';
import React, { useState, useEffect } from 'react'

type Props = {
    children: string | React.JSX.Element | React.JSX.Element[]| React.ReactNode;
  }

const ProviderNextUi = ({children} : Props) => {

const [mounted,setMounted] = useState<boolean>(false);

useEffect (() => {
    setMounted(true);
},[]);

if(!mounted){
    return <>{children}</>;
}


  return (
    <ThemeProvider enableSystem={true} attribute='class' defaultTheme='dark'>
      {children}
    </ThemeProvider>
  )
}

export default ProviderNextUi;




