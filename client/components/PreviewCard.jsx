import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PreviewCard = ({desc, link}) => {
  return (
    <Link href={link ? link : '/notfound'}>
    <div className='flex flex-col bg-stone-700 items-center border border-lime-500 rounded-sm shadow-xl w-[200px] h-[300px] p-3 gap-3'>
        <Image 
        src={'/cat1.png'}
        width={150}
        height={300}
        alt='preview card image'
        />
        <p>{desc}</p>
    </div>
    </Link>

  )
}

export default PreviewCard