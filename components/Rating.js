import Image from "next/image"

const Rating = () => {
  return (
    <div className="flex">
        <Image src='/star-icon.svg' alt='star icon' width={20} height={20} />
        <Image src='/star-icon.svg' alt='star icon' width={20} height={20} />
        <Image src='/star-icon.svg' alt='star icon' width={20} height={20} />
        <Image src='/star-icon.svg' alt='star icon' width={20} height={20} />
        <Image src='/star-gray.svg' alt='star icon' width={20} height={20} />
    </div>
  )
}

export default Rating