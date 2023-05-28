import { useState } from "react";

export function useTamanio() {
  const [tamanio, setTamanio] = useState(50)
  const handleTamanio = (event) => {
    setTamanio(event.target.value)
    document.documentElement.style.setProperty('--size-video', `${event.target.value}vh`)
  }

  return ({ tamanio, handleTamanio });

}