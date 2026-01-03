// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Phone, Shield, Zap, Target, TrendingUp } from "lucide-react";

// interface LoginPageProps {
//   onLogin: () => void;
// }

// export const LoginPage = ({ onLogin }: LoginPageProps) => {
//   const [step, setStep] = useState<'phone' | 'otp'>('phone');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [otp, setOtp] = useState('');

//   const handleSendOTP = () => {
//     if (phoneNumber.length >= 10) {
//       setStep('otp');
//     }
//   };

//   const handleVerifyOTP = () => {
//     if (otp.length === 6) {
//       onLogin();
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
//       <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
//       <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/10 rounded-full blur-xl" />
      
//       <div className="w-full max-w-md relative z-10">
//         {/* Logo & Header */}
//         <div className="text-center mb-8 animate-fadeInUp">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-xl mb-4 shadow-lg">
//             <Target className="w-8 h-8 text-white" />
//           </div>
//           <h1 className="text-3xl font-bold gradient-text mb-2">Digital Coach</h1>
//           <p className="text-muted-foreground">AI-Powered Sales Excellence Platform</p>
//         </div>

//         {/* Features Preview */}
//         <div className="grid grid-cols-3 gap-4 mb-8 animate-fadeInUp">
//           <div className="text-center">
//             <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
//               <Zap className="w-6 h-6 text-primary" />
//             </div>
//             <p className="text-xs text-muted-foreground">Real-time Analysis</p>
//           </div>
//           <div className="text-center">
//             <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
//               <TrendingUp className="w-6 h-6 text-secondary" />
//             </div>
//             <p className="text-xs text-muted-foreground">Performance Reports</p>
//           </div>
//           <div className="text-center">
//             <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
//               <Shield className="w-6 h-6 text-accent" />
//             </div>
//             <p className="text-xs text-muted-foreground">Secure Platform</p>
//           </div>
//         </div>

//         {/* Login Card */}
//         <Card className="card-elevated animate-fadeInUp border-0">
//           <CardHeader className="text-center">
//             <CardTitle className="text-xl">
//               {step === 'phone' ? 'Welcome Back' : 'Verify OTP'}
//             </CardTitle>
//             <CardDescription>
//               {step === 'phone' 
//                 ? 'Enter your mobile number to continue' 
//                 : `Enter the 6-digit code sent to ${phoneNumber}`
//               }
//             </CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             {step === 'phone' ? (
//               <>
//                 <div className="space-y-2">
//                   <Label htmlFor="phone">Mobile Number</Label>
//                   <div className="relative">
//                     <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                     <Input
//                       id="phone"
//                       type="tel"
//                       placeholder="+91 98765 43210"
//                       className="pl-10 h-12 border-2 focus:border-primary"
//                       value={phoneNumber}
//                       onChange={(e) => setPhoneNumber(e.target.value)}
//                     />
//                   </div>
//                 </div>
//                 <Button 
//                   onClick={handleSendOTP}
//                   className="w-full h-12"
//                   variant="gradient"
//                   disabled={phoneNumber.length < 10}
//                 >
//                   Send OTP
//                 </Button>
//               </>
//             ) : (
//               <>
//                 <div className="space-y-2">
//                   <Label htmlFor="otp">Enter OTP</Label>
//                   <Input
//                     id="otp"
//                     type="text"
//                     placeholder="123456"
//                     className="text-center text-lg tracking-widest h-12 border-2 focus:border-primary"
//                     value={otp}
//                     onChange={(e) => setOtp(e.target.value.slice(0, 6))}
//                     maxLength={6}
//                   />
//                 </div>
//                 <div className="flex gap-3">
//                   <Button 
//                     onClick={() => setStep('phone')}
//                     variant="outline"
//                     className="flex-1"
//                   >
//                     Back
//                   </Button>
//                   <Button 
//                     onClick={handleVerifyOTP}
//                     className="flex-1 h-12"
//                     variant="gradient"
//                     disabled={otp.length !== 6}
//                   >
//                     Verify & Continue
//                   </Button>
//                 </div>
//                 <div className="text-center">
//                   <button className="text-sm text-primary hover:underline">
//                     Resend OTP
//                   </button>
//                 </div>
//               </>
//             )}
//           </CardContent>
//         </Card>

//         {/* Footer */}
//         <div className="text-center mt-6 text-sm text-muted-foreground">
//           <p>Secure • Reliable • AI-Powered</p>
//         </div>
//       </div>
//     </div>
//   );
// };


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Phone, Shield, Zap, Target, TrendingUp, Eye, EyeOff, User, Briefcase, Mail, MapPin, Calendar } from "lucide-react";

interface LoginPageProps {
  onLogin: () => void;
}

export const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [step, setStep] = useState<'phone' | 'otp' | 'password' | 'profile'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    company: '',
    designation: '',
    location: '',
    experience: ''
  });

  const handleSendOTP = () => {
    if (phoneNumber.length >= 10) {
      setStep('otp');
    }
  };

  const handleVerifyOTP = () => {
    if (otp.length === 6) {
      setStep('password');
    }
  };

  const handleSetPassword = () => {
    if (password.length >= 8 && password === confirmPassword) {
      setStep('profile');
    }
  };

  const handleCompleteProfile = () => {
    if (profile.name && profile.email && profile.company) {
      onLogin();
    }
  };

  const isPasswordValid = password.length >= 8 && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password);
  const passwordsMatch = password === confirmPassword && confirmPassword.length > 0;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200/20 rounded-full blur-xl animate-pulse" />
      
      <div className="w-full max-w-md relative z-10">
        {/* Logo & Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mb-4 shadow-lg">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Digital Coach
          </h1>
          <p className="text-gray-600">AI-Powered Sales Excellence Platform</p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2">
            {['phone', 'otp', 'password', 'profile'].map((stepName, index) => (
              <div key={stepName} className="flex items-center">
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  step === stepName ? 'bg-blue-600 scale-125' :
                  ['phone', 'otp', 'password', 'profile'].indexOf(step) > index ? 'bg-green-500' : 'bg-gray-300'
                }`} />
                {index < 3 && <div className={`w-8 h-0.5 mx-1 transition-all duration-300 ${
                  ['phone', 'otp', 'password', 'profile'].indexOf(step) > index ? 'bg-green-500' : 'bg-gray-300'
                }`} />}
              </div>
            ))}
          </div>
        </div>

        {/* Features Preview - Only show on first step */}
        {step === 'phone' && (
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-xs text-gray-600">Real-time Analysis</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-xs text-gray-600">Performance Reports</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-xs text-gray-600">Secure Platform</p>
            </div>
          </div>
        )}

        {/* Main Card */}
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">
              {step === 'phone' && 'Welcome Back'}
              {step === 'otp' && 'Verify OTP'}
              {step === 'password' && 'Create Password'}
              {step === 'profile' && 'Complete Profile'}
            </CardTitle>
            <CardDescription>
              {step === 'phone' && 'Enter your mobile number to continue'}
              {step === 'otp' && `Enter the 6-digit code sent to ${phoneNumber}`}
              {step === 'password' && 'Secure your account with a strong password'}
              {step === 'profile' && 'Tell us a bit about yourself to get started'}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            
            {/* Phone Step */}
            {step === 'phone' && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="phone">Mobile Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="pl-10 h-12 border-2 focus:border-blue-500"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
                <Button 
                  onClick={handleSendOTP}
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  disabled={phoneNumber.length < 10}
                >
                  Send OTP
                </Button>
              </>
            )}

            {/* OTP Step */}
            {step === 'otp' && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="otp">Enter OTP</Label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder="123456"
                    className="text-center text-lg tracking-widest h-12 border-2 focus:border-blue-500"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.slice(0, 6))}
                    maxLength={6}
                  />
                </div>
                <div className="flex gap-3">
                  <Button 
                    onClick={() => setStep('phone')}
                    variant="outline"
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={handleVerifyOTP}
                    className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    disabled={otp.length !== 6}
                  >
                    Verify & Continue
                  </Button>
                </div>
                <div className="text-center">
                  <button className="text-sm text-blue-600 hover:underline">
                    Resend OTP
                  </button>
                </div>
              </>
            )}

            {/* Password Step */}
            {step === 'password' && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="password">Create Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="pr-10 h-12 border-2 focus:border-blue-500"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 h-4 w-4 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="text-xs space-y-1">
                    <div className={`flex items-center space-x-2 ${password.length >= 8 ? 'text-green-600' : 'text-gray-400'}`}>
                      <div className={`w-2 h-2 rounded-full ${password.length >= 8 ? 'bg-green-500' : 'bg-gray-300'}`} />
                      <span>At least 8 characters</span>
                    </div>
                    <div className={`flex items-center space-x-2 ${/[A-Z]/.test(password) ? 'text-green-600' : 'text-gray-400'}`}>
                      <div className={`w-2 h-2 rounded-full ${/[A-Z]/.test(password) ? 'bg-green-500' : 'bg-gray-300'}`} />
                      <span>One uppercase letter</span>
                    </div>
                    <div className={`flex items-center space-x-2 ${/[a-z]/.test(password) ? 'text-green-600' : 'text-gray-400'}`}>
                      <div className={`w-2 h-2 rounded-full ${/[a-z]/.test(password) ? 'bg-green-500' : 'bg-gray-300'}`} />
                      <span>One lowercase letter</span>
                    </div>
                    <div className={`flex items-center space-x-2 ${/\d/.test(password) ? 'text-green-600' : 'text-gray-400'}`}>
                      <div className={`w-2 h-2 rounded-full ${/\d/.test(password) ? 'bg-green-500' : 'bg-gray-300'}`} />
                      <span>One number</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      className="pr-10 h-12 border-2 focus:border-blue-500"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 h-4 w-4 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  {confirmPassword.length > 0 && (
                    <div className={`text-xs flex items-center space-x-2 ${passwordsMatch ? 'text-green-600' : 'text-red-500'}`}>
                      <div className={`w-2 h-2 rounded-full ${passwordsMatch ? 'bg-green-500' : 'bg-red-500'}`} />
                      <span>{passwordsMatch ? 'Passwords match' : 'Passwords do not match'}</span>
                    </div>
                  )}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    onClick={() => setStep('otp')}
                    variant="outline"
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={handleSetPassword}
                    className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    disabled={!isPasswordValid || !passwordsMatch}
                  >
                    Continue
                  </Button>
                </div>
              </>
            )}

            {/* Profile Step */}
            {step === 'profile' && (
              <>
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        className="pl-10 h-12 border-2 focus:border-blue-500"
                        value={profile.name}
                        onChange={(e) => setProfile({...profile, name: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@company.com"
                        className="pl-10 h-12 border-2 focus:border-blue-500"
                        value={profile.email}
                        onChange={(e) => setProfile({...profile, email: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company *</Label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="company"
                        placeholder="Your company name"
                        className="pl-10 h-12 border-2 focus:border-blue-500"
                        value={profile.company}
                        onChange={(e) => setProfile({...profile, company: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="designation">Designation</Label>
                    <Input
                      id="designation"
                      placeholder="Sales Manager, Business Developer, etc."
                      className="h-12 border-2 focus:border-blue-500"
                      value={profile.designation}
                      onChange={(e) => setProfile({...profile, designation: e.target.value})}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="location"
                          placeholder="City, Country"
                          className="pl-10 h-12 border-2 focus:border-blue-500"
                          value={profile.location}
                          onChange={(e) => setProfile({...profile, location: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="experience">Experience</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="experience"
                          placeholder="2-3 years"
                          className="pl-10 h-12 border-2 focus:border-blue-500"
                          value={profile.experience}
                          onChange={(e) => setProfile({...profile, experience: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    onClick={() => setStep('password')}
                    variant="outline"
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={handleCompleteProfile}
                    className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    disabled={!profile.name || !profile.email || !profile.company}
                  >
                    Complete Setup
                  </Button>
                </div>
              </>
            )}
            
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>Secure • Reliable • AI-Powered</p>
        </div>
      </div>
    </div>
  );
};