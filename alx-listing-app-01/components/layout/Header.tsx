import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-none bg-white flex-col">
        <div className="flex flex-row w-full items-center justify-center bg-[#34967C] text-[#34967C] border-[#34967C] p-2">
          <div className="text-white">
            <Image src="assets/svgs/suitcase.svg" alt="suitcase" width={20} height={20} />
          </div>
          <div className="flex items-center ml-2">
            <h4 className="text-white">
              Overseas trip? Get the latest Information on travel guides
            </h4>
          </div>
          <div className="text-white bg-black text-sm rounded-full px-3 py-1 ml-2">
            More Info
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-full border-b border-opacity-50 border-gray-300 p-4">
          <div className="ml-6">
            <Link href="">
              <Image src="assets/svgs/alxlogo.svg" alt="alxlogo" width={40} height={40} />
            </Link>
          </div>
          <div className="flex flex-row border border-gray-300 rounded-full space-x-6 px-8 py-2">
            <div className="flex flex-col justify-center mr-20">
              <h4 className="font-semibold text-lg">Location</h4>
              <h5 className="text-gray-400">Search for destination</h5>
            </div>
            <div className="ml-8 border-l border-gray-300 p-2">
              <h4 className="font-semibold text-lg">Check in</h4>
              <h5 className="text-gray-400">Add date</h5>
            </div>
            <div className="border-l border-gray-300 p-2">
              <h4 className="font-semibold text-lg">Check out</h4>
              <h5 className="text-gray-400">Add date</h5>
            </div>
            <div className="border-l border-gray-300 p-2">
              <h4 className="font-semibold text-lg">People</h4>
              <h5 className="text-gray-400">Add guest</h5>
            </div>
            <div>
              <Image src="assets/svgs/search.svg" alt="search" width={40} height={40} />
            </div>
          </div>
          <div className="flex flex-row space-x-2 mr-6">
            <button className="flex px-6 py-3 bg-[#34967C] text-white rounded-full">
              Sign in
            </button>
            <button className="flex px-6 py-3 bg-white rounded-full border ">
              Sign up
            </button>
          </div>
        </div>
        <div className="mt-2 bg-white w-full">
          <ul className="flex flex-row space-x-4 bg-white items-center justify-between  p-2">
            <li>
              <Link href="#">
                <Image src="assets/svgs/rooms.svg" alt="rooms" width={35} height={35} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src="assets/svgs/mansions.svg" alt="mansions" width={38} height={38} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src="assets/svgs/lakefront.svg" alt="lakefront" width={40} height={40} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src="assets/svgs/countryside.svg" alt="countryside" width={50} height={30} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src="assets/svgs/villa.svg" alt="villa" width={30} height={30} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src="assets/svgs/tropical.svg" alt="tropical" width={30} height={30} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src="assets/svgs/new.svg" alt="new" width={25} height={20} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src="assets/svgs/pool.svg" alt="pool" width={50} height={50} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src="assets/svgs/beachhouse.svg" alt="beachhouse" width={50} height={30} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src="assets/svgs/island.svg" alt="island" width={30} height={30} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src="assets/svgs/camping.svg" alt="camping" width={40} height={30} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src="assets/svgs/aprtment.svg" alt="apartment" width={45} height={30} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src="assets/svgs/house.svg" alt="house" width={30} height={30} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src="assets/svgs/lakefront.svg" alt="lakefront" width={50} height={30} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src="assets/svgs/farmhouse.svg" alt="farmhouse" width={50} height={30} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src="assets/svgs/treehouse.svg" alt="treehouse" width={50} height={30} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src="assets/svgs/cabins.svg" alt="cabins" width={30} height={30} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;