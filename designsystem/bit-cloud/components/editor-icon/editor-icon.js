/** @jsx jsx */
import { jsx } from "@emotion/core";

import {
  DBAnimalsIcon,
  DBCalendarIcon,
  DBCarIcon,
  DBClothesIcon,
  DBDeleteIcon,
  DBEducationIcon,
  DBEnergyIcon,
  DBFaqAnswerIcon,
  DBFaqQuestionIcon,
  DBFoodIcon,
  DBFridgeIcon,
  DBFurnitureIcon,
  DBGamesIcon,
  DBHealthIcon,
  DBJusticeIcon,
  DBLeisureIcon,
  DBMovingIcon,
  DBOnlineGamingIcon,
  DBPadlockIcon,
  DBPhoneIcon,
  DBRenovationIcon,
  DBRentIcon,
  DBTravelIcon,
  DBWarningIcon,
  DBWifiIcon,
  DBSocialShareIcon,
  DBFriendshipIcon,
  DBWebsiteInfoIcon,
  RSS,
  DualBlueHeart,
  DBFlight,
  DBBudget,
  DBStats,
  DBPublications,
  DBAIchat
} from "@konsumentverket-sverige/designsystem.utils";

const editorIconDefinitions = {
  DBAnimalsIcon,
  DBCalendarIcon,
  DBCarIcon,
  DBClothesIcon,
  DBDeleteIcon,
  DBEducationIcon,
  DBEnergyIcon,
  DBFaqAnswerIcon,
  DBFaqQuestionIcon,
  DBFoodIcon,
  DBFridgeIcon,
  DBFurnitureIcon,
  DBGamesIcon,
  DBHealthIcon,
  DBJusticeIcon,
  DBLeisureIcon,
  DBMovingIcon,
  DBOnlineGamingIcon,
  DBPadlockIcon,
  DBPhoneIcon,
  DBRenovationIcon,
  DBRentIcon,
  DBTravelIcon,
  DBWarningIcon,
  DBWifiIcon,
  DBSocialShareIcon,
  DBFriendshipIcon,
  DBWebsiteInfoIcon,
  RSS,
  DualBlueHeart,
  DBFlight,
  DBBudget,
  DBStats,
  DBPublications,
  DBAIchat
};

const EditorIcon = ({ icon, className, style, title, ...otherAttr }) => {
  const Element = editorIconDefinitions[icon];

  if (Element === undefined) {
    return null;
  }

  return (
    <Element
      title={title}
      className={className}
      style={style}
      role="img"
      aria-label={title || icon || ""}
      {...otherAttr}
    />
  );
};

export { EditorIcon, editorIconDefinitions };
