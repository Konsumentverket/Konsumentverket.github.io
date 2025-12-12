/** @jsx jsx */
import { jsx } from "@emotion/core";

import Adapt from "../Icons/SystemIcons/Adapt/Adapt.js";
import Close from "../Icons/SystemIcons/Close/Close.js";
import Easytoread from "../Icons/SystemIcons/Easytoread/Easytoread.js";
import Search from "../Icons/SystemIcons/Search/Search.js";
import Signlanguage from "../Icons/SystemIcons/Signlanguage/Signlanguage.js";
import Volume from "../Icons/SystemIcons/Volume/Volume.js";
import Otherlang from "../Icons/SystemIcons/Otherlang/Otherlang.js";
import Ecc from "../Icons/SystemIcons/Ecc/Ecc.js";
import Arrow from "../Icons/SystemIcons/Arrow/Arrow.js";
import Burger from "../Icons/SystemIcons/Burger/Burger.js";
import External from "../Icons/SystemIcons/External/External.js";
import Exclamationmark from "../Icons/SystemIcons/Exclamationmark/Exclamationmark.js";
import Check from "../Icons/SystemIcons/Check/Check.js";
import Oval from "../Icons/SystemIcons/Oval/Oval.js";
import LinkArrow from "../Icons/SystemIcons/LinkArrow/LinkArrow.js";
import Filter from "../Icons/SystemIcons/Filter/Filter.js";
import List from "../Icons/SystemIcons/List/List.js";
import Picturelist from "../Icons/SystemIcons/Picturelist/Picturelist.js";
import Clear from "../Icons/SystemIcons/Clear/Clear.js";
import Camera from "../Icons/SystemIcons/Camera/Camera.js";
import Play from "../Icons/SystemIcons/Play/Play.js";
import FileExcel from "../Icons/SystemIcons/FileExcel/FileExcel.js";
import FilePdf from "../Icons/SystemIcons/FilePdf/FilePdf.js";
import FilePowerpoint from "../Icons/SystemIcons/FilePowerpoint/FilePowerpoint.js";
import FileWord from "../Icons/SystemIcons/FileWord/FileWord.js";
import File from "../Icons/SystemIcons/File/File.js";
import Warn from "../Icons/SystemIcons/Warn/Warn.js";
import Question from "../Icons/SystemIcons/Question/Question.js";
import AirTime from "../Icons/SystemIcons/AirTime/AirTime";
import AtBranch from "../Icons/SystemIcons/AtBranch/AtBranch";
import BankAccount from "../Icons/SystemIcons/BankAccount/BankAccount";
import CallCenter from "../Icons/SystemIcons/CallCenter/CallCenter";
import HomeDelivery from "../Icons/SystemIcons/HomeDelivery/HomeDelivery";
import Online from "../Icons/SystemIcons/Online/Online";
import Send from "../Icons/SystemIcons/Send/Send";

const iconDefinitions = {
  Adapt,
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
  Send
};

const Icon = ({ icon, className, style, title, ...otherAttr }) => {
  const Element = iconDefinitions[icon];

  if (Element === undefined) {
    console.log(`Could not find icon in storybook tried to load: ${icon}`);
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
