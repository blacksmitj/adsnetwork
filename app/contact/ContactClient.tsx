"use client";

import { useState } from "react";
import Breadcumbs from "../components/Breadcumbs";
import Heading from "../components/Heading";
import Maps from "../components/home/Maps";
import Input from "../components/inputs/Input";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Textarea from "../components/inputs/Textarea";
import Button from "../components/Button";
import { BsTelephone, BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import axios from "axios";
import { useRouter } from "next/navigation";
import Select from "../components/inputs/Select";

const ContactClient = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      subject: "",
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/contact", data)
      .then(() => {
        router.refresh();
        reset();
      })
      .catch((error) => {})
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Breadcumbs levelOne="Kontak" />
      <div className="flex flex-col lg:gap-20 md:gap-16 gap-12 mt-16 mb-24 max-w-[1200px] mx-auto w-full">
        <div className="md:px-8 lg:px-16 px-4 lg:w-2/3 w-4/5">
          <Heading title="Hubungi Kami" />
        </div>
        <div className="md:px-8 lg:px-16 px-4">
          <div className="flex md:flex-row flex-col gap-8 w-full">
            <div
              className="flex-none flex flex-col gap-4 md:w-2/4 lg:w-2/3
            "
            >
              <div className="flex md:flex-row flex-col gap-4 w-full">
                <div className="flex-auto">
                  <Input
                    id="name"
                    label="Nama"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                    placeholder="Reynald Sebastian"
                  />
                </div>
                <div className="flex-auto">
                  <Input
                    id="phone"
                    label="Telepon"
                    type="number"
                    required
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    placeholder="082412341234"
                  />
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-4 w-full">
                <div className="flex-auto">
                  <Input
                    id="email"
                    label="Email"
                    type="email"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                    placeholder="reynald@gmail.com"
                  />
                </div>
                <div className="flex-auto">
                  <Select
                    id="subject"
                    label="Subject"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                    placeholder="Pilih Subject"
                  />
                </div>
              </div>
              <div className="w-full">
                <Textarea
                  id="message"
                  label="Pesan"
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  required
                  placeholder="Pesan yang ingin anda sampaikan"
                />
              </div>
              <Button onClick={handleSubmit(onSubmit)} label="Kirim Pesan" />
            </div>
            <div className="flex-auto flex flex-col text-neutral-600 gap-3">
              <h1 className="font-semibold text-lg mb-4">
                Atau anda dapat menghubungi kami yang tertera di bawah
              </h1>
              <p className="items-start flex gap-4">
                <BsTelephone className="text-oren flex-none mt-1" size={18} />
                0265-266-7186
              </p>
              <p className="items-start flex gap-4">
                <BsWhatsapp size={18} className="text-oren flex-none mt-1" />
                0812-2022-1289
              </p>
              <p className="items-start flex gap-4">
                <AiOutlineMail size={18} className="text-oren flex-none mt-1" />
                Info@adsnetwork.co.id
              </p>
            </div>
          </div>
        </div>
        <Maps />
      </div>
    </>
  );
};

export default ContactClient;
