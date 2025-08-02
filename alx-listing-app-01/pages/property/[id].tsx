import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { useRouter } from "next/router";
import PropertyDetail from '@/components/property/PropertyDetail'


const PropertyPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query

    const property = PROPERTYLISTINGSAMPLE.find((Item) => Item.name === id);

    if (!property) {
        return <p>Proprty Not Found</p>
    } else {
        return (
            <div>
                <PropertyDetail property={property} />
            </div>
        )
    }
}


export default PropertyPage;