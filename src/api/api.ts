import request from '@/request/request'
export const allArticle = function() {
    return request({
        url: '/article/allArticleDTO',
        method: 'post',
    })
}

export const sendPageNum = function(pageNum:number) {
    return request({    
        method: 'get', // 指定请求方法为get    
        url: `/article/pagingArticle/${pageNum}` // 直接使用拼接好的URL    
    });    
}

export const selArticleById = function(id:number) {
    return request({
        method: 'post',
        url: '/selArticleById',
        data: {
            id: id
        }
    })
}