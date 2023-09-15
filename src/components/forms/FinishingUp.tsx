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
        <div className="flex items-center justify-start gap-2 rounded-md bg-Alabaster px-2 py-3 ">
          <div className="flex w-full items-center justify-between">
            <div>
              <h2 className="font-bold text-Marineblue">Arcade (monthly)</h2>
              <div className="text-sm text-Coolgray underline">Change</div>
            </div>
            <p className="font-bold text-Marineblue">$9/mo</p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
