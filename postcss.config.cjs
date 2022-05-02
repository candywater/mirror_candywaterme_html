// const tailwindcss = require("tailwindcss");

const purgecss = require('@fullhuman/postcss-purgecss')

const purgecss_config = purgecss({
    content: ["./src/**/*.svelte", "./public/**/*.html"]
})


module.exports = {
    plugins: [
        //tailwindcss("./tailwind.config.js"),
        // ...(process.env.NODE_ENV === "production" ? [purgecss_config] : [])
        // purgecss_config
    ]
}