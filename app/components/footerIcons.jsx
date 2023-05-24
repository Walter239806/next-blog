import Image from 'next/image'

export default function FooterIcons({ path, alt }) {
  return <Image className="m-3" src={path} alt={alt} width={30} height={10}></Image>
}
