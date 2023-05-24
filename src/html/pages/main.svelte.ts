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

function showQuote(id: number) {
  show_quote.set(true)
  if (id) quote = quote_list[id]
  else quote = getRandomQuote(quote_list);
}

function showAll() {
  show_quote.set(true)
  // quote = "<br />" + quote_list.join("<br /><br /><hr /><br />")
  quote = "<br />"
  quote_list.forEach((x, index) => {
    quote += `${index}: <br />`
    quote += x
    quote += "<br /><br /><hr /><br />"
  })
}

const recommand_quote_list = [227, 224, 225, 230, 250, 254, 255, 220 ]

const HELP_INFO = `HELP INFO
type following commands to use console.
:help - help
:about - about this console
:exit - exit console
:show_all - show all quote
:show [number] - show specific quote
:show recommand - show recommand quote
`
const RECOMMAND_QUOTE_INFO = ` RECOMMAND LIST 
[${recommand_quote_list.sort().join(", ")}]

love stoies 254 255
love quote 221 224 172 169 165 22 156
humour quote 217 197 230
life 213 211 200 195 192 190 188 182 180 
should do  182 170 171 150 5 227 225 250
中年男人 214 45
quote 134 220
`
const ABOUT_INFO = `this is a console by candy water. ver 0.0.1
visit https://github.com/candywater/svelte-terminal/ for more info. `
const EXIT_INFO = `have a nice day! `
const SUCCESS_INFO = `command succeed. `
const ERROR_INFO = `command not found. Type :help for help. `

function consoleCommand(input, closeWin = () => { }) {
  let input_array = input.trim().split(" ")
  let str = input_array[0]
  let param = input_array.length >= 2 ? input_array[1] : ""
  console.log(input_array)
  switch (str) {
    case ":help":
    case "help":
      return HELP_INFO
    case ":about":
    case "about":
      return ABOUT_INFO
    case ":exit":
    case "exit":
      setTimeout(closeWin, 350);
      return EXIT_INFO
    case ":show_all":
    case "show_all":
      showAll();
      return SUCCESS_INFO
    case ":show":
    case "show":
      if(param == "all"){
        showAll();
        return SUCCESS_INFO
      }
      else if(param == "recommand"){
        return RECOMMAND_QUOTE_INFO
      }
      else{
        showQuote(param)
        return SUCCESS_INFO
      }
    default:
      return ERROR_INFO
  }
}

window.show_quote = showQuote;
window.show_all = showAll;