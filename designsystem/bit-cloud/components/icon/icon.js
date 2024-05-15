/** @jsx jsx */
import { jsx } from "@emotion/core";

import {

  // System Icons
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
  MegamenuCompany,

  // Editor Icons

  AppsAndGames,
  Auction,
  BeautyEngagement,
  Bullhorn,
  Leaf,
  Hardhat,
  BrokerServices,
  Cars,
  Clothes,
  Complaint,
  ComputerTvGameConsole,
  ConcertAndEvent,
  ConsumerRights,
  ContractWorkHouses,
  Craftsman,
  DistanceContractLaw,
  EducationAndCourses,
  ElectricityHeatingContract,
  FurnituresAndDecoration,
  GymAndWorkoutService,
  Hairdresser,
  Insurance,
  InternetFiberBroadband,
  LoanSaveInvest,
  LotteryAndGames,
  MobilePhone,
  MoveAndCleaningService,
  NotDefinedPicture,
  Pets,
  PurchaseFromPrivate,
  Receipt,
  SalesLaw,
  Telemarketing,
  Travel,
  WhiteGoods,
  Withdrawal,
  Pen,
  Map,
  ChatWithUs,
  CallUs,
  Mic,
  DatingServices,
  UserInjured,
  BabyCarriage,
  Ellipsis,
  HandHeart,
  Snowboarding,
} from "@konsumentverket-sverige/designsystem.utils"

const systemIconDefinitions = {
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

const editorIconDefinitions = {
  AppsAndGames,
  Auction,
  BeautyEngagement,
  Bullhorn,
  Leaf,
  Hardhat,
  BrokerServices,
  Cars,
  Clothes,
  Complaint,
  ComputerTvGameConsole,
  ConcertAndEvent,
  ConsumerRights,
  ContractWorkHouses,
  Craftsman,
  DistanceContractLaw,
  EducationAndCourses,
  ElectricityHeatingContract,
  FurnituresAndDecoration,
  GymAndWorkoutService,
  Hairdresser,
  Insurance,
  InternetFiberBroadband,
  LoanSaveInvest,
  LotteryAndGames,
  MobilePhone,
  MoveAndCleaningService,
  NotDefinedPicture,
  Pets,
  PurchaseFromPrivate,
  Receipt,
  SalesLaw,
  Telemarketing,
  Travel,
  WhiteGoods,
  Withdrawal,
  Pen,
  Map,
  ChatWithUs,
  CallUs,
  Mic,
  DatingServices,
  UserInjured,
  BabyCarriage,
  Ellipsis,
  HandHeart,
  Snowboarding,
}

const Icon = ({ icon, className, style, title, ...otherAttr }) => {
  const concatenatedIcons = {...systemIconDefinitions, ...editorIconDefinitions};
  const Element = concatenatedIcons[icon];

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

export { Icon, systemIconDefinitions, editorIconDefinitions };
