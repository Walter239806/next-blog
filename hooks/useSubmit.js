const handleSubmit = async (data) => {
  const res = await fetch('http://20.228.195.178:3001/post/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

export default handleSubmit
