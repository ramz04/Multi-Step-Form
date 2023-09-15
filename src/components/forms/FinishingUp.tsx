import React from "react";
import { FormItems } from "../../../types";

type StepProps = FormItems & {
  updateForm: (item: Partial<FormItems>) => void;
};

export default function FinishingUp({
  planLength,
  plan,
  updateForm,
  isCustomizableProfile,
  isLargerStorage,
  isOnlineService,
}: StepProps) {
  return (
    <div className="py-2">
      <div className="w-full space-y-2 rounded-lg bg-white px-4 py-4 shadow-sm">
        <h1 className="text-2xl font-bold tracking-wide text-Marineblue">
          Finishing up
        </h1>
        <p className="w-[85%] tracking-wide text-Coolgray">
          Double-check everything looks OK before confirming.
        </p>
        <div className="space-y-3 divide-y divide-gray-200 rounded-lg bg-Alabaster px-3 py-3 ">
          <div className="flex w-full items-center justify-between">
            <div>
              <h2 className="font-bold text-Marineblue">Arcade (monthly)</h2>
              <div className="text-sm text-Coolgray underline">Change</div>
            </div>
            <p className="font-bold text-Marineblue">$9/mo</p>
          </div>
          <div className="space-y-1 py-2 text-Coolgray">
            <div className="flex w-full items-center justify-between">
              <p>Online Service</p>
              <p className=" text-Marineblue ">$1/mo</p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p>Larger Storage</p>
              <p className=" text-Marineblue ">$2/mo</p>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-between px-3 text-Coolgray">
          <p>Total (per month)</p>
          <p className="font-bold text-Purplishblue">$12/mo</p>
        </div>
      </div>
    </div>
  );
}
