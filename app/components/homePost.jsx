export default function HomePost(props) {
  const List = () => {
    return props.list.map((item) => {
      return (
        <div key={item.id} className="mt-8 flex h-36 w-full flex-row border-t-2 border-black">
          <p className="m-10 text-gray-500 hover:text-gray-700">{item.date}</p>
          <div className="h-full w-1/2">
            <h1 className="p-2 font-bold">{item.title}</h1>
            <p className="p-2">{item.content}</p>
          </div>
        </div>
      )
    })
  }
  return (
    <div className="h-auto w-auto selection:bg-fuchsia-300 selection:text-black">
      <List />
    </div>
  )
}
