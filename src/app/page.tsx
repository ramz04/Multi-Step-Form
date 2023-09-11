"use client";

import Image from "next/image";
import bg_sidebar_mobile from "./assets/images/bg-sidebar-mobile.svg";
import bg_sidebar_desktop from "./assets/images/bg-sidebar-desktop.svg";
import { Button } from "@/components/ui/button";
import PersonalInfo from "@/components/forms/PersonalInfo";
import { FormItems, planOptions, sideBar } from "../../types";
import { FormEvent, useState } from "react";
import useMultiForm from "./hooks/useMultiForm";
import Plan from "@/components/forms/Plan";
import AddOns from "@/components/forms/AddOns";
import FinishingUp from "@/components/forms/FinishingUp";

const initialValues: FormItems = {
  name: "",
  email: "",
  phone: "",
  plan: "Arcade",
  planLength: false,
  isLargerStorage: false,
  isCustomizableProfile: false,
  isOnlineService: false,
};

export default function Home() {
  const [formData, setFormData] = useState(initialValues);

  const updateForm = (fieldToUpdate: Partial<FormItems>) =>
    setFormData((prev) => ({ ...formData, ...fieldToUpdate }));

  const {
    currentIndex,
    goBackwards,
    goForwards,
    isFirstStep,
    isLastStep,
    goToSection,
  } = useMultiForm(sideBar.length);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isLastStep) return alert("congrats something");
    goForwards();
  };

  return (
    <main className=" relative flex h-screen w-full flex-col bg-Magnolia">
      <div className="">
        <Image
          src={bg_sidebar_mobile}
          alt="Sidebar"
          className="h-full w-full md:hidden"
        />
        <div className="absolute top-10 flex w-full items-center justify-center gap-4">
          {sideBar.map((item, index) => (
            <div key={index}>
              <div
                className={`flex items-center rounded-full border border-white text-lg  ${
                  index === currentIndex
                    ? "bg-Lightblue text-Marineblue"
                    : "text-white"
                }`}
              >
                <div className="flex h-9 w-9 items-center justify-center">
                  {index + 1}
                </div>
              </div>
              <div className="hidden">
                <p>Step {index + 1}</p>
                <p>{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <form className="flex h-full flex-col " onSubmit={handleSubmit}>
        <div className="-mt-28 flex justify-center px-3 py-6">
          {currentIndex === 0 && <PersonalInfo />}
          {currentIndex === 1 && <Plan />}
          {currentIndex === 2 && <AddOns />}
          {currentIndex === 3 && <FinishingUp />}
        </div>
        <div className="mt-auto flex justify-between">
          <div className=" flex items-end justify-start p-4">
            {!isFirstStep && (
              <Button
                onClick={goBackwards}
                type="button"
                variant="outline"
                className=""
              >
                Go Back
              </Button>
            )}
          </div>
          <div className=" flex items-end justify-end p-4">
            <Button type="submit" className="bg-Marineblue text-Magnolia">
              {isLastStep ? "Confirm" : "Next Step"}
            </Button>
          </div>
        </div>
      </form>
    </main>
  );
}
