"use client";
import { useState } from "react";
import { Bell, UserPlus, MoreVertical, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function InviteInbox() {
  const [invites, setInvites] = useState([
    {
      id: 1,
      sender: "Alice Johnson",
      project: "Project X",
      role: "Developer",
      time: "2 hours ago",
    },
    {
      id: 2,
      sender: "Bob Smith",
      project: "Team Alpha",
      role: "Designer",
      time: "1 day ago",
    },
    {
      id: 3,
      sender: "Carol Williams",
      project: "Marketing Campaign",
      role: "Manager",
      time: "3 days ago",
    },
  ]);

  const handleAccept = (id: number) => {
    setInvites(invites.filter((invite) => invite.id !== id));
    // Here you would typically send an API request to accept the invite
  };

  const handleDecline = (id: number) => {
    setInvites(invites.filter((invite) => invite.id !== id));
    // Here you would typically send an API request to decline the invite
  };

  return (
    <div className="">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Invite Inbox</CardTitle>
        <Button variant="outline">
          <UserPlus className="mr-2 h-4 w-4" />
          Send Invite
        </Button>
      </CardHeader>
      <CardContent>
        {invites.length === 0 ? (
          <div className="text-center py-8">
            <Bell className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-semibold text-gray-900">
              No invites
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              You have no pending invites at the moment.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {invites.map((invite) => (
              <Card key={invite.id}>
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage
                        src={`/placeholder.svg?height=40&width=40`}
                        alt={invite.sender}
                      />
                      <AvatarFallback>{invite.sender[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{invite.sender}</p>
                      <p className="text-xs text-gray-500">
                        invited you to join {invite.project}
                      </p>
                      <div className="flex items-center mt-1">
                        <Badge variant="secondary" className="text-xs">
                          {invite.role}
                        </Badge>
                        <span className="text-xs text-gray-400 ml-2">
                          {invite.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDecline(invite.id)}
                    >
                      <X className="h-4 w-4 mr-1" />
                      Decline
                    </Button>
                    <Button size="sm" onClick={() => handleAccept(invite.id)}>
                      <Check className="h-4 w-4 mr-1" />
                      Accept
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </div>
  );
}
