"use client";

import Image from "next/image";
import bg_sidebar_mobile from "./assets/images/bg-sidebar-mobile.svg";
import bg_sidebar_desktop from "./assets/images/bg-sidebar-desktop.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { resolve } from "path";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const personalInfoSchema = z.object({
  name: z.string().length(100),
  email: z.string().email(),
  phone: z.number().gt(5, "Phone Number must be 10 numbers"),
});

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm({
    resolver: zodResolver(personalInfoSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };

  return (
    <main className=" relative flex h-screen w-full flex-col bg-Magnolia">
      <div className="">
        <Image
          src={bg_sidebar_mobile}
          alt="Sidebar"
          className="h-full w-full md:hidden"
        />
        <div></div>
      </div>
      <div className="-mt-24 flex justify-center px-3 py-6">
        <div className="w-full space-y-2 rounded-lg bg-white px-4 py-6 shadow-sm">
          <h1 className="text-xl font-bold tracking-wide text-Marineblue">
            Personal Info
          </h1>
          <p className="w-[80%] tracking-wide text-Coolgray">
            Please provide your name, email address, and phone number.
          </p>
          <div>
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="name" className="text-sm text-Marineblue">
                    Name
                  </label>
                  {errors.name && (
                    <p className="text-sm text-red-500"> Name is required</p>
                  )}
                </div>
                <Input
                  {...register("name")}
                  id="name"
                  name="name"
                  type="text"
                  placeholder="e.g. Stephen King"
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="email" className="text-sm text-Marineblue">
                    Email Address
                  </label>
                  {errors.email && (
                    <p className="text-sm text-red-500"> Email is required</p>
                  )}
                </div>
                <Input
                  {...register("email")}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="e.g. stephenking@lorem.com"
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="phone" className="text-sm text-Marineblue">
                    Phone Number
                  </label>
                  {errors.phone && (
                    <p className="text-sm text-red-500">
                      Phone Number is required
                    </p>
                  )}
                </div>
                <Input
                  {...register("phone")}
                  id="phone"
                  name="phone"
                  type="number"
                  placeholder="e.g. +1 234 567 890"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto flex items-end justify-end p-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-Marineblue text-Magnolia"
        >
          Confirm
        </Button>
      </div>
    </main>
  );
}
