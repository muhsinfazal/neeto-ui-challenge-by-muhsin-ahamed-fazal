import { t } from "i18next";
import * as yup from "yup";

export const INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assignedContact: "",
  tags: [],
};

export const VALIDATION_SCHEMA = yup.object().shape({
  title: yup
    .string()
    .trim()
    .required(t("notes.form.errors.required", { field: "Title" })),
  description: yup
    .string()
    .trim()
    .required(t("notes.form.errors.required", { field: "Description" })),
  assignedContact: yup
    .object()
    .required(t("notes.form.errors.required", { field: "Assigned Contact" })),
  tags: yup
    .array()
    .of(yup.object())
    .min(1, t("notes.form.errors.required", { field: "Tag" })),
});

export const TAGS = [
  { label: "Getting Started", value: "Getting Started" },
  { label: "Onboarding", value: "Onboarding" },
  { label: "User Flow", value: "User Flow" },
  { label: "UX", value: "UX" },
  { label: "Bugs", value: "Bugs" },
  { label: "V2", value: "V2" },
];
