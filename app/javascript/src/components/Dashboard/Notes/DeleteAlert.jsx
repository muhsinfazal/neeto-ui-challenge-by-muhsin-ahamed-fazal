import React, { useState } from "react";

import { Alert, Toastr } from "neetoui";
import { useTranslation } from "react-i18next";

const DeleteAlert = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      Toastr.success(t("notes.alert.delete.successMessage"));
    } catch (error) {
      logger.error(error);
    } finally {
      setDeleting(false);
      onClose();
    }
  };

  return (
    <Alert
      isOpen={isOpen}
      isSubmitting={deleting}
      message={t("notes.alert.delete.message")}
      size="large"
      title={t("notes.alert.delete.title")}
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
