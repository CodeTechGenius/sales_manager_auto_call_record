import { useState } from "react";
import { LoginPage } from "@/components/LoginPage";
import { LocationPage } from "@/components/LocationPage";
import { Dashboard } from "@/components/Dashboard";

const Index = () => {
  const [currentStep, setCurrentStep] = useState<'login' | 'location' | 'dashboard'>('login');
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  const handleLogin = () => {
    setCurrentStep('location');
  };

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
    setCurrentStep('dashboard');
  };

  const handleLogout = () => {
    setCurrentStep('login');
    setSelectedLocation("");
  };

  if (currentStep === 'dashboard') {
    return <Dashboard onLogout={handleLogout} />;
  }

  if (currentStep === 'location') {
    return <LocationPage onLocationSelect={handleLocationSelect} />;
  }

  return <LoginPage onLogin={handleLogin} />;
};

export default Index;
