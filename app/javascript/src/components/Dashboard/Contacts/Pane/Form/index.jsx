import React from "react";

import { Formik, Form as FormikForm } from "formik";
import { Check } from "neetoicons";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";
import { useTranslation } from "react-i18next";

import { INITIAL_VALUES, ROLES, VALIDATION_SCHEMA } from "./constants";

const Form = ({ onClose }) => {
  const { t } = useTranslation();

  const handleSubmit = async () => {
    try {
      Toastr.success(t("common.toaster.success.create", { entity: "Contact" }));
      onClose();
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm noValidate className="w-full">
          <Pane.Body className="w-full space-y-6">
            <div className="flex w-full space-x-6">
              <Input
                required
                label={t("contacts.form.fields.firstName.label")}
                name="firstName"
                placeholder={t("contacts.form.fields.firstName.placeholder")}
              />
              <Input
                required
                label={t("contacts.form.fields.lastName.label")}
                name="lastName"
                placeholder={t("contacts.form.fields.lastName.placeholder")}
              />
            </div>
            <Input
              required
              className="w-full flex-grow-0"
              label={t("contacts.form.fields.email.label")}
              name="email"
              placeholder={t("contacts.form.fields.email.placeholder")}
            />
            <Select
              required
              className="w-full"
              label={t("contacts.form.fields.role.label")}
              name="role"
              options={ROLES}
              placeholder={t("contacts.form.fields.role.placeholder")}
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              icon={Check}
              label={t("common.form.submit")}
              loading={isSubmitting}
              style="primary"
              type="submit"
            />
            <Button
              label={t("common.form.cancel")}
              size="large"
              style="text"
              type="reset"
              onClick={onClose}
            />
          </Pane.Footer>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
