import React from "react";

import { Typography, Avatar } from "neetoui";
import { useTranslation } from "react-i18next";

import { AVATAR_IMAGE_URL } from "components/constants";

const Profile = ({ name }) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center space-x-3">
      <Avatar
        user={{
          name,
          imageUrl: name === "Jacob Jones" ? AVATAR_IMAGE_URL : "",
        }}
      />
      <span>
        <Typography style="h5">{name}</Typography>
        <Typography className="neeto-ui-text-gray-600" style="body3">
          {t("entity.owner")}
        </Typography>
      </span>
    </div>
  );
};

export default Profile;
