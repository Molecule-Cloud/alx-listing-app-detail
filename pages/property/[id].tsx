import { PROPERTYLISTINGSAMPLE, SAMPLE_REVIEWS } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

const PropertyPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

    if (!property) return <p>Property not found</p>;

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Main Grid: Property + Booking */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column (Property Details) */}
                <div className="lg:col-span-2">
                    <PropertyDetail property={property} />
                </div>

                {/* Right Column (Booking) */}
                <div className="lg:col-span-1">
                    <BookingSection price={property.price} />
                </div>
            </div>

            {/* Reviews (Full width below) */}
            <div className="mt-12">
                <ReviewSection reviews={SAMPLE_REVIEWS} />
            </div>
        </div>
    );
}

export default PropertyPage;