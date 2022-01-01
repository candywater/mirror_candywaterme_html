import { writable } from "svelte/store";

export const panel_background_color = writable("rgba(245, 245, 245, 0.3);");
export const show_config_panel = writable(false);
export const show_quote = writable(false);

export const default_number_per_page = 20;