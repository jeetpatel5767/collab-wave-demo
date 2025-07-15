
import { Github, Users, GitBranch, GitPullRequest } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const contributors = [
    {
      name: "Jeet Bhensdadia",
      role: "Project Creator & Maintainer",
      github: "jeet-bhensdadia", // Replace with actual GitHub username
      contributions: ["Initial repository setup", "Homepage design", "Project structure"],
      avatar: `https://github.com/jeet-bhensdadia.png`, // This will be the GitHub avatar
    }
    // Lovable will add their contributor entry here via PR
  ];

  const projectStats = [
    { icon: GitBranch, label: "Branches", value: "2+" },
    { icon: GitPullRequest, label: "Pull Requests", value: "2+" },
    { icon: Users, label: "Contributors", value: contributors.length },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <GitBranch className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-slate-900">Collaboration Demo</h1>
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              View on GitHub
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
              🚀 Collaboration Workflow Demo
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Welcome to our
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Collaboration Demo Site
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              A simple project demonstrating collaborative development workflows using GitHub, 
              featuring branching strategies, pull requests, code reviews, and merge processes.
            </p>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
            {projectStats.map((stat, index) => (
              <Card key={index} className="hover-scale border-slate-200 bg-white/60 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contributors Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Project Contributors</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Meet the developers who contributed to this collaborative demo project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contributors.map((contributor, index) => (
              <Card key={index} className="hover-scale border-slate-200 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="relative mb-4">
                    <img 
                      src={contributor.avatar} 
                      alt={contributor.name}
                      className="w-20 h-20 rounded-full mx-auto border-4 border-white shadow-lg"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(contributor.name)}&background=3b82f6&color=fff&size=80`;
                      }}
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <Badge variant="secondary" className="text-xs">
                        Contributor
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{contributor.name}</CardTitle>
                  <CardDescription className="text-sm text-slate-600">
                    {contributor.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">Contributions:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {contributor.contributions.map((contribution, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          {contribution}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full flex items-center gap-2"
                    onClick={() => window.open(`https://github.com/${contributor.github}`, '_blank')}
                  >
                    <Github className="h-4 w-4" />
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
            
            {/* Placeholder for future contributors */}
            <Card className="border-2 border-dashed border-slate-300 bg-slate-50/50 flex items-center justify-center min-h-[300px]">
              <div className="text-center p-6">
                <Users className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-600 mb-2">Your Contribution Here</h3>
                <p className="text-sm text-slate-500 mb-4">
                  Fork this project and add yourself as a contributor!
                </p>
                <Button variant="outline" size="sm">
                  <GitPullRequest className="h-4 w-4 mr-2" />
                  Create PR
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Workflow Process */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Collaboration Workflow</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { step: 1, title: "Fork & Clone", desc: "Fork the repository and clone to local machine" },
              { step: 2, title: "Create Branch", desc: "Create a new feature branch for your changes" },
              { step: 3, title: "Make Changes", desc: "Add your contribution and commit changes" },
              { step: 4, title: "Pull Request", desc: "Submit PR for review and merge approval" }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover-scale">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-px bg-slate-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <GitBranch className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold">Collaboration Demo</h3>
              </div>
              <p className="text-slate-400">
                A demonstration project showcasing collaborative development workflows using modern Git practices.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Project Details</h4>
              <ul className="space-y-2 text-slate-400">
                <li>• GitHub Workflow Demo</li>
                <li>• Pull Request Management</li>
                <li>• Code Review Process</li>
                <li>• Branch Management</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Technologies Used</h4>
              <ul className="space-y-2 text-slate-400">
                <li>• React + TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• GitHub Actions</li>
                <li>• Collaborative Git Flow</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500">
            <p>© 2024 Collaboration Demo Site. Built for educational purposes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
