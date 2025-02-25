"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import SignIn from "@/components/auth/SignIn";
import SignUp from "@/components/auth/SignUp";

export const Navbar = () => {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleOpenSignIn = () => {
    setShowSignInModal(true);
  };

  const handleCloseSignIn = () => {
    setShowSignInModal(false);
  };

  const handleOpenSignUp = () => {
    setShowSignInModal(false);
    setShowSignUpModal(true);
  };

  const handleCloseSignUp = () => {
    setShowSignUpModal(false);
  };

  const handleSwitchToSignIn = () => {
    setShowSignUpModal(false);
    setShowSignInModal(true);
  };

  return (
    <>
      <nav className="flex items-center justify-between p-4 bg-black">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={200}
              height={80}
              className="mr-2 rounded-lg"
            />
          </Link>
        </div>
        <div>
          <Button
            onClick={handleOpenSignIn}
            variant="ghost"
            className="text-white hover:text-white hover:bg-transparent border border-white"
          >
            Sign In
          </Button>
        </div>
      </nav>

      {/* Modal SignIn */}
      {showSignInModal && (
        <SignIn
          onClose={handleCloseSignIn}
          onSwitchToSignUp={handleOpenSignUp}
        />
      )}

      {/* Modal SignUp */}
      {showSignUpModal && (
        <SignUp
          onClose={handleCloseSignUp}
          onSwitchToSignIn={handleSwitchToSignIn}
        />
      )}
    </>
  );
};