import Latest from 'app/components/latest'
import HomePost from './components/homePost'
export default function Page() {
  const list = [
    {
      id: 1,
      name: 'John',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      date: '2021-01-01',
      title: 'First post',
      autor: 'John',
    },
    {
      id: 2,
      name: 'John',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      date: '2021-01-01',
      title: 'Second post',
      autor: 'John',
    },
  ]

  return (
    <>
      <Latest />
      <HomePost list={list} />
    </>
  )
}
