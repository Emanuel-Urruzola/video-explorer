import { readDir } from '@tauri-apps/api/fs'
import { desktopDir } from '@tauri-apps/api/path'

export const getVideos = async () => {
  let directories = {}
  try {
    const desktopPath = await desktopDir()
    const folderPath = `${desktopPath}Bailes y entrenamiento\\`
    directories = await readDir(folderPath)
  } catch (error) {
    console.error('Error en la operación de lectura de archivos:', error)
  }
  console.log(directories)

  return directories
}
