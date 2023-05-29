export default function PostBody({ author, date, body }) {
  if (date) date = date.split('T')[0]
  return (
    <main className="mt-10 flex flex-col pb-96">
      <div className=" flex flex-row place-content-between">
        <h2 className="ml-32 text-2xl font-bold underline selection:bg-fuchsia-300">{date}</h2>
        <h2 className="mr-32 text-xl font-bold selection:bg-fuchsia-300">{author}</h2>
      </div>
      <div className="mt-10 flex flex-col text-center">
        <p className=" ml-10 mr-10 text-xl font-light text-gray-500 selection:bg-fuchsia-300 hover:text-black">
          {body}
        </p>
      </div>
    </main>
  )
}
