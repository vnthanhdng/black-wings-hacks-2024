// Import the necessary type(s) from the google.maps TypeScript types package
import { LatLngLiteral } from "@googlemaps/google-maps-services-js";

// Define the interface for your Map component's props
interface MapProps {
  centerCoordinates: LatLngLiteral; // This assumes you are using the LatLngLiteral type for coordinates
  defaultQueries: string[]; // An array of query strings for the places you want to search for
  searchRadius: number; // The radius for the places search, in meters
}

// Export the interface if it's defined in a separate file
export default MapProps;