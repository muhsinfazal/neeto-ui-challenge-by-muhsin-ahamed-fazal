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
    .required(
      t("common.form.errors.required", {
        field: t("contacts.form.fields.firstName.label"),
      })
    ),
  lastName: yup
    .string()
    .trim()
    .required(
      t("common.form.errors.required", {
        field: t("contacts.form.fields.lastName.label"),
      })
    ),
  email: yup
    .string()
    .email(t("common.form.errors.invalidEmail"))
    .required(
      t("common.form.errors.required", {
        field: t("contacts.form.fields.email.label"),
      })
    ),
  role: yup
    .object({
      label: yup.string(),
      value: yup.string(),
    })
    .required(
      t("common.form.errors.required", {
        field: t("contacts.form.fields.role.label"),
      })
    )
    .nullable(),
});

export const ROLES = [{ label: "Owner", value: "owner" }];
