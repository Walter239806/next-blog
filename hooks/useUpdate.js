const UseUpdate = (data) => {
  fetch('http://20.228.195.178:3001/post/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

export default UseUpdate
