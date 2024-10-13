"use client";
import { toast } from "sonner";
import { useState } from "react";
import { Copy, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EnvVariablesView() {
  const [envVariables] = useState(`API_KEY=your-api-key-here
DATABASE_URL=postgres://user:pass@localhost:5432/db
NODE_ENV=development
PORT=3000
SECRET_KEY=your-secret-key-here
REDIS_URL=redis://localhost:6379
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
S3_BUCKET=your-s3-bucket-name
STRIPE_PUBLIC_KEY=your-stripe-public-key
STRIPE_SECRET_KEY=your-stripe-secret-key`);

  const handleCopy = () => {
    navigator.clipboard.writeText(envVariables);
    toast({
      title: "Copied to clipboard",
      description:
        "All environment variables have been copied to your clipboard.",
    });
  };

  const handleEdit = () => {
    // This is where you would typically navigate to an edit page or open an edit modal
    toast({
      title: "Edit mode",
      description:
        "Editing functionality is not implemented in this view-only version.",
    });
  };

  return (
    <div className="min-h-screen ">
      <header className=" shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">
            {" "}
            test's Environment Variables
          </h1>
          <Button onClick={handleEdit} variant="outline">
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Current Environment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-gray-900 p-4 rounded-md overflow-x-auto">
                <pre className="text-gray-100 font-mono text-sm whitespace-pre">
                  <code>{envVariables}</code>
                </pre>
              </div>
              <div className="flex justify-end">
                <Button onClick={handleCopy}>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy All
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
