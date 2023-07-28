"use client"

import React, { createContext, useContext, useState } from "react";
import threeJS from '../public/threejs.png'

const Context = createContext();

export const StateContext = ({ children }) => {

    const [intro , setIntro] = useState(true)
    const [color , setColor] = useState('#EFBD48')
    const [isLogoTexture , setIsLogoTexture] = useState(true)
    const [isFullTexture , setIsFullTexture] = useState(false)
    const [logoDecal , setLogoDecal] = useState(threeJS.src)
    const [fullDecal , setFullDecal] = useState(threeJS.src)

  return (
    <Context.Provider
      value={{
        intro , 
        setIntro, 
        color , 
        setColor, 
        isLogoTexture ,
        setIsLogoTexture ,
        isFullTexture ,
        setIsFullTexture ,
        logoDecal , 
        setLogoDecal ,
        fullDecal ,
        setFullDecal
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
