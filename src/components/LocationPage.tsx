import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, ChevronRight, Globe, Map } from "lucide-react";
import { GoogleMapSelector } from "./GoogleMapSelector";

interface LocationPageProps {
  onLocationSelect: (location: string) => void;
}

const randomLocations = [
  { name: "Mumbai, Maharashtra", region: "Western India", code: "MH" },
  { name: "Delhi, NCR", region: "Northern India", code: "DL" },
  { name: "Bangalore, Karnataka", region: "Southern India", code: "KA" },
  { name: "Hyderabad, Telangana", region: "Southern India", code: "TG" },
  { name: "Chennai, Tamil Nadu", region: "Southern India", code: "TN" },
  { name: "Kolkata, West Bengal", region: "Eastern India", code: "WB" },
  { name: "Pune, Maharashtra", region: "Western India", code: "MH" },
  { name: "Ahmedabad, Gujarat", region: "Western India", code: "GJ" },
  { name: "Jaipur, Rajasthan", region: "Northern India", code: "RJ" },
  { name: "Lucknow, Uttar Pradesh", region: "Northern India", code: "UP" }
];

export const LocationPage = ({ onLocationSelect }: LocationPageProps) => {
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [showMap, setShowMap] = useState(false);

  const handleContinue = () => {
    if (selectedLocation) {
      onLocationSelect(selectedLocation);
    }
  };

  const handleMapLocationSelect = (location: { lat: number; lng: number; address: string }) => {
    onLocationSelect(location.address);
  };

  if (showMap) {
    return (
      <GoogleMapSelector 
        onLocationSelect={handleMapLocationSelect}
        onBack={() => setShowMap(false)}
      />
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-xl" />
      
      <div className="w-full max-w-2xl relative z-10">
        {/* Header */}
        <div className="text-center mb-8 animate-fadeInUp">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl mb-4 shadow-lg">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold gradient-text mb-2">Select Your Location</h1>
          <p className="text-muted-foreground">Choose your operating region to personalize your experience</p>
        </div>

        {/* Location Selection Card */}
        <Card className="card-elevated animate-fadeInUp border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-xl flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Available Regions
            </CardTitle>
            <CardDescription>
              Select the location where you'll be conducting your sales activities
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid gap-3 max-h-96 overflow-y-auto">
              {randomLocations.map((location, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
                    selectedLocation === location.name
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedLocation(location.name)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        selectedLocation === location.name ? "bg-primary" : "bg-muted"
                      }`} />
                      <div>
                        <h3 className="font-medium">{location.name}</h3>
                        <p className="text-sm text-muted-foreground">{location.region}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-muted px-2 py-1 rounded font-mono">
                        {location.code}
                      </span>
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-4 border-t space-y-3">
              <Button 
                onClick={() => setShowMap(true)}
                className="w-full h-12"
                variant="outline"
              >
                <Map className="w-4 h-4 mr-2" />
                Select on Google Maps
              </Button>
              
              <Button 
                onClick={handleContinue}
                className="w-full h-12"
                variant="gradient"
                disabled={!selectedLocation}
              >
                Continue to Dashboard
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-muted-foreground">
          <p>Your location helps us provide region-specific insights and analytics</p>
        </div>
      </div>
    </div>
  );
};