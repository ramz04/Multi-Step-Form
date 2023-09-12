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
  return <div>AddOns</div>;
}
