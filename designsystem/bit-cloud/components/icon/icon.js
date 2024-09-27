/** @jsx jsx */
import { jsx } from "@emotion/core";

import {
  Adapt,
  ChevronRight,
  ChevronLeft,
  MonoListen,
  MonoEasyToRead,
  MonoSigning,
  Volume,
  MonoGlobe,
  Ecc,
  Arrow,
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
  MonoSettings,
  Logo,
  MegamenuCompany,
  MonoArrowSmall,
  MonoDelete,
  MonoDeleteSmall,
  MonoSearch,
  MonoMenuThin,
  MonoBookmark,
  MonoArrowRight,
  MonoArrowRightSmall,
  MonoCopy,
  MonoArrowDown,
  MonoArrowDownSmall,
  MonoCheck,
  MonoBlueRss,
  WarningCircle,
  WarningCirclePink,

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
  TempIcon,
  NewsIcon,
  DiagramIcon,
  BudgetIcon,
  FlightsIcon,
  WorkIcon,
  OperationIcon,
  ReportIcon,
  SafeIcon,
  EnvironmentIcon,
  EconomyIcon,
  EUIcon,
  ConsumerLawIcon,
  ConsumerRightsShieldIcon,
  ShoppingIcon,
  StatisticsIcon,
  ConsumerSupportIcon,
  MunicipalSupportIcon,
  TeacherIcon,
  QuestinCircleIcon,
  WarningCircleIcon,
  WarningDiamondIcon,
  KOVWorkIcon,
  ProductSafetyIcon,
  PaymentIcon,
  MarketingIcon,
  ContractIcon,
  RulesIcon,
  SalesRulesIcon,
  ConsumerRightsIcon,
  PressIcon,
  RecallIcon,
  KOIcon,
  RightsIcon,
  WarningIcon,
  MicrophoneIcon,
  WebbinarIcon
} from "@konsumentverket-sverige/designsystem.utils"

const systemIconDefinitions = {
  Adapt,
  ChevronRight,
  ChevronLeft,
  MonoListen,
  MonoEasyToRead,
  External,
  MonoSigning,
  Volume,
  MonoGlobe,
  Arrow,
  Ecc,
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
  MonoSettings,
  Logo,
  MonoArrowSmall,
  MonoDelete,
  MonoDeleteSmall,
  MonoSearch,
  MonoMenuThin,
  MonoBookmark,
  MonoArrowRight,
  MonoArrowRightSmall,
  MonoCopy,
  MonoArrowDown,
  MonoArrowDownSmall,
  MonoCheck,
  MonoBlueRss,
  WarningCircle,
  WarningCirclePink,
};

const editorIconDefinitions = {
  NewsIcon,
  DiagramIcon,
  BudgetIcon,
  FlightsIcon,
  WorkIcon,
  OperationIcon,
  ReportIcon,
  SafeIcon,
  EnvironmentIcon,
  EconomyIcon,
  EUIcon,
  ConsumerLawIcon,
  ConsumerRightsShieldIcon,
  ShoppingIcon,
  StatisticsIcon,
  ConsumerSupportIcon,
  MunicipalSupportIcon,
  TeacherIcon,
  QuestinCircleIcon,
  WarningCircleIcon,
  WarningDiamondIcon,
  KOVWorkIcon,
  ProductSafetyIcon,
  PaymentIcon,
  MarketingIcon,
  ContractIcon,
  RulesIcon,
  SalesRulesIcon,
  ConsumerRightsIcon,
  PressIcon,
  RecallIcon,
  KOIcon,
  RightsIcon,
  WarningIcon,
  MicrophoneIcon,
  WebbinarIcon,
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
  TempIcon,
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
  Snowboarding
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
