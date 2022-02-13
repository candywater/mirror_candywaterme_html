<script lang="ts">
  import type { IPostSummary } from "../../interface/IPostSummary";
  import type { IResultItem } from "../../interface/IResultItem";

  export let content_list: IPostSummary[];

  const SEARCH_NO_ITEM: string = "No Result";

  let _res_list: IResultItem[] = [];
  let _width: number;
  let _search_key: string;

  const isSafari =
    navigator.userAgent.includes("Safari/") &&
    navigator.userAgent.includes("Version/");
  let _is_composing: boolean = false;

  /**
   * todo:
   *  - https://qiita.com/darai0512/items/fac4f166c23bf2075deb
   *  - https://blog.utgw.net/entry/2021/06/29/212256
   * @param e
   */
  function oninput(e: Event) {
    // console.log((<InputEvent>e).inputType);
    // console.log((<InputEvent>e).isComposing);
    // console.log((<InputEvent>e).data);
    // console.log("===========");
    if ((<InputEvent>e).isComposing) return;
    // if (_is_composing) return;
    search((<HTMLInputElement>e.target).value);
  }

  function onComposingStart() {
    _is_composing = true;
  }
  function onComposingEnd() {
    _is_composing = false;
  }

  function onfocusout() {
    // to avoid cannot jump issue
    if (_search_key) return;
    _res_list = [];
  }

  function search(key: string) {
    _res_list = [];
    for (const [_key, value] of Object.entries(content_list)) {
      if (existKey(value.title, key)) {
        addSearchItem(value.title, value.url, value.title);
      }
      if (existKey(value.summary, key)) {
        addSearchItem(value.summary, value.url, value.title);
      }
      if (existKey(value.tags?.toString(), key)) {
        addSearchItem(value.tags.toString(), value.url, value.title),
          value.title;
      }
      if (existKey(value.tag, key)) {
        addSearchItem(value.tag, value.url, value.title);
      }
      if (existKey(value.date?.toString(), key)) {
        // let date = new Date(key);
        // if (date && value.date == date)
        addSearchItem(value.date.toString(), value.url, value.title);
      }
      if (_res_list.length > 5) {
        addSearchItem("...", "", "");
        break;
      }
    }
    if (_res_list.length == 0 && key) {
      addSearchItem(SEARCH_NO_ITEM, "", "");
    }
    // console.log(_res_list);
  }

  function existKey(search: string, key: string): boolean {
    if (search && key && search.toLowerCase().includes(key.toLowerCase())) {
      return true;
    }
    return false;
  }

  function addSearchItem(value: string, url: string, title: string) {
    let duplicate = false;
    _res_list.forEach((element) => {
      if (element.url == url) duplicate = true;
    });
    if (duplicate) return;
    _res_list.push({
      result: value,
      url: url,
      title: title,
    });
  }
</script>

<!-- https://tailwindcomponents.com/component/search-bar -->
<!-- This is an example component -->
<div
  class="pt-2 mb-2 relative mx-auto text-gray-600 searchbar "
  bind:clientWidth={_width}
>
  <input
    class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
    type="search"
    name="search"
    placeholder="Search"
    on:input={oninput}
    on:compositionstart={onComposingStart}
    on:compositionend={onComposingEnd}
    on:focus={oninput}
    on:focusout={onfocusout}
    bind:value={_search_key}
  />
  <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
    <svg
      class="text-gray-600 h-4 w-4 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 56.966 56.966"
      style="enable-background:new 0 0 56.966 56.966;"
      xml:space="preserve"
      width="512px"
      height="512px"
    >
      <path
        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
      />
    </svg>
  </button>
  <div class="table absolute bg-slate-200 w-fit" style={`width: ${_width}px;`}>
    {#each _res_list as item}
      <ul>
        <li>
          <!-- https://stackoverflow.com/questions/68159400/when-clicked-on-an-href-the-new-url-doesnt-reload-the-page-in-svelte -->
          <a rel="external" href={item.url}
            ><span class="capitalize">{item.title}</span></a
          >
        </li>
        <p>{item.result}</p>
      </ul>
    {/each}
  </div>
</div>
