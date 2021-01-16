
<script>

  const essay = "/blog/essay"
  const tech = "/blog/tech"
  const project = "/project"
  const about = "/about"
  const index = "/"

  const button_style_1 = "bg-blue-500 hover:bg-blue-700 text-white rounded"
  const button_style_2 = "bg-indigo-500 hover:bg-indigo-700 text-white rounded"
  const button_style_3 = "bg-purple-500 hover:bg-purple-700 text-white rounded"
  const button_style_4 = "bg-yellow-500 hover:bg-yellow-700 text-white rounded"
  const button_style_5 = "bg-red-500 hover:bg-red-700 text-white rounded"

</script>

<div class="main-menu">

  <a href="/blog/essay" role="button" name="button"
    class="btn {button_style_1} ">Essay</a>
  <a href="/blog/tech" role="button" name="button"
    class="btn {button_style_2}">Tech</a>
  <a href="/project" role="button" name="button"
    class="btn {button_style_3}">Project</a>
  <a href="/about" role="button" name="button"
    class="btn {button_style_4}">About</a>
  <a href="/" role="button" name="button"
    class="btn {button_style_5}">Main</a>
</div>

<style>
.btn{
  display: block;
  width: 7rem;
  margin: 0.2rem 0rem;
  padding: 0.5rem 0.7rem;
  font-size: 1.25rem;
  text-align: center;
  font-weight: 400;
}
.main-menu{
  width: 7rem;
}
</style>