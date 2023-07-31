const handleSubmit = async (data) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(data),
  }).then(() => {
    window.location.reload()
  })
}

export default handleSubmit
