import Image from 'next/image'
export default function PostImage({ src, alt }) {
  return (
    <Image
      src="/large-triangles.svg"
      alt={alt}
      height={300}
      width={600}
      className="flex select-none self-center"
    ></Image>
  )
}
