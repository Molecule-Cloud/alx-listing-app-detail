import { SAMPLE_REVIEWS } from "@/constants";
import { Star } from "lucide-react";



const ReviewSection: React.FC<{ reviews?: any[] }> = ({ reviews }) => {
  const displayReviews = reviews && reviews.length > 0 ? reviews : SAMPLE_REVIEWS;

  return (
    <div>
      {/* Reviews Header */}
      <div className="flex items-center space-x-2 mb-6">
        <Star className="w-5 h-5 text-yellow-500 fill-current" />
        <span className="text-lg font-semibold">4.76</span>
        <span className="text-gray-600">( 345 reviews )</span>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {displayReviews.slice(0, 4).map((review, index) => (
          <div key={index} className="space-y-3">
            <div className="flex items-start space-x-4">
              {/* Avatar */}
              {review.avatar ? (
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {review.name.charAt(0)}
                  </span>
                </div>
              )}

              <div className="flex-1">
                <div className="mb-2">
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {review.comment}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;