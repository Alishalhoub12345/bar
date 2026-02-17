import React, { useState } from 'react';
import emailjs from "@emailjs/browser";

const GetInTouchForm = () => {

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        title: "",
        company: "",
        country: "",
        message: "",
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                title: formData.title,
                company: formData.company,
                country: formData.country,
                message: formData.message,
            },
            PUBLIC_KEY
        )
            .then(() => {
                alert("Message sent successfully ✅");
            })
            .catch((err) => {
                console.error("EMAILJS ERROR", err);
                alert("Failed to send message ❌");
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="md:flex md:flex-row mx-auto pt-3 text-left">
                <div className="md:w-1/2 md:mr-5">
                    <div id="h3">
                        <label htmlFor="name" className="text-white block" >Full Name</label>
                        <input type="name" id="name" placeholder="John Doe" className=" border-b-gray-300 border-b pb-0.5 text-white w-full placeholder:text-gray-300 bg-transparent focus:outline-none" value={formData.name} onChange={handleChange}></input>
                    </div>
                    <div id="h3">
                        <label htmlFor="phone" className="text-white block mt-0.5">Telephone Number</label>
                        <input id="phone" type="tel" placeholder="+961 70 123 456" className=" border-b-gray-300 border-b pb-0.5 text-white w-full placeholder:text-gray-300 bg-transparent focus:outline-none" value={formData.phone} onChange={handleChange}></input>
                    </div>
                    <div id="h3">
                        <label htmlFor="title" className="text-white block mt-0.5">Title</label>
                        <input type="title" id="title" placeholder="Project / Role title" className=" border-b-gray-300 border-b pb-0.5 text-white w-full placeholder:text-gray-300 bg-transparent focus:outline-none" value={formData.title} onChange={handleChange}></input>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <div id="h3">
                        <label htmlFor="email" className="text-white block">Email</label>
                        <input type="email" id="email" placeholder="you@example.com" className=" border-b-gray-300 border-b pb-0.5 text-white w-full placeholder:text-gray-300 bg-transparent focus:outline-none" value={formData.email} onChange={handleChange}></input>
                    </div>
                    <div id="h3">
                        <label htmlFor="company" className="text-white block mt-0.5">Company</label>
                        <input type="company" id="company" placeholder="Company name" className=" border-b-gray-300 border-b pb-0.5 text-white w-full placeholder:text-gray-300 bg-transparent focus:outline-none" value={formData.company} onChange={handleChange}></input>
                    </div>
                    <div id="h3">
                        <label htmlFor="country" className="text-white block mt-0.5">Country of Interest</label>
                        <input type="country" id="country" placeholder="Lebanon" className=" border-b-gray-300 border-b pb-0.5 text-white w-full placeholder:text-gray-300 bg-transparent focus:outline-none" value={formData.country} onChange={handleChange}></input>
                    </div>
                </div>
            </div>
            <div id="h3" className="text-left">
                <label htmlFor="message" className="text-white block mt-0.5">Message</label>
                <input type="message" id="message" placeholder="Tell us a bit about your project and inquiry..." className=" border-b-gray-300 border-b pb-10 text-white w-full placeholder:text-gray-300 bg-transparent focus:outline-none" value={formData.message} onChange={handleChange}></input>
            </div>
            <div className=" mt-5 pb-12 w-full">
                <button id="h3" className="bg-transparent active:bg-black hover:bg-black border-white border text-white font-bold justify-center mx-auto md:h-12 flex sm:1/2 md:w-1/6" type="submit">Submit</button>
            </div>
        </form>
    )
};

export default GetInTouchForm;