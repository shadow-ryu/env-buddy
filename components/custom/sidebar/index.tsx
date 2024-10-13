"use client";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ChevronDown,
  GitBranch,
  Inbox,
  Settings,
  Users,
  FolderKanban,
  UserCircle,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Team = {
  name: string;
  id: string;
};

export default function Sidebar() {
  const [isTeamsOpen, setIsTeamsOpen] = useState(false);
  const [openTeams, setOpenTeams] = useState<string[]>([]);

  const teams: Team[] = [
    { name: "Team Alpha", id: "team-alpha" },
    { name: "Team Beta", id: "team-beta" },
    { name: "Team Gamma", id: "team-gamma" },
  ];

  const toggleTeam = (teamId: string) => {
    setOpenTeams((prev) =>
      prev.includes(teamId)
        ? prev.filter((id) => id !== teamId)
        : [...prev, teamId]
    );
  };

  return (
    <div className="flex flex-col  bg-background border-r">
      <div className="p-4">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 font-semibold text-lg"
        >
          <span>EnvKeeper.</span>
        </Link>
      </div>
      <ScrollArea className="flex-1">
        <nav className="flex flex-col gap-2 p-4">
          <Link href="/dashboard/inbox" passHref>
            <Button variant="ghost" className="w-full justify-start">
              <Inbox className="mr-2 h-4 w-4" />
              Inbox
            </Button>
          </Link>
          <Collapsible open={isTeamsOpen} onOpenChange={setIsTeamsOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between">
                <span className="flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  Teams
                </span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isTeamsOpen ? "transform rotate-180" : ""
                  }`}
                />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-6 space-y-2">
              {teams.map((team) => (
                <Collapsible
                  key={team.id}
                  open={openTeams.includes(team.id)}
                  onOpenChange={() => toggleTeam(team.id)}
                >
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full justify-between">
                      <span>{team.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openTeams.includes(team.id)
                            ? "transform rotate-180"
                            : ""
                        }`}
                      />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-4 space-y-2">
                    <Link
                      href={`/dashboard/teams/${team.id}/projects`}
                      passHref
                    >
                      <Button variant="ghost" className="w-full justify-start">
                        <FolderKanban className="mr-2 h-4 w-4" />
                        Projects
                      </Button>
                    </Link>
                    <Link href={`/dashboard/teams/${team.id}/members`} passHref>
                      <Button variant="ghost" className="w-full justify-start">
                        <UserCircle className="mr-2 h-4 w-4" />
                        Members
                      </Button>
                    </Link>
                    <Link
                      href={`/dashboard/teams/${team.id}/settings`}
                      passHref
                    >
                      <Button variant="ghost" className="w-full justify-start">
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </Button>
                    </Link>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </CollapsibleContent>
          </Collapsible>
          <Link href="/dashboard/settings" passHref>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </Link>
        </nav>
      </ScrollArea>
      <div className="p-4 border-t">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-full justify-start">
              <img
                src="/placeholder-user.jpg"
                alt="User avatar"
                className="w-6 h-6 rounded-full mr-2"
              />
              John Doe
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
