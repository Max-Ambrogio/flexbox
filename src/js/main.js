let redditPosts = showerthoughts.data.children

console.log(showerthoughts.data.children)

let postUl = document.querySelector('ul.post')

let highScore = redditPosts.filter(function(post){
    return post.data.score > 500
})

console.log(highScore)

highScore.forEach(function(post){
    let newLi = document.createElement('li')
    newLi.innerText = post.data.title
    postUl.append(newLi)

    let newP = document.createElement('p')
    newP.innerText = post.data.ups
    postUl.append(newP)
})

let catPost = redditPosts.find(function(post){
    return post.data.title.includes('cat')
})

console.log(catPost)

let sortedHighScore = highScore.sort(function(a,b){
    if (a.data.score > b.data.score){
        return -1
    }
    if (a.data.score < b.data.score){
        return 1
    }
    return 0 
})

console.log(sortedHighScore)







