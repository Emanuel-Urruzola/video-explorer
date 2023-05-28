import { useState } from "react";

export function useConfigurationsColor() {
  const [secondaryColor, setSecondaryColor] = useState("salmon")
  const handleSColorChange = (event) => {
    setSecondaryColor(event.target.value)
    document.documentElement.style.setProperty('--configurations-color', event.target.value)
  }
  return ({ secondaryColor, handleSColorChange })
}