import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { SiGmail, SiWhatsapp } from "react-icons/si";
import { useForm } from "react-hook-form";
const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="ml-10 md:mr-10  mt-10 mr-10">
      <div className="text-left">
        <h1 className="text-3xl font-semibold"> <span className="text-red-500 text-5xl font-serif ">C</span>ontact</h1>
        <h1 className="border-2 w-16 border-emerald-600"></h1>
        <p className="mt-4">
        <span className="text-red-500 text-3xl font-serif ">I</span> enjoy solving complex problems and delivering high-quality software. I am always eager to learn and stay up-to-date with the latest web development technologies.

        </p>
        <p className="font-semibold font-serif">Feel free to contacts with me , Enjoy your day </p>
      </div>

      <div className="py-10 lg:flex gap-5 grid ">
        <div className="lg:w-1/2 p-10 w-full  shadow-xl ">
          <div className="mt-4 flex items-center gap-5  hover:text-emerald-500">
            <Link className="">
              <FaLocationDot className="w-10 h-10 "></FaLocationDot>
            </Link>
            <div className="text-left">
              <h1>Location </h1>

              <p> Sreepur, Magura-7611</p>
            </div>
          </div>
          <div className=" mt-4 flex gap-5 items-center   hover:text-emerald-500">
            <Link>
              <SiGmail className="w-10 h-10"></SiGmail>
            </Link>
            <div className="text-left">
              <h1>Email </h1>

              <p> akashboswas2@gmail.com</p>
            </div>
          </div>
          <div className="mt-4 flex gap-5 items-center  hover:text-emerald-500">
            <Link>
              <SiWhatsapp className="w-10 h-10 "></SiWhatsapp>
            </Link>
            <div className="text-left">
              <h1>Call </h1>

              <p> +8801734174468</p>
            </div>
          </div>
        </div>

        <div className="">
          <form className="p-5 shadow-xl" onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <div className="md:flex gap-4 justify-center ">
            <div className="md:w-1/2 mb-2">
              <input
                placeholder="enter your name "
                className="input input-bordered input-info w-full"
                defaultValue=""
                {...register("name", { required: "name is required" })}
              />
              <p className="text-red-600">{errors?.name?.message}</p>
            </div>
            <div className="md:w-1/2">
              <input
                placeholder="enter your email "
                className="input input-bordered input-info w-full "
                defaultValue=""
                {...register("email", { required: "email is required" })}
              />
              <p className="text-red-600">{errors?.email?.message}</p>
            </div>
            </div>
           
           
            <div  className="mt-2">
              <input
                placeholder="Subject "
                className="input input-bordered input-info w-full"
                defaultValue=""
                {...register("subject", { required: "subject is required" })}
              />
              <p className="text-red-600">{errors?.subject?.message}</p>
            </div>
            <div  className="mt-2">
              <input
                placeholder="enter your message "
                className="input input-bordered input-info w-full h-[200px]"
                defaultValue=""
                {...register("message", { required: "message is required" })}
              />
              <p className="text-red-600">{errors?.message?.message}</p>
            </div>
            <div className="flex justify-center">
            <input className="btn mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" type="submit" />

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
