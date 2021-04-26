import {html} from '../../node_modules/lit-html/lit-html.js'
import {getRecentArticles} from '../api/data.js'


const homeTemplate=(articles)=>html`
<section id="home-page" class="content">
${articles.length==0?html`<h1>Recent Articles</h1>
<section class="recent js">
    <h2>JavaScript</h2>
    <h3 class="no-articles">No articles yet</h3>
</section>
<section class="recent csharp">
    <h2>C#</h2>
    <h3 class="no-articles">No articles yet</h3>
</section>
<section class="recent java">
    <h2>Java</h2>
    <h3 class="no-articles">No articles yet</h3>
</section>
<section class="recent python">
    <h2>Python</h2>
    <h3 class="no-articles">No articles yet</h3>
</section>
</section>`:articles.map(articleTemplate)}
`

        
const articleTemplate=(article)=>html`
<section class="recent java">
                <h2>${article.category}</h2>
                <article>
                    <h3>${article.title}</h3>
                    <p>${article.content}</p>
                    <a href="/details/${article._id}" class="btn details-btn">Details</a>
                </article>
 </section>`

export async function homePage(ctx){
    const articles=await getRecentArticles();
    ctx.render(homeTemplate(articles));

}