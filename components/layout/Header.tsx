import Link from "next/link";
import Image from "next/image";
import { useAppContext, useAppActions } from "@/context/AppContext";

const Header: React.FC = () => {
  const { state } = useAppContext();
  const { login, logout, updateSearch, toggleMobileMenu } = useAppActions();
  return (

    <div className="w-full">
      <div className="flex items-center justify-none bg-white flex-col w-full">
        <div className="flex flex-row w-full items-center justify-center bg-[#34967C] text-[#34967C] border-[#34967C] p-2">
          <div className="text-white">
            <Image src="/assets/svgs/suitcase.svg" alt="suitcase" width={20} height={20} />
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
        
      </div>
    </div>
  );
};

export default Header;