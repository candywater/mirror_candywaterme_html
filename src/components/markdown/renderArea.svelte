<script>
    import {marked} from 'marked'
    export let url;

    let renderedContent = '';

    marked.setOptions({
        breaks: true,
    });

    onLoad()

    async function onLoad(){
        url = '/blog_src/tech/2017/2017-08-20-about-rust-1.md'
        let markdownContent = await (await fetch(url)).text();
        // console.log(await markdownContent)
        renderedContent = marked.parse(await markdownContent)
        
    }
</script>

<div>
    {@html renderedContent}
</div>

