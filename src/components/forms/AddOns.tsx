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
      <div className="w-full space-y-2 rounded-lg bg-white px-4 py-4 shadow-sm"></div>
    </div>
  );
}
