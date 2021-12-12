<script>
    import {markdownParse} from './markdownParse'
    import {yamlParse, extractYaml} from './yamlParse'
    // front-matter has a bit size, do not use it 
    // import frontmatter from "front-matter"

    export let url;

    let renderedContent = '';
    let header = {
        title: ''
    }

    onLoad()

    async function onLoad(){
        if(!url)
            url = '/blog_src/tech/2017/2017-08-20-about-rust-1.md'
        let content = await (await fetch(url)).text();

        let headerPlain = extractYaml(content)
        header = yamlParse(headerPlain)

        let markdownContent = content.replace(/^---$.*^---$/ms, ''); //https://github.com/markedjs/marked/issues/485
        renderedContent = markdownParse(await markdownContent)
    }
</script>

<div>
    <h1>{header.title}</h1>
    {@html renderedContent}
</div>

