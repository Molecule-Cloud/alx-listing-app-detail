import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");

    const calculateNights = () => {
        if (!checkIn || !checkOut) return 7; // Default to 7 nights like in design
        const start = new Date(checkIn);
        const end = new Date(checkOut);
        const diffTime = end.getTime() - start.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays > 0 ? diffDays : 7;
    };

    const nights = calculateNights();
    const subtotal = price * nights;
    const serviceFee = 95; // Fixed service fee like in design
    const weeklyDiscount = -40; // Fixed discount like in design
    const total = subtotal + weeklyDiscount + serviceFee;

    return (
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg sticky top-6">
            {/* Price Header */}
            <div className="flex items-baseline space-x-1 mb-6">
                <span className="text-2xl font-bold">${price.toLocaleString()}</span>
                <span className="text-gray-600">/night</span>
            </div>

            {/* Date Inputs */}
            <div className="border border-gray-300 rounded-lg mb-4 overflow-hidden">
                <div className="grid grid-cols-2">
                    <div className="p-3 border-r border-gray-300">
                        <label className="block text-xs font-semibold text-gray-900 mb-1">Check in</label>
                        <input
                            type="date"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            className="w-full text-sm border-none outline-none focus:ring-0 p-0"
                        />
                    </div>
                    <div className="p-3">
                        <label className="block text-xs font-semibold text-gray-900 mb-1">Check out</label>
                        <input
                            type="date"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            min={checkIn}
                            className="w-full text-sm border-none outline-none focus:ring-0 p-0"
                        />
                    </div>
                </div>
            </div>

            {/* Price Breakdown */}
            <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between">
                    <span className="underline">${price.toLocaleString()} x {nights} nights</span>
                    <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-emerald-600">
                    <span>Weekly discounts</span>
                    <span>${weeklyDiscount}</span>
                </div>
                <div className="flex justify-between">
                    <span className="underline">Service fee</span>
                    <span>${serviceFee}</span>
                </div>
                <hr className="my-4 border-gray-200" />
                <div className="flex justify-between font-semibold text-lg">
                    <span>Total payment</span>
                    <span>${total.toLocaleString()}</span>
                </div>
            </div>

            {/* Reserve Button */}
            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                Reserve now
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
                You won't be charged yet
            </p>
        </div>
    );
};


export default BookingSection;