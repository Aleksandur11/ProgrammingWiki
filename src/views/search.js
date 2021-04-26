import {html} from '../../node_modules/lit-html/lit-html.js'
import {search} from '../api/data.js'


const searchTemplate=(articles,onSearch,article)=>html`
<section id="search-page" class="content">
<h1>Search</h1>
<form  id="search-form">
    <p class="field search">
        <input id="input-search" type="text" placeholder="Search by article title" name="search" .value=${article ||''}>
    </p>
    <p class="field submit">
        <input @click=${onSearch} class="btn submit" type="submit" value="Search">
    </p>
</form>
<div class="search-container">
   ${articles.length==0?html`<h3 class="no-articles">No matching articles</h3>`:articles.map(articleTemplate)}
</div>
</section>
`

const articleTemplate=(article)=>html`
<a class="article-preview" href="/details/${article._id}">
                <article>
                    <h3>Topic: <span>${article.title}</span></h3>
                    <p>Category: <span>${article.category}</span></p>
                </article>
            </a>`
        
export async function searchPage(ctx){
    const article=ctx.querystring.split('=')[1];
    const articles=await search(article)
ctx.render(searchTemplate(articles,onSearch,article))

function onSearch(ev){
    ev.preventDefault();
const query=document.getElementById('input-search').value;
if(!query){
    return alert('No input')
}
ctx.page.redirect('/search?query='+query)

}
}