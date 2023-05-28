// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}
use std::process::Command;

#[tauri::command]
fn run_node_script(video_path: String) {
    let mut binding = Command::new("vlc.exe");
    let command = binding.arg(video_path);

    // Ejecutar el comando
    match command.spawn() {
        Ok(_) => println!("VLC abierto correctamente"),
        Err(e) => eprintln!("Error al abrir VLC: {}", e),
    }
}
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, run_node_script])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
