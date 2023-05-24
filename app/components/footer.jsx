import FooterIcons from './footerIcons'

export default function Footer() {
  return (
    <footer className="flex h-56 w-full flex-row justify-center bg-gray-500 align-middle">
      <FooterIcons path="/github.svg" alt="github" />
      <FooterIcons path="/envelope.svg" alt="mail" />
      <FooterIcons path="/linkedin.svg" alt="linkedin" />
    </footer>
  )
}
