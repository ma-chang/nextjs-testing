import fetch from 'node-fetch'

export const getAllPostData = async () => {
  const response = await fetch(
    new URL('https://jsonplaceholder.typicode.com/posts/?_limit=10')
  )
  const posts = await response.json()
  return posts
}

export const getAllTasks = async () => {
  const response = await fetch(
    new URL('https://jsonplaceholder.typicode.com/todos/?_limit=10')
  )
  const tasks = await response.json()
  return tasks
}

export const getAllPostIds = async () => {
  const response = await fetch(
    new URL('https://jsonplaceholder.typicode.com/posts/?_limit=10')
  )
  const posts = await response.json()
  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    }
  })
}

export const getPostData = async (id: string) => {
  const response = await fetch(
    new URL(`https://jsonplaceholder.typicode.com/posts/${id}`)
  )
  const post = await response.json()
  return post
}
