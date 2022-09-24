import { onDestroy } from "svelte";
import Terminal from "svelte-terminal";
import { onMount } from "svelte";

import Layout from "../template/_layout.svelte";

import Profile from "../components/main/Profile.svelte";
import MainMenu from "../components/main/MainMenu.svelte";
import Copyleft from "../components/main/Copyleft.svelte";
import QuoteDisplay from "../components/index/QuoteDisplay.svelte";

import ConfigGear from "../components/main/configPanel/ConfigGear.svelte";
import FakePanel from "../components/common/FakePanel.svelte";

import { show_config_panel, show_quote } from "../../ts/config/config";

import { getRandomQuote, splitSerifs } from "../../ts/common/common";
import ShutterPanel from "../components/main/ShutterPanel.svelte";

export let quote_url: string;
export let quote_list: string[];
export let description: string;
export let isHide: boolean;

const DEFAULT_QUOTE: string[] = ["happy a new day!"];
const DEFAULT_QUOTE_URL: string = "/doc/_info/index_quote.json";

let quote: string = "";

const HIDE_ANIMATION: string = "animated fadeOutUp";
const SHOW_ANIMATION: string = "animated fadeIn";
let mainFadeAnimation: string = "";

const unsubscribe_showquote = show_quote.subscribe((value: boolean) => {
  quote = getRandomQuote(quote_list);
  if (!quote) {
    show_quote.set(false);
  }
});
onDestroy(unsubscribe_showquote);

onMount(() => {
  if (isHide === true) {
    hideContent();
    return;
  }
  if (quote_list.length > 0) {
    return;
  }
  if (quote_url.length > 0) {
    fetchQuote(quote_url);
  } else {
    fetchQuote(DEFAULT_QUOTE_URL);
  }
});

function on_config_click() {
  show_config_panel.set(!$show_config_panel);
}

function hideContent() {
  mainFadeAnimation = HIDE_ANIMATION;
}
function showContent() {
  mainFadeAnimation = SHOW_ANIMATION;
}
function onAnimationEnd() {
  if (isHide) mainFadeAnimation = "hide";
}
async function fetchQuote(url: string) {
  let result = await fetch(url);
  if (result.ok) {
    quote_list = await result.json();
    // quote_list = splitSerifs(text);
  }
}
