import { useState } from "react";

export function usePrimarycolor() {
  const [primaryColor, setPrimaryColor] = useState('salmon')
  const handleColorChange = (event) => {
    setPrimaryColor(event.target.value)
    document.documentElement.style.setProperty('--primary-color', event.target.value)
    console.log(event.target.value)
  }

  return ({ primaryColor, handleColorChange });

}