import React from "react";
import { FormItems } from "../../../types";

type StepProps = FormItems & {
  updateForm: (item: Partial<FormItems>) => void;
};

export default function AddOns({
  isOnlineService,
  isCustomizableProfile,
  isLargerStorage,
  updateForm,
  planLength,
}: StepProps) {
  return (
    <div className="py-2">
      <div className="w-full space-y-2 rounded-lg bg-white px-4 py-4 shadow-sm">
        <h1 className="text-2xl font-bold tracking-wide text-Marineblue">
          Pick add-ons
        </h1>
        <p className="w-[85%] tracking-wide text-Coolgray">
          Add-ons help enhance your gaming experience.
        </p>
        <div className="space-y-3 pt-1">
          <div
            className={`flex gap-3 rounded-md border border-gray-300  px-3 py-3`}
          ></div>
        </div>
      </div>
    </div>
  );
}
