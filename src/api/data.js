import * as api from './api.js';
const host ='http://localhost:3030'
api.settings.host=host;
export const login=api.login;
export const logout=api.logout;
export const register=api.register;

export async function getArticles(){
    return await api.get(host+'/data/wiki?sortBy=_createdOn%20desc')
}
export async function createArticle(article){
    return await api.post(host +'/data/wiki',article)
}
export async function getArticleById(id){
    return await api.get(host+'/data/wiki/'+id)
}
export async function updateArticle(id,article){
    return await api.put(host + '/data/wiki/'+id,article)
}
export async function delArticle(id){
    return await api.del(host+'/data/wiki/'+id)
}
export async function getRecentArticles(){
    return await api.get(host+`/data/wiki?sortBy=_createdOn%20desc&distinct=category`)
}
export async function search(query){
    return await api.get(host+`/data/wiki?where=title%20LIKE%20%22${query}%22`)
}