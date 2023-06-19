import React from "react";

import { Clock, MenuVertical } from "neetoicons";
import { Typography, Tag, Avatar, Tooltip, Dropdown } from "neetoui";
import { useTranslation } from "react-i18next";

import { TAGS } from "./Pane/Form/constants";
import { formatCreationDate } from "./utils";

const Card = ({
  title,
  description,
  tag = TAGS[0].label,
  created_at: createdAt,
  setShowDeleteAlert,
}) => {
  const { t } = useTranslation();

  const { fullDate, relativeDate } = formatCreationDate(createdAt);

  return (
    <div className="neeto-ui-shadow-s space-y-3 divide-y border p-4">
      <div>
        <div className="flex items-center justify-between">
          <Typography style="h4">{title}</Typography>
          <Dropdown
            buttonStyle="text"
            icon={MenuVertical}
            position="bottom-end"
          >
            <li>{t("common.actionDropdown.edit")}</li>
            <li onClick={() => setShowDeleteAlert(true)}>
              {t("common.actionDropdown.delete")}
            </li>
          </Dropdown>
        </div>
        <Typography className="neeto-ui-text-gray-600" style="body2">
          {description}
        </Typography>
      </div>
      <div className="flex justify-between pt-4">
        <Tag label={tag} style="secondary" />
        <div className="flex items-center space-x-1">
          <Clock size={12} />
          <Tooltip content={fullDate} position="bottom-start">
            <Typography className="neeto-ui-text-gray-600" style="body3">
              {t("notes.card.createdAt", { relativeDate })}
            </Typography>
          </Tooltip>
          <Avatar
            size="small"
            user={{ imageUrl: "https://i.pravatar.cc/300" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
