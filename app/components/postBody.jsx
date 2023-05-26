export default function PostBody({ author, date, body }) {
  if (date) date = date.split('T')[0]
  return (
    <main className="mt-10 flex flex-col place-content-center pb-96">
      <div className=" flex flex-row place-content-between">
        <h2 className="ml-10 text-2xl font-bold underline selection:bg-fuchsia-300">{date}</h2>
        <h2 className="mr-10 text-xl font-bold selection:bg-fuchsia-300">{author}</h2>
      </div>
      <div className="mt-10 flex flex-col">
        <p className=" ml-10 mr-10 text-xl font-light selection:bg-fuchsia-300 ">{body}</p>
      </div>
    </main>
  )
}
