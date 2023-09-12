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
  return <div>FinishingUp</div>;
}
