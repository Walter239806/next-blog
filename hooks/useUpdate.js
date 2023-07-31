const UseUpdate = async (data) => {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(data),
  })
}

export default UseUpdate
