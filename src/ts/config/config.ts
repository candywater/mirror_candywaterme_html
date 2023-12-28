import { readable, writable } from "svelte/store";

export const panel_background_color = writable("rgba(245, 245, 245, 0.3);");
export const show_config_panel = writable(false);
export const show_quote = writable(false);
export const hide_main_block = writable(false);

export const DEFAULT_NUMBER_PER_PAGE: number = 9;
export const current_page_number = writable(0);

export const AesShareKey = readable(atob("Y2FuZHl3YXRlcg=="))
export const AesCtrCount = readable(atob("Nw=="))
