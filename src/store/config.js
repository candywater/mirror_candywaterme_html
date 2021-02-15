import { writable } from 'svelte/store';

export const panel_background_color = writable("rgba(245, 245, 245, 0.3);");
export const is_hide_all_content = writable(false);
export const show_config_panel = writable(false)
export const show_quote = writable(false)