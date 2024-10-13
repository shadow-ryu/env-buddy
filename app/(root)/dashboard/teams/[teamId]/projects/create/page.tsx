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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function CreateProject() {
  return (
    <div className="flex  flex-col min-h-screen">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Create New Project</CardTitle>
              <CardDescription>
                Fill in the details to create a new project for your team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="project-name">Project Name</Label>
                    <Input id="project-name" placeholder="Enter project name" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="project-description">
                      Project Description
                    </Label>
                    <Textarea
                      id="project-description"
                      placeholder="Describe your project"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="team">Assign Team</Label>
                    <Select>
                      <SelectTrigger id="team">
                        <SelectValue placeholder="Select a team" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="team-a">Team Alpha</SelectItem>
                        <SelectItem value="team-b">Team Beta</SelectItem>
                        <SelectItem value="team-c">Team Gamma</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="project-type">Project Type</Label>
                    <Select>
                      <SelectTrigger id="project-type">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="web">Web Application</SelectItem>
                        <SelectItem value="mobile">Mobile App</SelectItem>
                        <SelectItem value="desktop">
                          Desktop Application
                        </SelectItem>
                        <SelectItem value="api">API Development</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Create Project</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
