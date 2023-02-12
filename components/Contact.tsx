import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

export default function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:nickkadam23@gmail.com?subject=${formData.subject}&body=${formData.message} - ${formData.name} - ${formData.email}`;
  };

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Let&apos;s get in touch!
        </h4>

        <div className="space-y-7 flex flex-col items-center">
          <div className="flex items-center space-x-5">
            <PhoneIcon className=" text-gray-400 h-6 w-6 hover:animate-pulse " />
            <p className="text-xl">+91*********</p>
          </div>

          <div className="flex items-center space-x-5">
            <EnvelopeIcon className=" text-gray-400 h-6 w-6 hover:animate-pulse " />
            <p className="text-xl">nickkadam23@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5">
            <MapPinIcon className=" text-gray-400 h-6 w-6 hover:animate-pulse " />
            <p className="text-xl">Prayagraj, India.</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Your name here"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Your email here"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button className="contactButton">Send</button>
        </form>
      </div>
    </div>
  );
}
