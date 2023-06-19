import { t } from "i18next";
import * as yup from "yup";

export const INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: null,
};

export const VALIDATION_SCHEMA = yup.object({
  firstName: yup
    .string()
    .trim()
    .required(t("common.form.errors.required", { field: "First Name" })),
  lastName: yup
    .string()
    .trim()
    .required(t("common.form.errors.required", { field: "Last Name" })),
  email: yup
    .string()
    .email(t("common.form.errors.invalidEmail"))
    .required(t("common.form.errors.required", { field: "Email" })),
  role: yup
    .object()
    .required(t("common.form.errors.required", { field: "Role" }))
    .nullable(),
});

export const ROLES = [{ label: "Owner", value: "owner" }];
