// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
fn main() {
    use tauri::Manager;
    tauri::Builder::default()
    .plugin(tauri_plugin_opener::init())
    .setup(|app| {
        let window = app.get_webview_window("main").unwrap();
        #[cfg(target_os = "windows")]
        {
            use tauri::window::{Color, Effect, EffectsBuilder};
            window.set_effects(EffectsBuilder::new().effect(Effect::Acrylic).color(Color(199, 199, 199, 1)).build(),)
            .expect("Failed to set effects");
        }
        #[cfg(target_os = "macos")]
        {
            use tauri::window::{Effect, EffectState, EffectsBuilder};
            window.set_effects(EffectsBuilder::new().effect(Effect::Vibrancy).state(EffectState::FollowsWindowActiveState).build(),)
            .expect("Failed to set effects");
        }
        Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}