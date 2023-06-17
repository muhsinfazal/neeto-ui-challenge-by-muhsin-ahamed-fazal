import React from "react";

import { Formik, Form as FormikForm } from "formik";
import { Button, Pane } from "neetoui";
import { Input, Textarea, Select } from "neetoui/formik";
import { useTranslation } from "react-i18next";

import notesApi from "apis/notes";

import { TAGS, VALIDATION_SCHEMA } from "./constants";

const Form = ({ onClose, refetch, note, isEdit }) => {
  const { t } = useTranslation();

  const handleSubmit = async values => {
    try {
      if (isEdit) {
        await notesApi.update(note.id, values);
      } else {
        await notesApi.create(values);
      }
      refetch();
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={note}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              required
              className="w-full flex-grow-0"
              label={t("notes.form.fields.title.label")}
              name="title"
              placeholder={t("notes.form.fields.title.placeholder")}
            />
            <Textarea
              required
              className="w-full flex-grow-0"
              label={t("notes.form.fields.description.label")}
              name="description"
              placeholder={t("notes.form.fields.description.placeholder")}
              rows={1}
            />
            <Select
              required
              className="w-full flex-grow-0"
              label={t("notes.form.fields.assignedContact.label")}
              name="assignedContact"
              options={TAGS}
              placeholder={t("notes.form.fields.assignedContact.placeholder")}
            />
            <Select
              isMulti
              required
              className="w-full flex-grow-0"
              label={t("notes.form.fields.tags.label")}
              name="tags"
              options={TAGS}
              placeholder={t("notes.form.fields.tags.placeholder")}
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              label={t("notes.form.submit")}
              loading={isSubmitting}
              style="primary"
              type="submit"
            />
            <Button
              label={t("notes.form.cancel")}
              style="text"
              onClick={onClose}
            />
          </Pane.Footer>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
