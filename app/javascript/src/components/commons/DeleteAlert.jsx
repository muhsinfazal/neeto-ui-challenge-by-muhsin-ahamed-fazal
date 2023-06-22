import React, { useState } from "react";

import { Alert, Toastr } from "neetoui";
import { useTranslation } from "react-i18next";

const DeleteAlert = ({ isOpen, entity, onClose }) => {
  const { t } = useTranslation();

  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      Toastr.success(t("common.alert.delete.successMessage", { entity }));
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
      size="large"
      title={t("common.alert.delete.title", { entity })}
      message={t("common.alert.delete.message", {
        entity: entity.toLowerCase(),
      })}
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
