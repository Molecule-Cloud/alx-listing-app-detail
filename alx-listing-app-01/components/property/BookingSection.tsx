import { useState } from "react";


const BookingSection: React.FC<{price: number}> = ( { price } ) => {
   
    // const [checkIn, setCheckIn] = useState("");
    // const [checkOut, setCheckOut] = useState("");

    return (
        <>
            <div className="bg-white p-6 shadow-md rounded-lg">
                <h3 className="text-xl font-semibold">${price}/night</h3>
            {/* Check-In */}
                <div className="mt-4">
                    <label htmlFor="CheckIn">Check-in</label>
                    <input type="date" className="border p-2 w-full mt-2" id="" />
                </div>
            {/* Check-Out */}
                <div className="mt-4">
                    <label htmlFor="CheckOut">Check-out</label>
                    <input type="date" className="border p-2 w-full mt-2"/>
                </div>
            {/* Payment */}
                <div className="mt-4">
                    <p>Total Payment:
                        <strong>${price * 7}</strong>
                    </p>
                </div>
            {/* Reserve Button */}
                <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md">
                    Reserve now
                </button>
            </div>
        </>
    )
}


export default BookingSection;