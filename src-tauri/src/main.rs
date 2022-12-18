#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
use std::sync::Mutex;
use serde::ser::Serialize;

const TODOS: Mutex<Vec<String>> = Mutex::new(vec![]);

#[tauri::command]
fn get_todos() -> String {
    format!("Hello from Rust")
}

#[tauri::command]
fn create_todo() -> String {
    format!("Hello from Rust")
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_todos, create_todo])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
