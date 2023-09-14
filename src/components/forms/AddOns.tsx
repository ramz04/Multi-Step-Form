import React from "react";
import { FormItems } from "../../../types";
import { Checkbox } from "../ui/checkbox";

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
            className={`flex gap-3 rounded-md border border-gray-300  px-3 py-3`}
          >
            <div className="flex w-full items-center gap-3">
              <div>
                <Checkbox
                  className="h-[18px] w-[18px] rounded"
                  checked={isOnlineService}
                  id="isOnlineService"
                  name="isOnlineService"
                  onCheckedChange={(newIsOnlineServices) =>
                    updateForm({
                      isOnlineService: newIsOnlineServices,
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
              <p className="ml-auto text-sm text-Purplishblue">+$1/mo</p>
            </div>
          </div>
          <div
            className={`flex gap-3 rounded-md border border-gray-300  px-3 py-3`}
          >
            <div className="flex w-full items-center gap-3">
              <div>
                <Checkbox className="h-[18px] w-[18px] rounded" />
              </div>
              <div className="">
                <h1 className="font-bold text-Marineblue">Larger storage</h1>
                <p className="text-sm text-Coolgray">Extra 1TB of cloud save</p>
              </div>
              <p className="ml-auto text-sm text-Purplishblue">+$2/mo</p>
            </div>
          </div>
          <div
            className={`flex gap-3 rounded-md border border-gray-300  px-3 py-3`}
          >
            <div className="flex w-full items-center gap-3">
              <div>
                <Checkbox className="h-[18px] w-[18px] rounded" />
              </div>
              <div className="">
                <h1 className="font-bold text-Marineblue">
                  Customizable Profile
                </h1>
                <p className="text-sm text-Coolgray">
                  Custom theme on your profile
                </p>
              </div>
              <p className="ml-auto text-sm text-Purplishblue">+$2/mo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
