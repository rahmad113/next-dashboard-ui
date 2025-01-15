import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='flex item-center justify-between p-4'>
        {/*search bar*/}
        <div className='hidden md:flex'>
            <Image src="/search.png" alt="" width={14} height={14}/>
            <input type="text" placeholder="Search..." />
        </div>
        {/*ikon dan user*/}
        <div className='flex items-center gap-6'>
            <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
                <Image src="/message.png" alt="" width={20} height={20}/>
            </div>
            <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
                <Image src="/announcement.png" alt="" width={20} height={20}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar