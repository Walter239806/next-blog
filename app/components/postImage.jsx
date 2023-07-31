import Image from 'next/image'
export default function PostImage({ src, alt }) {
  console.log(src)
  return (
    <Image
      src={src}
      alt={alt}
      height={300}
      width={600}
      className="flex select-none self-center"
    ></Image>
  )
}
