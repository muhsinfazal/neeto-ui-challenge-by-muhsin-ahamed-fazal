import { t } from "i18next";
import * as yup from "yup";

export const INITIAL_VALUES = {
  title: "",
  description: "",
  assignedContact: null,
  tags: [],
};

export const VALIDATION_SCHEMA = yup.object().shape({
  title: yup
    .string()
    .trim()
    .required(
      t("common.form.errors.required", {
        field: t("notes.form.fields.title.label"),
      })
    ),
  description: yup
    .string()
    .trim()
    .required(
      t("common.form.errors.required", {
        field: t("notes.form.fields.description.label"),
      })
    ),
  assignedContact: yup
    .object({ label: yup.string(), value: yup.string() })
    .required(
      t("common.form.errors.required", {
        field: t("notes.form.fields.assignedContact.label"),
      })
    )
    .nullable(),
  tags: yup
    .array()
    .of(yup.object({ label: yup.string(), value: yup.string() }))
    .min(
      1,
      t("common.form.errors.required", {
        field: t("notes.form.fields.tags.label"),
      })
    ),
});

export const TAGS = [
  { label: "Getting Started", value: "Getting Started" },
  { label: "Onboarding", value: "Onboarding" },
  { label: "User Flow", value: "User Flow" },
  { label: "UX", value: "UX" },
  { label: "Bugs", value: "Bugs" },
  { label: "V2", value: "V2" },
];
