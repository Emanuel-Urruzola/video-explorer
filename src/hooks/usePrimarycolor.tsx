import { useState, ChangeEvent } from "react";

export function usePrimarycolor() {
  const [primaryColor, setPrimaryColor] = useState('#eeeeee')
  const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPrimaryColor(event.target.value)
    document.documentElement.style.setProperty('--primary-color', primaryColor)
  }

  return ({ primaryColor, handleColorChange });

}