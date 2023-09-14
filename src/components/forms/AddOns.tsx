import React from "react";
import { FormItems } from "../../../types";
import { Checkbox } from "../ui/checkbox";
import { planOptions } from "../../../types";

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
      <div className="w-full space-y-2 rounded-lg bg-white px-4 py-6 shadow-sm">
        <h1 className="text-2xl font-bold tracking-wide text-Marineblue">
          Pick add-ons
        </h1>
        <p className="w-[85%] tracking-wide text-Coolgray">
          Add-ons help enhance your gaming experience.
        </p>
        <div className="space-y-3 pt-1">
          <div
            className={`flex gap-3 rounded-md border  px-3 py-3 ${
              isOnlineService === true
                ? "border-Marineblue bg-Alabaster"
                : "border-gray-300"
            }`}
          >
            <div className="flex w-full items-center gap-3">
              <div>
                <Checkbox
                  className="h-[18px] w-[18px] rounded"
                  checked={isOnlineService === true}
                  id="isOnlineService"
                  name="isOnlineService"
                  onCheckedChange={(e) =>
                    updateForm({
                      isOnlineService: e === true,
                    })
                  }
                />
              </div>
              <div className="">
                <h1 className="font-bold text-Marineblue">Online service</h1>
                <p className="text-sm text-Coolgray">
                  Access to multiplayer games
                </p>
              </div>
              <p className="ml-auto text-sm text-Purplishblue">
                +$
                {!planLength
                  ? planOptions.onlineServices.monthly
                  : planOptions.onlineServices.yearly}
                /{!planLength ? "mo" : "yrs"}
              </p>
            </div>
          </div>
          <div
            className={`flex gap-3 rounded-md border  px-3 py-3 ${
              isLargerStorage === true
                ? "border-Marineblue bg-Alabaster"
                : "border-gray-300"
            }`}
          >
            <div className="flex w-full items-center gap-3">
              <div>
                <Checkbox
                  className="h-[18px] w-[18px] rounded"
                  checked={isLargerStorage === true}
                  onCheckedChange={(e) =>
                    updateForm({
                      isLargerStorage: e === true,
                    })
                  }
                />
              </div>
              <div className="">
                <h1 className="font-bold text-Marineblue">Larger storage</h1>
                <p className="text-sm text-Coolgray">Extra 1TB of cloud save</p>
              </div>
              <p className="ml-auto text-sm text-Purplishblue">
                +$
                {!planLength
                  ? planOptions.largerStorage.monthly
                  : planOptions.largerStorage.yearly}
                /{!planLength ? "mo" : "yrs"}
              </p>
            </div>
          </div>
          <div
            className={`flex gap-3 rounded-md border  px-3 py-3 ${
              isCustomizableProfile === true
                ? "border-Marineblue bg-Alabaster"
                : "border-gray-300"
            }`}
          >
            <div className="flex w-full items-center gap-3">
              <div>
                <Checkbox
                  className="h-[18px] w-[18px] rounded"
                  checked={isCustomizableProfile === true}
                  onCheckedChange={(e) =>
                    updateForm({
                      isCustomizableProfile: e === true,
                    })
                  }
                />
              </div>
              <div className="">
                <h1 className="font-bold text-Marineblue">
                  Customizable Profile
                </h1>
                <p className="text-sm text-Coolgray">
                  Custom theme on your profile
                </p>
              </div>
              <p className="ml-auto text-sm text-Purplishblue">
                +$
                {!planLength
                  ? planOptions.customizableProfile.monthly
                  : planOptions.customizableProfile.yearly}
                /{!planLength ? "mo" : "yrs"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
