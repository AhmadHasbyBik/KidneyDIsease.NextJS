"use client";
import { useState } from "react";
import axios from "axios";
import Container from "@/components/Container";
import Heading from "@/components/typography/Heading";
import Paragraph from "@/components/typography/Paragraph";
import Link from "next/link";

export default function Login() {
    const [formData, setFormData] = useState({
      username: "",
      password: "",
    });
    const [error, setError] = useState("");
  
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
          "http://127.0.0.1:5000/login",
          formData
        );
        console.log(response.data); // Assuming the API returns some data upon successful login
        // Reset form after successful login
        setFormData({
          username: "",
          password: "",
        });
  
        window.location.href = '/predict';
      } catch (error) {
        console.error("Login failed:", error);
        setError("Login failed. Please check your credentials.");
      }
    };
  
    return (
      <Container>
        <div className="flex flex-col justify-center items-center h-screen">
          <Heading variant="h1" className="mb-4">
            Login
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
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="mb-3 p-2 border border-gray-300 rounded-md"
              required
            />
            <Link href="/register" className="ml-0 mt-1 mb-3 text-blue-500">Click here to register</Link>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 rounded-md"
            >
              Login
            </button>
            {error && <Paragraph className="text-red-500">{error}</Paragraph>}
          </form>
        </div>
      </Container>
    );
  }
