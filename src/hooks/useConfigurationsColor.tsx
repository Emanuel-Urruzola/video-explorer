import { useState, ChangeEvent } from "react";

export function useConfigurationsColor() {
  const [secondaryColor, setSecondaryColor] = useState("#fa8072")
  const handleSColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSecondaryColor(event.target.value)
    document.documentElement.style.setProperty('--configurations-color', secondaryColor)
  }
  return ({ secondaryColor, handleSColorChange })
}