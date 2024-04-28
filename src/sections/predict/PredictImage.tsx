"use client";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

export default function PredictImage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [accuracy, setAccuracy] = useState(null);
  const [loading, setLoading] = useState(false);

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

      // Update formData with prediction and accuracy
      setFormData((prevData) => ({
        ...prevData,
        prediction: prediction,
        accuracy: accuracy,
      }));
    } catch (error) {
      console.error("Prediction failed:", error);
      alert("Prediction failed. Please try again.");
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    height: "",
    bloodPressure: "",
    weight: "",
    recipientEmail: "",
    prediction: "",
    accuracy: "",
    image: "",
  });

  const handleSubmitForm = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/send-email", {
        ...formData,
        recipientEmail: formData.recipientEmail,
      });
      console.log("Email sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending email:", error);
    }

    setLoading(false);
  };

  return (
    <div className="-mt-40">
      <div className="flex justify-center items-center h-screen">
        <div className="absolute left-0 -bottom-80 -z-20">
          <Image src="/home/spark1.svg" alt="spark" width={700} height={700} />
        </div>
        <div className="absolute -top-40 -z-10 w-full">
          <Image
            src="/home/circle9.svg"
            alt="spark"
            layout="responsive"
            width={1440}
            height={535}
          />
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
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="my-3 bg-blue-900 hover:bg-gradient-to-br from-[#00B2FF] to-[#F4AADC] text-white font-medium py-2 px-4 rounded-full shadow-xl z-10 transition duration-1000"
              >
                Predict
              </button>
            </div>
            {selectedFile && (
              <div className="mt-3">
                <h3 className="text-sm sm:text-lg font-semibold">
                  Selected Image:
                </h3>
                <Image
                  src={URL.createObjectURL(selectedFile)}
                  alt="Selected"
                  width={300}
                  height={300}
                  className="mt-2 rounded-lg shadow-xl"
                />
              </div>
            )}

            {prediction && (
              <div className="flex flex-col justify-center items-center text-white mt-3">
                {" "}
                {/* Added margin top here */}
                <div className="bg-[#F4AADC] p-3 rounded-lg text-center">
                  <h3 className="text-sm sm:text-lg font-semibold">
                    Prediction :
                  </h3>
                  <p>{prediction}</p>
                </div>
                <div className="bg-[#00B2FF] p-3 rounded-lg mt-3 text-center">
                  <h3 className="text-sm sm:text-lg font-semibold">
                    Accuracy :
                  </h3>
                  <p>{accuracy}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        
        <form onSubmit={handleSubmitForm}>
          <div className="flex flex-col w-96 mx-auto items-center rounded-2xl bg-white shadow-md border border-gray-200 p-5 relative">
          <div className="mt-2 mb-3">Kirim Data Anda lewat Email</div>
            <div className="absolute inset-x-0 top-0 h-5 rounded-t-2xl bg-gradient-to-br from-[#00B2FF] to-[#F4AADC]" />
            <div className="flex flex-col space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 font-semibold text-md"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="recipientEmail"
                  value={formData.recipientEmail}
                  onChange={handleChange}
                  placeholder="Alamat Email Penerima"
                  required
                  className="w-full min-w-[300px] p-2 pl-4 border rounded-3xl border-gray-300 text-sm"
                />
                <div className="text-xs text-gray-300 mt-1">
                  *Email yang anda pakai
                </div>
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 font-semibold text-md"
                >
                  Nama <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nama"
                  required
                  className="w-full p-2 pl-4 border rounded-3xl border-gray-300 text-sm"
                />
                <div className="text-xs text-gray-300 mt-1">
                  *Nama lengkap sesuai identitas resmi
                </div>
              </div>
              <div>
                <label
                  htmlFor="age"
                  className="block mb-1 font-semibold text-md"
                >
                  Umur <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Umur (Tahun)"
                  required
                  className="w-full p-2 pl-4 border rounded-3xl border-gray-300 text-sm"
                />
                <div className="text-xs text-gray-300 mt-1">
                  *Umur anda sekarang (Tahun)
                </div>
              </div>
              <div>
                <label
                  htmlFor="height"
                  className="block mb-1 font-semibold text-md"
                >
                  Tinggi Badan <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  placeholder="Tinggi Badan (Cm)"
                  required
                  className="w-full p-2 pl-4 border rounded-3xl border-gray-300 text-sm"
                />
                <div className="text-xs text-gray-300 mt-1">
                  *Tinggi badan anda (Cm)
                </div>
              </div>
              <div>
                <label
                  htmlFor="bloodPressure"
                  className="block mb-1 font-semibold text-md"
                >
                  Tekanan Darah <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="bloodPressure"
                  value={formData.bloodPressure}
                  onChange={handleChange}
                  placeholder="Tekanan Darah (mmHg)"
                  required
                  className="w-full p-2 pl-4 border rounded-3xl border-gray-300 text-sm"
                />
                <div className="text-xs text-gray-300 mt-1">
                  *Tekanan darah anda (mmHg)
                </div>
              </div>
              <div>
                <label
                  htmlFor="weight"
                  className="block mb-1 font-semibold text-md"
                >
                  Berat Badan <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  placeholder="Berat Badan (Kg)"
                  required
                  className="w-full p-2 pl-4 border rounded-3xl border-gray-300 text-sm"
                />
                <div className="text-xs text-gray-300 mt-1">
                  *Berat badan anda (Kg)
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-br bg-blue-900 text-white font-medium py-2 px-4 rounded-full shadow-xl z-10 transition duration-1000 hover:from-[#00B2FF] hover:to-[#F4AADC] mt-4"
              disabled={loading}
            >
              {loading ? "Proses.." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
