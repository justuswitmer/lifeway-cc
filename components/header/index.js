import Image from 'next/image';
import logo from "../../public/assets/star-wars-white-logo.png";

export default function Header() {
  return (
    <div className='flex justify-center'>
      <Image
        src={logo}
        height={200}
        width={400}
        alt="Star Wars Logo"
      />
    </div>
  )
}