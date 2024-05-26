export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export async function fetchPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return await res.json()
}
