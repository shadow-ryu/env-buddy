"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Users, Upload } from "lucide-react";
import { useState } from "react";

export default function CreateTeam() {
  const [logoFile, setLogoFile] = useState<File | null>(null);

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setLogoFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Create a New Team</h1>
      <Card>
        <CardHeader>
          <CardTitle>Team Details</CardTitle>
          <CardDescription>
            Fill in the information to create a new team. You will be set as the
            team owner.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="team-name">Team Name</Label>
                <Input id="team-name" placeholder="Enter team name" required />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="team-logo">Team Logo</Label>
                <div className="flex items-center space-x-4">
                  <Input
                    id="team-logo"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleLogoUpload}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() =>
                      document.getElementById("team-logo")?.click()
                    }
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Logo
                  </Button>
                  {logoFile && (
                    <span className="text-sm text-muted-foreground">
                      {logoFile.name}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="team-description">Team Description</Label>
                <Textarea
                  id="team-description"
                  placeholder="Describe your team's purpose and goals"
                  rows={4}
                />
              </div>
            </div>
            <CardFooter className="flex justify-between mt-6 px-0">
              <Button variant="outline" type="button">
                Cancel
              </Button>
              <Button type="submit">
                <Users className="mr-2 h-4 w-4" />
                Create Team
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
