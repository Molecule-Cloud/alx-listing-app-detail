import Image from "next/image";

const ReviewSection: React.FC<{ reviews: any[] }> = ({ reviews }) => {
  // YOUR CHALLENGE: Create a function to render star ratings
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "text-yellow-400" : "text-gray-300"}>
          ★
        </span>
      );
    }
    return stars;
  };

  // Handle empty reviews
  if (!reviews || reviews.length === 0) {
    return (
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
        <p className="text-gray-500">No reviews yet. Be the first to review!</p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-6">Reviews ({reviews.length})</h3>
      
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
            <div className="flex items-start space-x-4">
              {/* Avatar */}
              <Image 
                src={review.avatar} 
                alt={`${review.name}'s profile picture`}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              
              <div className="flex-1">
                {/* Reviewer info and rating */}
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  {/* YOUR TASK: Add date if available */}
                  {review.date && (
                    <span className="text-sm text-gray-500">{review.date}</span>
                  )}
                </div>
                
                {/* Star rating */}
                <div className="flex items-center mb-3">
                  <div className="flex mr-2">
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-sm text-gray-600">({review.rating}/5)</span>
                </div>
                
                {/* Review comment */}
                <p className="text-gray-700 leading-relaxed">
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