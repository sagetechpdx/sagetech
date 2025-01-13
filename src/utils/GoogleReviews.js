import { ReactGoogleReviews, dangerouslyFetchPlaceReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

/**
 * Example using NextJS server component
 */
async function ReviewsPage() {
  const placeId = "ChIJNxM5WgBCrGER4JbmUQpceWo"; // Google Place ID
  const apiKey = "AIzaSyD0wa0lIbl5QlYXL1mlbhJwNgmDRrd_ioA"; // Google API Key

  // IMPORTANT: Only fetch reviews server-side to avoid exposing API key
  const reviews = await dangerouslyFetchPlaceReviews(placeId, apiKey)

  return (
    // Carousel and other layouts require wrapping ReactGoogleReviews in a client component
    <ReactGoogleReviews layout="badge" reviews={reviews} />
  );
}

export default ReviewsPage;