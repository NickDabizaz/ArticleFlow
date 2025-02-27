import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SignUpProps {
  onClose: () => void;
  onSwitchToSignIn: () => void;
}

export default function SignUp({ onClose, onSwitchToSignIn }: SignUpProps) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <Card
        className="w-full max-w-md relative bg-white shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <CardHeader>
          <CardTitle className="text-3xl font-bold">Sign Up</CardTitle>
          <CardDescription>Create a new account to get started.</CardDescription>
        </CardHeader>
        <CardContent>
  <form className="space-y-4">
    {/* First Name and Last Name in one row */}
    <div className="flex space-x-4">
      <div className="flex-1 space-y-2">
        <Label htmlFor="firstName">First Name (required)</Label>
        <Input id="firstName" type="text" required placeholder="Enter your first name" />
      </div>
      <div className="flex-1 space-y-2">
        <Label htmlFor="lastName">Last Name (optional)</Label>
        <Input id="lastName" type="text" placeholder="Enter your last name" />
      </div>
    </div>

    {/* Email */}
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" required placeholder="Enter your email" />
    </div>

    {/* Password */}
    <div className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" required placeholder="Enter your password" />
    </div>

    {/* Confirmation Password */}
    <div className="space-y-2">
      <Label htmlFor="confirmPassword">Confirm Password</Label>
      <Input id="confirmPassword" type="password" required placeholder="Confirm your password" />
    </div>

    {/* Buttons */}
    <Button
      type="submit"
      className="w-full border border-black hover:border-gray-400 hover:bg-gray-100"
    >
      Sign Up
    </Button>

    <Button variant="outline" className="w-full">
      <GoogleIcon className="mr-2 h-4 w-4" />
      Sign up with Google
    </Button>

    {/* Links */}
    <div className="flex justify-between">
      <button
        onClick={(e) => {
          e.preventDefault(); // Prevent default behavior
          onSwitchToSignIn(); // Switch to Sign In modal
        }}
        className="inline-block text-sm underline"
      >
        Already have an account? Sign in
      </button>
    </div>
  </form>
</CardContent>
      </Card>
    </div>
  );
}

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}