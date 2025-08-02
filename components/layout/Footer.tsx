import Image from 'next/image'
import Link from 'next/link'


const Footer: React.FC = () => {
  return (
    <>
        <div className="flex flex-col">
            <div className="bg-[#34967C] text-[#34967C] border-[#34967C] h-5" ></div>
            <div className="bg-[#222222] flex flex-row justify-between p-8">
                <div className="flex flex-col ml-8">
                    <Image src="assets/svgs/alxlogowhite.svg" alt="alx logo" width={30} height={30} className='mb-4'></Image>
                    <p className="max-w-md text-white text-md">
                        ALX is a platform where travelers can discover and book unique,comfortable, and
                        affordable lodging options worldwide. From cozy city apartments and tranquil 
                        countryside retreats to exotic beachside villas, ALX connects you with the perfect
                        place to stay for any trip.
                    </p>
                </div>
                <div className="flex flex-row gap-32 mr-8">
                    <div className="flex flex-col">
                        <div className="mb-4">
                            <h4 className='text-white text-lg font-bold'>Explore</h4>
                        </div>
                        <ul className='space-y-6'>
                            <li className="text-white text-md">
                                <Link href="#">Apartments in Dubai</Link>
                            </li>
                            <li className="text-white text-md">
                                <Link href="#">Hotels in New York</Link>
                            </li>
                            <li className="text-white text-md">
                                <Link href="#">Villa in Spain</Link>
                            </li>
                            <li className="text-white text-md">
                                <Link href="#">Mansion in Indonesia</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <div className="mb-4">
                            <h4 className='text-white text-lg font-bold'>Company</h4>
                        </div>
                        <ul className='space-y-6'>
                            <li className="text-white text-sm">
                                <Link href="#">About us</Link>
                            </li>
                            <li className="text-white text-sm">
                                <Link href="#">Blog</Link>
                            </li>
                            <li className="text-white text-sm">
                                <Link href="#">Career</Link>
                            </li>
                            <li className="text-white text-sm">
                                <Link href="#">Customers</Link>
                            </li>
                            <li className="text-white text-sm">
                                <Link href="#">Brand</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <div className="mb-4">
                            <h4 className='text-white text-lg font-bold'>Help</h4>
                        </div>
                        <ul className='space-y-6'>
                            <li className="text-white text-md">
                                <Link href="#">Apartments in Dubai</Link>
                            </li>
                            <li className="text-white text-md">
                                <Link href="#">Support</Link>
                            </li>
                            <li className="text-white text-md">
                                <Link href="#">Cancel Booking</Link>
                            </li>
                            <li className="text-white text-md">
                                <Link href="#">Refund Processes</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div className='bg-[#222222]'><hr className="text-gray-500 opacity-20 ml-15 mr-15"/></div>
            <div className="flex flex-row justify-between p-4 bg-[#222222]">
                    <div className="ml-12">
                        <p className='text-white text-md'>Some hotel requires you to cancel more than 24 hours beter check-in. Details <Link href="#" className="text-[#34967C] border-[#34967C]">here</Link></p>
                    </div>
                    <div className="mx-4 mr-12">
                        
                        <ul className="flex flex-row gap-25">
                            <li className='text-white text-md'>
                                <Link href="#">Terms of Service</Link>
                            </li>
                            <li className='text-white text-md'>
                                <Link href="#">Policy Service</Link>
                            </li>
                            <li className='text-white text-md'>
                                <Link href="#">Cooking Policy</Link>
                            </li>
                            <li className='text-white text-md'>
                                <Link href="#">Partners</Link>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>  
    </>
  );
}

export default Footer;