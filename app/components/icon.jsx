import Image from 'next/image'

export default function Icon() {
  return (
    <div className="ml-5 flex items-center justify-between">
      <Image height={10} width={40} src="/mug-hot-alt.svg" alt="HeaderIcon" />
      <h1 className="pl-2 text-2xl font-bold">Blog-JS</h1>
    </div>
  )
}
