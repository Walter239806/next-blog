'no cors'
const deletePost = async (post) => {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/delete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(post),
  })
}

export default deletePost
