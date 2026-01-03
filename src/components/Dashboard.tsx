import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Mic, 
  MicOff, 
  Play, 
  Pause, 
  Users, 
  TrendingUp, 
  Target, 
  Award,
  FileText,
  Mail,
  Calendar,
  Clock,
  Phone,
  Volume2,
  Star,
  BarChart3,
  LogOut
} from "lucide-react";

interface DashboardProps {
  onLogout: () => void;
}

export const Dashboard = ({ onLogout }: DashboardProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState("00:00");

  // Mock data for demo
  const salespeople = [
    { id: 1, name: "Rahul Sharma", status: "online", score: 92, calls: 5 },
    { id: 2, name: "Priya Patel", status: "in-call", score: 88, calls: 3 },
    { id: 3, name: "Amit Kumar", status: "offline", score: 85, calls: 7 },
    { id: 4, name: "Sneha Singh", status: "online", score: 94, calls: 4 },
  ];

  const recentCalls = [
    { id: 1, retailer: "Metro Store", duration: "12:30", score: 95, status: "excellent" },
    { id: 2, retailer: "City Mall", duration: "8:45", score: 82, status: "good" },
    { id: 3, retailer: "Local Mart", duration: "15:20", score: 91, status: "excellent" },
  ];

  const performanceData = {
    dailyScore: 89,
    weeklyAverage: 87,
    monthlyAverage: 85,
    totalCalls: 127,
    successRate: 78
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Start timer simulation
      setRecordingTime("00:01");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-md sticky top-0 z-40">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg gradient-text">Digital Coach</h1>
              <p className="text-sm text-muted-foreground">Sales Excellence Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="gap-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              Online
            </Badge>
            <Button variant="ghost" onClick={onLogout}>
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-6 space-y-6">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="card-elevated border-0">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                {isRecording ? <MicOff className="w-8 h-8 text-white" /> : <Mic className="w-8 h-8 text-white" />}
              </div>
              <Button 
                onClick={toggleRecording}
                variant={isRecording ? "destructive" : "gradient"}
                className="w-full mb-2"
              >
                {isRecording ? "Stop Recording" : "Start Call Recording"}
              </Button>
              {isRecording && (
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
                  Recording: {recordingTime}
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="card-elevated border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-secondary">{performanceData.dailyScore}</p>
                  <p className="text-sm text-muted-foreground">Today's Score</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent">{performanceData.totalCalls}</p>
                  <p className="text-sm text-muted-foreground">Total Calls</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-warning" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-warning">{performanceData.successRate}%</p>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-fit">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="calls">Recent Calls</TabsTrigger>
            <TabsTrigger value="team">Team Monitor</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Performance Overview */}
              <Card className="card-elevated border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    Performance Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Daily Average</span>
                      <span className="font-semibold">{performanceData.dailyScore}%</span>
                    </div>
                    <Progress value={performanceData.dailyScore} className="h-2" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Weekly Average</span>
                      <span className="font-semibold">{performanceData.weeklyAverage}%</span>
                    </div>
                    <Progress value={performanceData.weeklyAverage} className="h-2" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Monthly Average</span>
                      <span className="font-semibold">{performanceData.monthlyAverage}%</span>
                    </div>
                    <Progress value={performanceData.monthlyAverage} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* AI Insights */}
              <Card className="card-elevated border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-accent" />
                    AI Insights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                      <h4 className="font-semibold text-success mb-2">✨ Great Job!</h4>
                      <p className="text-sm text-muted-foreground">Your objection handling improved by 15% this week.</p>
                    </div>
                    <div className="p-4 bg-warning/10 rounded-lg border border-warning/20">
                      <h4 className="font-semibold text-warning mb-2">📈 Improvement Area</h4>
                      <p className="text-sm text-muted-foreground">Focus on discovery questions in next calls.</p>
                    </div>
                    <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                      <h4 className="font-semibold text-primary mb-2">🎯 Next Goal</h4>
                      <p className="text-sm text-muted-foreground">Aim for 90+ score to reach premium tier.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="calls" className="space-y-4">
            <Card className="card-elevated border-0">
              <CardHeader>
                <CardTitle>Recent Call Evaluations</CardTitle>
                <CardDescription>AI-powered analysis of your latest sales calls</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentCalls.map((call) => (
                    <div key={call.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{call.retailer}</h4>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            {call.duration}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant={call.status === "excellent" ? "default" : "secondary"}>
                          <Star className="w-3 h-3 mr-1" />
                          {call.score}
                        </Badge>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Play className="w-3 h-3 mr-1" />
                            Listen
                          </Button>
                          <Button size="sm" variant="outline">
                            <FileText className="w-3 h-3 mr-1" />
                            Report
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team" className="space-y-4">
            <Card className="card-elevated border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Team Live Monitor
                </CardTitle>
                <CardDescription>Real-time status of your sales team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {salespeople.map((person) => (
                    <div key={person.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-semibold">
                            {person.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background ${
                            person.status === 'online' ? 'bg-success' : 
                            person.status === 'in-call' ? 'bg-warning' : 'bg-muted-foreground'
                          }`} />
                        </div>
                        <div>
                          <h4 className="font-semibold">{person.name}</h4>
                          <div className="flex items-center gap-2">
                            <Badge variant={person.status === 'in-call' ? 'default' : 'secondary'}>
                              {person.status === 'in-call' && <Volume2 className="w-3 h-3 mr-1" />}
                              {person.status.replace('-', ' ')}
                            </Badge>
                            <span className="text-sm text-muted-foreground">{person.calls} calls today</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="font-semibold">{person.score}</div>
                          <div className="text-sm text-muted-foreground">Score</div>
                        </div>
                        {person.status === 'in-call' && (
                          <Button size="sm" variant="outline">
                            <Volume2 className="w-3 h-3 mr-1" />
                            Listen Live
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="card-elevated border-0 cursor-pointer hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center">
                  <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Daily Report</h3>
                  <p className="text-sm text-muted-foreground mb-4">Today's performance summary</p>
                  <Button variant="outline" size="sm">Generate</Button>
                </CardContent>
              </Card>

              <Card className="card-elevated border-0 cursor-pointer hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center">
                  <Calendar className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Weekly Report</h3>
                  <p className="text-sm text-muted-foreground mb-4">7-day performance analysis</p>
                  <Button variant="outline" size="sm">Generate</Button>
                </CardContent>
              </Card>

              <Card className="card-elevated border-0 cursor-pointer hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Leaderboard</h3>
                  <p className="text-sm text-muted-foreground mb-4">Team rankings & scores</p>
                  <Button variant="outline" size="sm">View</Button>
                </CardContent>
              </Card>

              <Card className="card-elevated border-0 cursor-pointer hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center">
                  <Mail className="w-12 h-12 text-warning mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email Drafts</h3>
                  <p className="text-sm text-muted-foreground mb-4">AI-generated follow-ups</p>
                  <Button variant="outline" size="sm">View Drafts</Button>
                </CardContent>
              </Card>

              <Card className="card-elevated border-0 cursor-pointer hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center">
                  <FileText className="w-12 h-12 text-destructive mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Meeting Notes</h3>
                  <p className="text-sm text-muted-foreground mb-4">Verbatim transcripts</p>
                  <Button variant="outline" size="sm">Access</Button>
                </CardContent>
              </Card>

              <Card className="card-elevated border-0 cursor-pointer hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-12 h-12 text-success mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Analytics</h3>
                  <p className="text-sm text-muted-foreground mb-4">Advanced insights</p>
                  <Button variant="outline" size="sm">Explore</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};