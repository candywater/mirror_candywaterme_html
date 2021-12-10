<script>
    import {markdownParse} from './markdownRender'
    import frontmatter from "front-matter"

    export let url;

    let renderedContent = '';

    onLoad()

    async function onLoad(){
        url = '/blog_src/tech/2017/2017-08-20-about-rust-1.md'
        let content = await (await fetch(url)).text();
        let parsedContent = frontmatter(content)
        let attributes = parsedContent.attributes
        //content.replace(/^---$.*^---$/ms, ''); //https://github.com/markedjs/marked/issues/485
        let markdownContent = parsedContent.body        
        renderedContent = markdownParse(await markdownContent)
    }
</script>

<div>
    {@html renderedContent}
</div>

