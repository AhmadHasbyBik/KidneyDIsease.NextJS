"use client";
import { useState } from "react";
import axios from "axios";
import Container from "@/components/Container";
import Heading from "@/components/typography/Heading";
import Paragraph from "@/components/typography/Paragraph";
import Link from "next/link";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
    address: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/register",
        formData
      );
      console.log(response.data); // Assuming the API returns some data upon successful registration
      // Reset form after successful registration
      setFormData({
        username: "",
        fullname: "",
        email: "",
        password: "",
        address: "",
      });

      window.location.href = "/login";
    } catch (error) {
      console.error("Registration failed:", error);
      // Handle registration error, if any
    }
  };

  return (
    <Container>
      <div className="flex flex-col justify-center items-center h-screen">
        <Heading variant="h1" className="mb-4">
          Register
        </Heading>
        <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-sm">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="mb-3 p-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            placeholder="Fullname"
            className="mb-3 p-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="mb-3 p-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="mb-3 p-2 border border-gray-300 rounded-md"
            required
          />
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="mb-3 p-2 border border-gray-300 rounded-md"
            required
          />
          <Link href="/login" className="ml-0 mt-1 mb-3 text-blue-500">Login</Link>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-md"
          >
            Register
          </button>
        </form>
      </div>
    </Container>
  );
}
