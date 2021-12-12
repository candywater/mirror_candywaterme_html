<script>
    import {markdownParse} from './markdownParse'
    import {yamlParse} from './yamlParse'
    // front-matter has a bit size, do not use it 
    // import frontmatter from "front-matter"

    export let url;

    let renderedContent = '';

    onLoad()

    async function onLoad(){
        url = '/blog_src/tech/2017/2017-08-20-about-rust-1.md'
        let content = await (await fetch(url)).text();
        let headerSearch = content.match(/^---$.*^---$/ms); 
        if(headerSearch && headerSearch.length > 0){
            let header = yamlParse(headerSearch[0])
            console.log(header)
        }
        let markdownContent = content.replace(/^---$.*^---$/ms, ''); //https://github.com/markedjs/marked/issues/485
        renderedContent = markdownParse(await markdownContent)
    }
</script>

<div>
    {@html renderedContent}
</div>

