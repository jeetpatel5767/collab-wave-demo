"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Github, Users, GitBranch, GitPullRequest } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [stats, setStats] = useState({
    branches: 0,
    pullRequests: 0,
    contributors: 0,
  });

  // Fetch live stats from GitHub API
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const owner = "jeetpatel5767";
        const repo = "collab-wave-demo";

        // Branches
        const branchesRes = await axios.get(
          `https://api.github.com/repos/${owner}/${repo}/branches`
        );

        // Pull Requests (all states)
        const pullsRes = await axios.get(
          `https://api.github.com/repos/${owner}/${repo}/pulls?state=all`
        );

        // Contributors
        const contributorsRes = await axios.get(
          `https://api.github.com/repos/${owner}/${repo}/contributors`
        );

        setStats({
          branches: branchesRes.data.length,
          pullRequests: pullsRes.data.length,
          contributors: contributorsRes.data.length,
        });
      } catch (error) {
        console.error("Failed to fetch project stats:", error);
      }
    };

    fetchStats();
  }, []);

  const contributors = [
    {
      name: "Jeet Bhensdadia",
      role: "Project Creator & Maintainer",
      github: "jeet-bhensdadia",
      contributions: [
        "Initial repository setup",
        "Homepage design",
        "Project structure",
      ],
      avatar: "https://github.com/jeet-bhensdadia.png",
    },
    {
      name: "Kashyap Bhesdadia",
      role: "Project Creator & SDE",
      github: "kashyap1710",
      contributions: [
        "Initial repository setup",
        "Homepage design",
        "Project structure",
      ],
      avatar: "https://github.com/jeet-bhensdadia.png",
    },
  ];

  const projectStats = [
    { icon: GitBranch, label: "Branches", value: stats.branches },
    { icon: GitPullRequest, label: "Pull Requests", value: stats.pullRequests },
    { icon: Users, label: "Contributors", value: stats.contributors },
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
              <h1 className="text-xl font-bold text-slate-900">
                Collaboration Demo
              </h1>
            </div>
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() =>
                window.open(
                  "https://github.com/jeetpatel5767/collab-wave-demo",
                  "_blank"
                )
              }
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 text-sm font-medium"
          >
            🚀 Collaboration Workflow Demo
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Welcome to our
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Collaboration Demo Site
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            A simple project demonstrating collaborative development workflows
            using GitHub, featuring branching strategies, pull requests, code
            reviews, and merge processes.
          </p>

          {/* Project Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
            {projectStats.map((stat, index) => (
              <Card
                key={index}
                className="hover-scale border-slate-200 bg-white/60 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-slate-900">
                    {stat.value}
                  </div>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Project Contributors
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Meet the developers who contributed to this collaborative demo
              project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contributors.map((contributor, index) => (
              <Card
                key={index}
                className="hover-scale border-slate-200 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader className="text-center pb-4">
                  <div className="relative mb-4">
                    <img
                      src={contributor.avatar}
                      alt={contributor.name}
                      className="w-20 h-20 rounded-full mx-auto border-4 border-white shadow-lg"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          contributor.name
                        )}&background=3b82f6&color=fff&size=80`;
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
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">
                      Contributions:
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {contributor.contributions.map((c, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full flex items-center gap-2"
                    onClick={() =>
                      window.open(
                        `https://github.com/${contributor.github}`,
                        "_blank"
                      )
                    }
                  >
                    <Github className="h-4 w-4" />
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
