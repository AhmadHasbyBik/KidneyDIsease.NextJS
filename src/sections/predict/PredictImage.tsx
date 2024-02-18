/** @format */
"use client";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

export default function Predict() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [accuracy, setAccuracy] = useState(null);

  const handleFileChange = (e: any) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      alert("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const { prediction, accuracy } = response.data;
      setPrediction(prediction);
      setAccuracy(accuracy);
    } catch (error) {
      console.error("Prediction failed:", error);
      alert("Prediction failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="absolute -left-0 bottom-20 -z-10">
        <Image
          src="/home/circle8.svg"
          alt="Circle 8"
          width={558}
          height={558}
        />
      </div>
      <div className="absolute -top-0 -z-10">
        <Image src="/home/circle9.svg" alt="spark" width={1440} height={535} />
      </div>
      <div className="relative flex flex-col justify-center items-center w-full sm:w-1/2 rounded-[50px] bg-gradient-to-br from-[#6765EF] to-[#8C8BEA] shadow-3xl mt-10 p-5">
        <div className="absolute left-5 lg:left-10 -top-5 rotate-12 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-[#4FFFC0] to-[#00B2FF] shadow-3xl" />
        <div className="absolute left-[5%] bottom-5 -rotate-12 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-[#A728E2] to-[#F4AADC] shadow-3xl" />
        <div className="absolute right-5 lg:right-10 -top-2 -rotate-12 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-[#00B2FF] to-[#F4AADC] shadow-3xl" />
        <div className="absolute right-5 lg:right-10 -bottom-5 rotate-12 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-[#FF947D] to-[#FFF59F] shadow-3xl" />

        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex flex-col justify-center items-center">
            <h2 className="mb-3 text-lg lg:text-4xl text-white font-bold text-center sm:w-[60%] z-10">
              Predict Kidney Disease
            </h2>
            <div className="my-3 bg-[#FF947D] text-white font-medium py-2 px-4 rounded-full shadow-xl z-10 transition duration-1000">
              <input type="file" onChange={handleFileChange} accept="image/*" />
            </div>
            <button
              onClick={handleSubmit}
              className="my-3 bg-blue-900 hover:bg-gradient-to-br from-[#00B2FF] to-[#F4AADC] text-white font-medium py-2 px-4 rounded-full shadow-xl z-10 transition duration-1000"
            >
              Predict
            </button>
          </div>
          {prediction && (
            <div className="flex flex-col justify-center items-center text-white">
              <div className="bg-[#F4AADC] p-3 rounded-lg">
                <h3 className="text-sm sm:text-lg font-semibold">
                  Prediction:
                </h3>
                <p>{prediction}</p>
              </div>
              <div className="bg-[#00B2FF] p-3 rounded-lg mt-3">
                <h3 className="text-sm sm:text-lg font-semibold">Accuracy:</h3>
                <p>{accuracy}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
