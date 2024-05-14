/** @jsx jsx */
import { jsx } from "@emotion/core";

import {
  Adapt,
  ChevronRight,
  Close,
  Easytoread,
  Search,
  Signlanguage,
  Volume,
  Otherlang,
  Ecc,
  Arrow,
  Burger,
  External,
  Exclamationmark,
  Check,
  Oval,
  LinkArrow,
  ArrowFat,
  Filter,
  List,
  Picturelist,
  Clear,
  Camera,
  Play,
  FileExcel,
  FilePdf,
  FilePowerpoint,
  FileWord,
  File,
  Warn,
  Question,
  AirTime,
  AtBranch,
  BankAccount,
  CallCenter,
  HomeDelivery,
  Online,
  Send,
  MegamenuCompany
} from "@konsumentverket-sverige/designsystem.utils"

const iconDefinitions = {
  Adapt,
  ChevronRight,
  Close,
  Easytoread,
  External,
  Search,
  Signlanguage,
  Volume,
  Otherlang,
  Arrow,
  Ecc,
  Burger,
  Exclamationmark,
  Check,
  Oval,
  LinkArrow,
  ArrowFat,
  Filter,
  List,
  Picturelist,
  Clear,
  Camera,
  Play,
  FileExcel,
  FilePdf,
  FilePowerpoint,
  FileWord,
  File,
  Warn,
  Question,
  AirTime,
  AtBranch,
  BankAccount,
  CallCenter,
  HomeDelivery,
  Online,
  Send,
  MegamenuCompany
};

const Icon = ({ icon, className, style, title, ...otherAttr }) => {
  const Element = iconDefinitions[icon];

  if (Element === undefined) {
    return null;
  }

  return (
    <Element
      focusable="false"
      title={title || icon || ""}
      className={className}
      style={style}
      role="img"
      aria-label={title || icon || ""}
      {...otherAttr}
    />
  );
};

export { Icon, iconDefinitions };
