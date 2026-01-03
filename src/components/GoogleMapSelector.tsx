import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MapPin, Search, Navigation } from "lucide-react";

interface GoogleMapSelectorProps {
  onLocationSelect: (location: { lat: number; lng: number; address: string }) => void;
  onBack: () => void;
}

export const GoogleMapSelector = ({ onLocationSelect, onBack }: GoogleMapSelectorProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [marker, setMarker] = useState<google.maps.Marker | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<{
    lat: number;
    lng: number;
    address: string;
  } | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [apiKeyError, setApiKeyError] = useState(false);

  useEffect(() => {
    const initMap = async () => {
      try {
        // In production, this should come from Supabase Edge Function
        // For demo purposes, you can temporarily add your API key here
        const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY";
        
        if (!GOOGLE_MAPS_API_KEY || GOOGLE_MAPS_API_KEY === "YOUR_GOOGLE_MAPS_API_KEY") {
          setApiKeyError(true);
          setIsLoading(false);
          return;
        }

        const loader = new Loader({
          apiKey: GOOGLE_MAPS_API_KEY,
          version: "weekly",
          libraries: ["places", "geometry"]
        });

        await loader.load();

        if (!mapRef.current) return;

        // Default to Mumbai coordinates
        const defaultLocation = { lat: 19.0760, lng: 72.8777 };

        const mapInstance = new google.maps.Map(mapRef.current, {
          center: defaultLocation,
          zoom: 12,
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }]
            }
          ]
        });

        setMap(mapInstance);

        // Add click listener to map
        mapInstance.addListener("click", async (event: google.maps.MapMouseEvent) => {
          if (event.latLng) {
            const lat = event.latLng.lat();
            const lng = event.latLng.lng();
            
            // Remove existing marker
            if (marker) {
              marker.setMap(null);
            }

            // Add new marker
            const newMarker = new google.maps.Marker({
              position: { lat, lng },
              map: mapInstance,
              animation: google.maps.Animation.DROP,
            });

            setMarker(newMarker);

            // Get address from coordinates
            const geocoder = new google.maps.Geocoder();
            try {
              const result = await geocoder.geocode({ location: { lat, lng } });
              const address = result.results[0]?.formatted_address || `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
              
              setSelectedLocation({ lat, lng, address });
            } catch (error) {
              console.error("Geocoding error:", error);
              setSelectedLocation({ lat, lng, address: `${lat.toFixed(6)}, ${lng.toFixed(6)}` });
            }
          }
        });

        setIsLoading(false);
      } catch (error) {
        console.error("Error loading Google Maps:", error);
        setApiKeyError(true);
        setIsLoading(false);
      }
    };

    initMap();
  }, [marker]);

  const handleSearch = async () => {
    if (!map || !searchQuery.trim()) return;

    const service = new google.maps.places.PlacesService(map);
    const request = {
      query: searchQuery,
      fields: ["name", "geometry"],
    };

    service.textSearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results?.[0]) {
        const place = results[0];
        if (place.geometry?.location) {
          const lat = place.geometry.location.lat();
          const lng = place.geometry.location.lng();
          
          map.setCenter({ lat, lng });
          map.setZoom(15);

          // Remove existing marker
          if (marker) {
            marker.setMap(null);
          }

          // Add new marker
          const newMarker = new google.maps.Marker({
            position: { lat, lng },
            map: map,
            animation: google.maps.Animation.DROP,
          });

          setMarker(newMarker);
          setSelectedLocation({ 
            lat, 
            lng, 
            address: place.name || `${lat.toFixed(6)}, ${lng.toFixed(6)}` 
          });
        }
      }
    });
  };

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          
          if (map) {
            map.setCenter({ lat, lng });
            map.setZoom(15);

            // Remove existing marker
            if (marker) {
              marker.setMap(null);
            }

            // Add new marker
            const newMarker = new google.maps.Marker({
              position: { lat, lng },
              map: map,
              animation: google.maps.Animation.DROP,
            });

            setMarker(newMarker);
            setSelectedLocation({ 
              lat, 
              lng, 
              address: "Current Location" 
            });
          }
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  };

  const handleConfirmLocation = () => {
    if (selectedLocation) {
      onLocationSelect(selectedLocation);
    }
  };

  if (apiKeyError) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-destructive">API Key Required</CardTitle>
            <CardDescription>
              Google Maps API key is required. Please add your API key to continue.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              1. Get your API key from <a href="https://console.cloud.google.com/google/maps-apis" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Cloud Console</a>
            </p>
            <p className="text-sm text-muted-foreground">
              2. Add it to your Supabase Edge Function secrets
            </p>
            <Button onClick={onBack} variant="outline" className="w-full">
              Back to Location List
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="p-4 bg-background border-b">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-2">
                <MapPin className="w-6 h-6 text-primary" />
                Select Location on Map
              </h1>
              <p className="text-muted-foreground">Click on the map to select your exact location</p>
            </div>
            <Button onClick={onBack} variant="outline">
              Back
            </Button>
          </div>

          {/* Search Bar */}
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for a location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="pl-10"
              />
            </div>
            <Button onClick={handleSearch} disabled={!searchQuery.trim()}>
              Search
            </Button>
            <Button onClick={handleGetCurrentLocation} variant="outline">
              <Navigation className="w-4 h-4 mr-2" />
              My Location
            </Button>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="flex-1 relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10">
            <div className="text-center">
              <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
              <p>Loading map...</p>
            </div>
          </div>
        )}
        <div ref={mapRef} className="w-full h-full" />
        
        {/* Selected Location Info */}
        {selectedLocation && (
          <div className="absolute bottom-4 left-4 right-4">
            <Card className="max-w-md mx-auto">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div className="flex-1">
                    <h3 className="font-medium">Selected Location</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {selectedLocation.address}
                    </p>
                    <Button 
                      onClick={handleConfirmLocation}
                      className="w-full"
                      variant="gradient"
                    >
                      Confirm This Location
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};