import React from "react";
import Image from "next/image";
import arcade from "../../app/assets/images/icon-arcade.svg";
import advanced from "../../app/assets/images/icon-advanced.svg";
import pro from "../../app/assets/images/icon-pro.svg";
import { planOptions } from "../../../types";
import { FormItems } from "../../../types";
import { Switch } from "../ui/switch";

type StepProps = FormItems & {
  updateForm: (item: Partial<FormItems>) => void;
};

export default function Plan({ plan, planLength, updateForm }: StepProps) {
  return (
    <div className="py-2">
      <div className="w-full space-y-2 rounded-lg bg-white px-4 py-4 shadow-sm">
        <h1 className="text-2xl font-bold tracking-wide text-Marineblue">
          Select your plan
        </h1>
        <p className="w-[85%] tracking-wide text-Coolgray">
          You have the option of monthly or yearly billing.
        </p>
        <div className="space-y-3 pt-2">
          <div className="flex gap-3 rounded-md border border-Coolgray px-3 py-4">
            <div>
              <Image src={arcade} alt="Arcade" />
            </div>
            <div>
              <label htmlFor="Arcade">
                <h2 className="font-bold">Arcade</h2>
                <p className="text-sm text-Coolgray">
                  $
                  {!planLength
                    ? planOptions.Arcade.monthly
                    : planOptions.Arcade.yearly}
                  /{!planLength ? "mo" : "yr"}
                </p>
              </label>
              <input
                id="Arcade"
                name="plan"
                type="radio"
                checked={plan === "Arcade"}
                className="hidden"
                onChange={(e) => updateForm({ plan: "Arcade" })}
              />
              {planLength && (
                <p className="text-sm text-Marineblue">2 months free</p>
              )}
            </div>
          </div>
          <div className="flex gap-4 rounded-md border border-Coolgray px-3 py-4">
            <div>
              <Image src={advanced} alt="Advanced" />
            </div>
            <div>
              <label htmlFor="Advanced">
                <h2 className="font-bold">Advanced</h2>
                <p className="text-sm text-Coolgray">
                  $
                  {!planLength
                    ? planOptions.Advanced.monthly
                    : planOptions.Advanced.yearly}
                  /{!planLength ? "mo" : "yr"}
                </p>
              </label>
              <input
                id="Advanced"
                name="plan"
                type="radio"
                checked={plan === "Advanced"}
                className="hidden"
                onChange={(e) => updateForm({ plan: "Advanced" })}
              />
              {planLength && (
                <p className="text-sm text-Marineblue">2 months free</p>
              )}
            </div>
          </div>
          <div className="flex gap-4 rounded-md border border-Coolgray px-3 py-4">
            <div>
              <Image src={arcade} alt="Arcade" />
            </div>
            <div>
              <label htmlFor="Arcade">
                <h2 className="font-bold">Arcade</h2>
                <p className="text-sm text-Coolgray">
                  $
                  {!planLength
                    ? planOptions.Arcade.monthly
                    : planOptions.Arcade.yearly}
                  /{!planLength ? "mo" : "yr"}
                </p>
              </label>
              <input
                id="Arcade"
                name="plan"
                type="radio"
                checked={plan === "Arcade"}
                className="hidden"
                onChange={(e) => updateForm({ plan: "Arcade" })}
              />
              {planLength && (
                <p className="text-sm text-Marineblue">2 months free</p>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 rounded-md bg-Alabaster py-3 ">
          <span
            className={`${
              !planLength ? "text-Marineblue" : "text-Coolgray"
            } transition-transform`}
          >
            Monthly
          </span>
          <label htmlFor="switch">
            <Switch
              checked={planLength}
              onCheckedChange={(newPlanLength) =>
                updateForm({ planLength: newPlanLength })
              }
            />
          </label>
          <input
            className="hidden"
            id="switch"
            type="checkbox"
            name="planLength"
            checked={planLength}
          />
          <span
            className={`transition-transform ${
              planLength ? "text-Marineblue" : "text-Coolgray"
            }`}
          >
            Yearly
          </span>
        </div>
      </div>
    </div>
  );
}
