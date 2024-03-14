"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignUp() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  return (
    <div className="flex">
      <h1 className="text-center text-white text-2xl">SignUp</h1>
    </div>
  );
}
