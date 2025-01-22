
import { colors, newColors } from './colors';
import { GlobalStyles as globalStyles, CompositionFonts, small, medium, large } from './globalstyles';
import { spacing } from './spacing';
import { breakpoints } from "./breakpoints";
//import { DateFormat } from './dateformat.js';
import { containerStyles} from "./grid";
import * as typography from "./typography.js";

// System icons
import { Adapt } from "./Icons/SystemIcons/Adapt/Adapt.js"
import { ChevronRight } from "./Icons/SystemIcons/ChevronRight/ChevronRight.js";
import { ChevronLeft } from "./Icons/SystemIcons/ChevronLeft/ChevronLeft.js";
import { MonoEasyToRead } from "./Icons/SystemIcons/MonoEasyToRead/MonoEasyToRead.js";
import { MonoWhiteVideo } from "./Icons/SystemIcons/MonoWhiteVideo/MonoWhiteVideo.js";
import { MonoWhiteDownload } from "./Icons/SystemIcons/MonoWhiteDownload/MonoWhiteDownload.js";
import { MonoSigning } from "./Icons/SystemIcons/MonoSigning/MonoSigning.js";
import { Volume } from "./Icons/SystemIcons/Volume/Volume.js";
import { MonoDownload } from "./Icons/SystemIcons/MonoDownload/MonoDownload.js";
import { MonoGlobe } from "./Icons/SystemIcons/MonoGlobe/MonoGlobe.js";
import { MonoListen } from "./Icons/SystemIcons/MonoListen/MonoListen.js";
import { MonoListenWhite } from "./Icons/SystemIcons/MonoListenWhite/MonoListenWhite.js";
import { Ecc } from "./Icons/SystemIcons/Ecc/Ecc.js";
import { Arrow, arrowPath } from './Icons/SystemIcons/Arrow/Arrow.js';
import { ArrowFat } from './Icons/SystemIcons/ArrowFat/ArrowFat.js';
import { ArrowAngleRight } from './Icons/SystemIcons/ArrowAngleRight/ArrowAngleRight.js';
import { External } from "./Icons/SystemIcons/External/External.js";
import { Exclamationmark } from "./Icons/SystemIcons/Exclamationmark/Exclamationmark.js";
import { Check, checkPath } from "./Icons/SystemIcons/Check/Check.js";
import { Oval } from "./Icons/SystemIcons/Oval/Oval.js";
import { LinkArrow } from "./Icons/SystemIcons/LinkArrow/LinkArrow.js";
import { Filter } from "./Icons/SystemIcons/Filter/Filter.js";
import { List } from "./Icons/SystemIcons/List/List.js";
import { Picturelist } from "./Icons/SystemIcons/Picturelist/Picturelist.js";
import { Clear } from "./Icons/SystemIcons/Clear/Clear.js";
import { Camera } from "./Icons/SystemIcons/Camera/Camera.js";
import { Play } from "./Icons/SystemIcons/Play/Play.js";
import { FileExcel } from "./Icons/SystemIcons/FileExcel/FileExcel.js";
import { FilePdf } from "./Icons/SystemIcons/FilePdf/FilePdf.js";
import { FilePowerpoint } from "./Icons/SystemIcons/FilePowerpoint/FilePowerpoint.js";
import { FileWord } from "./Icons/SystemIcons/FileWord/FileWord.js";
import { File } from "./Icons/SystemIcons/File/File.js";
import { Warn } from "./Icons/SystemIcons/Warn/Warn.js";
import { Question } from "./Icons/SystemIcons/Question/Question.js";
import { AirTime } from "./Icons/SystemIcons/AirTime/AirTime.js";
import { AtBranch } from "./Icons/SystemIcons/AtBranch/AtBranch.js";
import { BankAccount } from "./Icons/SystemIcons/BankAccount/BankAccount.js";
import { CallCenter } from "./Icons/SystemIcons/CallCenter/CallCenter.js";
import { HomeDelivery } from "./Icons/SystemIcons/HomeDelivery/HomeDelivery.js";
import { Online } from "./Icons/SystemIcons/Online/Online.js";
import { Send } from "./Icons/SystemIcons/Send/Send.js";
import { MonoSettings} from "./Icons/SystemIcons/MonoSettings/MonoSettings.js";
import { Logo } from "./Icons/SystemIcons/Logo/Logo.js"
import { MegamenuCompany } from "./Icons/SystemIcons/MegamenuCompany/MegamenuCompany.js";
import { MonoBookmark } from "./Icons/SystemIcons/MonoBookmark/MonoBookmark";
import { MonoArrowRight } from "./Icons/SystemIcons/MonoArrowRight/MonoArrowRight";
import { MonoArrowRightSmall } from "./Icons/SystemIcons/MonoArrowRightSmall/MonoArrowRightSmall";
import { MonoCopy } from "./Icons/SystemIcons/MonoCopy/MonoCopy";
import { MonoArrowDown } from "./Icons/SystemIcons/MonoArrowDown/MonoArrowDown";
import { MonoArrowDownSmall } from "./Icons/SystemIcons/MonoArrowDownSmall/MonoArrowDownSmall";
import { MonoCheck } from "./Icons/SystemIcons/MonoCheck/MonoCheck";
import { MonoBlueRss } from "./Icons/SystemIcons/MonoBlueRss/MonoBlueRss";
import { WarningCircle } from "./Icons/SystemIcons/WarningCircle/WarningCircle";
import { WarningCirclePink } from "./Icons/SystemIcons/WarningCirclePink/WarningCirclePink";
import { Video } from "./Icons/SystemIcons/Video/Video";
import { Information } from "./Icons/SystemIcons/Information/Information";
import { MonoWhiteChat } from "./Icons/SystemIcons/MonoWhiteChat/MonoWhiteChat";
import { DBFileUpload } from "./Icons/SystemIcons/DBFileUpload/DBFileUpload";
import { DBFileText } from "./Icons/SystemIcons/DBFileText/DBFileText";
import { DBFilePDF } from "./Icons/SystemIcons/DBFilePDF/DBFilePDF";
import { DBFileImage } from "./Icons/SystemIcons/DBFileImage/DBFileImage";
import { DBDeleteFileAlt2 } from "./Icons/SystemIcons/DBDeleteFileAlt2/DBDeleteFileAlt2";


// Editor icons
import { AppsAndGames } from "./Icons/EditorIcons/AppsAndGames/AppsAndGames.js";
import { Auction } from "./Icons/EditorIcons/Auction/Auction.js";
import { BeautyEngagement } from "./Icons/EditorIcons/BeautyEngagement/BeautyEngagement.js";
import { Bullhorn } from "./Icons/EditorIcons/Bullhorn/Bullhorn.js";
import { Leaf } from "./Icons/EditorIcons/Leaf/Leaf.js";
import { Hardhat } from "./Icons/EditorIcons/Hardhat/Hardhat.js";
import { BrokerServices } from "./Icons/EditorIcons/BrokerServices/BrokerServices.js";
import { Cars } from "./Icons/EditorIcons/Cars/Cars.js";
import { Clothes } from "./Icons/EditorIcons/Clothes/Clothes.js";
import { Complaint } from "./Icons/EditorIcons/Complaint/Complaint.js";
import { ComputerTvGameConsole } from "./Icons/EditorIcons/ComputerTvGameConsole/ComputerTvGameConsole.js";
import { ConcertAndEvent } from "./Icons/EditorIcons/ConcertAndEvent/ConcertAndEvent.js";
import { ConsumerRights } from "./Icons/EditorIcons/ConsumerRights/ConsumerRights.js";
import { ContractWorkHouses } from "./Icons/EditorIcons/ContractWorkHouses/ContractWorkHouses.js";
import { Craftsman } from "./Icons/EditorIcons/Craftsman/Craftsman.js";
import { DistanceContractLaw } from "./Icons/EditorIcons/DistanceContractLaw/DistanceContractLaw.js";
import { EducationAndCourses } from "./Icons/EditorIcons/EducationAndCourses/EducationAndCourses.js";
import { ElectricityHeatingContract } from "./Icons/EditorIcons/ElectricityHeatingContract/ElectricityHeatingContract.js";
import { FurnituresAndDecoration } from "./Icons/EditorIcons/FurnituresAndDecoration/FurnituresAndDecoration.js";
import { GymAndWorkoutService } from "./Icons/EditorIcons/GymAndWorkoutService/GymAndWorkoutService.js";
import { Hairdresser } from "./Icons/EditorIcons/Hairdresser/Hairdresser.js";
import { Insurance } from "./Icons/EditorIcons/Insurance/Insurance.js";
import { InternetFiberBroadband } from "./Icons/EditorIcons/InternetFiberBroadband/InternetFiberBroadband.js";
import { LoanSaveInvest } from "./Icons/EditorIcons/LoanSaveInvest/LoanSaveInvest.js";
import { LotteryAndGames } from "./Icons/EditorIcons/LotteryAndGames/LotteryAndGames.js";
import { MobilePhone } from "./Icons/EditorIcons/MobilePhone/MobilePhone.js";
import { MoveAndCleaningService } from "./Icons/EditorIcons/MoveAndCleaningService/MoveAndCleaningService.js";
import { NotDefinedPicture } from "./Icons/EditorIcons/NotDefinedPicture/NotDefinedPicture.js";
import { Pets } from "./Icons/EditorIcons/Pets/Pets.js";
import { PurchaseFromPrivate } from "./Icons/EditorIcons/PurchaseFromPrivate/PurchaseFromPrivate.js";
import { Receipt } from "./Icons/EditorIcons/Receipt/Receipt.js";
import { SalesLaw } from "./Icons/EditorIcons/SalesLaw/SalesLaw.js";
import { Telemarketing } from "./Icons/EditorIcons/Telemarketing/Telemarketing.js";
import { Travel } from "./Icons/EditorIcons/Travel/Travel.js";
import { WhiteGoods } from "./Icons/EditorIcons/WhiteGoods/WhiteGoods.js";
import { Withdrawal } from "./Icons/EditorIcons/Withdrawal/Withdrawal.js";
import { Pen } from "./Icons/EditorIcons/Pen/Pen.js";
import { Map } from "./Icons/EditorIcons/Map/Map.js";
import { ChatWithUs } from "./Icons/EditorIcons/ChatWithUs/ChatWithUs.js";
import { CallUs } from "./Icons/EditorIcons/CallUs/CallUs.js";
import { Mic } from "./Icons/EditorIcons/Mic/Mic.js";
import { DatingServices } from "./Icons/EditorIcons/DatingServices/DatingServices.js";
import { UserInjured } from "./Icons/EditorIcons/UserInjured/UserInjured.js";
import { BabyCarriage } from "./Icons/EditorIcons/BabyCarriage/BabyCarriage.js";
import { Ellipsis } from "./Icons/EditorIcons/Ellipsis/Ellipsis.js";
import { HandHeart } from "./Icons/EditorIcons/HandHeart/HandHeart.js";
import { Snowboarding } from "./Icons/EditorIcons/Snowboarding/Snowboarding.js";
import { MonoArrowSmall } from "./Icons/SystemIcons/MonoArrowSmall/MonoArrowSmall.js";
import { TempIcon } from "./Icons/EditorIcons/TempIcon/TempIcon.js";
import { MonoDelete } from "./Icons/SystemIcons/MonoDelete/MonoDelete.js";
import { MonoDeleteSmall } from "./Icons/SystemIcons/MonoDeleteSmall/MonoDeleteSmall.js";
import { MonoSearch } from "./Icons/SystemIcons/MonoSearch/MonoSearch";
import { MonoMenuThin } from "./Icons/SystemIcons/MonoMenuThin/MonoMenuThin";

import { NewsIcon } from "./Icons/EditorIcons/NewsIcon/NewsIcon.js";
import { DiagramIcon } from "./Icons/EditorIcons/DiagramIcon/DiagramIcon.js";
import { BudgetIcon } from "./Icons/EditorIcons/BudgetIcon/BudgetIcon.js";
import { FlightsIcon } from "./Icons/EditorIcons/FlightsIcon/FlightsIcon.js";
import { WorkIcon } from "./Icons/EditorIcons/WorkIcon/WorkIcon.js";
import { OperationIcon } from "./Icons/EditorIcons/OperationIcon/OperationIcon.js";
import { ReportIcon } from "./Icons/EditorIcons/ReportIcon/ReportIcon.js";
import { SafeIcon } from "./Icons/EditorIcons/SafeIcon/SafeIcon.js";
import { EnvironmentIcon } from "./Icons/EditorIcons/EnvironmentIcon/EnvironmentIcon.js";
import { EconomyIcon } from "./Icons/EditorIcons/EconomyIcon/EconomyIcon.js";
import { EUIcon } from "./Icons/EditorIcons/EUIcon/EUIcon.js";
import { ConsumerLawIcon } from "./Icons/EditorIcons/ConsumerLawIcon/ConsumerLawIcon.js";
import { ConsumerRightsShieldIcon } from "./Icons/EditorIcons/ConsumerRightsShieldIcon/ConsumerRightsShieldIcon.js";
import { ShoppingIcon } from "./Icons/EditorIcons/ShoppingIcon/ShoppingIcon.js";
import { StatisticsIcon } from "./Icons/EditorIcons/StatisticsIcon/StatisticsIcon.js";
import { ConsumerSupportIcon } from "./Icons/EditorIcons/ConsumerSupportIcon/ConsumerSupportIcon.js";
import { MunicipalSupportIcon } from "./Icons/EditorIcons/MunicipalSupportIcon/MunicipalSupportIcon.js";
import { TeacherIcon } from "./Icons/EditorIcons/TeacherIcon/TeacherIcon.js";
import { QuestinCircleIcon } from "./Icons/EditorIcons/QuestinCircleIcon/QuestinCircleIcon.js";
import { WarningCircleIcon } from "./Icons/EditorIcons/WarningCircleIcon/WarningCircleIcon.js";
import { WarningDiamondIcon } from "./Icons/EditorIcons/WarningDiamondIcon/WarningDiamondIcon.js";
import { KOVWorkIcon } from "./Icons/EditorIcons/KOVWorkIcon/KOVWorkIcon.js";
import { ProductSafetyIcon } from "./Icons/EditorIcons/ProductSafetyIcon/ProductSafetyIcon.js";
import { PaymentIcon } from "./Icons/EditorIcons/PaymentIcon/PaymentIcon.js";
import { MarketingIcon } from "./Icons/EditorIcons/MarketingIcon/MarketingIcon.js";
import { ContractIcon } from "./Icons/EditorIcons/ContractIcon/ContractIcon.js";
import { RulesIcon } from "./Icons/EditorIcons/RulesIcon/RulesIcon.js";
import { SalesRulesIcon } from "./Icons/EditorIcons/SalesRulesIcon/SalesRulesIcon.js";
import { ConsumerRightsIcon } from "./Icons/EditorIcons/ConsumerRightsIcon/ConsumerRightsIcon.js";
import { PressIcon } from "./Icons/EditorIcons/PressIcon/PressIcon.js";
import { RecallIcon } from "./Icons/EditorIcons/RecallIcon/RecallIcon.js";
import { KOIcon } from "./Icons/EditorIcons/KOIcon/KOIcon.js";
import { RightsIcon } from "./Icons/EditorIcons/RightsIcon/RightsIcon.js";
import { WarningIcon } from "./Icons/EditorIcons/WarningIcon/WarningIcon.js";
import { MicrophoneIcon } from "./Icons/EditorIcons/MicrophoneIcon/MicrophoneIcon.js";
import { WebbinarIcon } from "./Icons/EditorIcons/WebbinarIcon/WebbinarIcon.js";


import { DBAnimalsIcon } from "./Icons/EditorIcons/DBAnimalsIcon/DBAnimalsIcon.js";
import { DBCalendarIcon } from "./Icons/EditorIcons/DBCalendarIcon/DBCalendarIcon.js";
import { DBCarIcon } from "./Icons/EditorIcons/DBCarIcon/DBCarIcon.js";
import { DBClothesIcon } from "./Icons/EditorIcons/DBClothesIcon/DBClothesIcon.js";
import { DBDeleteIcon } from "./Icons/EditorIcons/DBDeleteIcon/DBDeleteIcon.js";
import { DBEducationIcon } from "./Icons/EditorIcons/DBEducationIcon/DBEducationIcon.js";
import { DBEnergyIcon } from "./Icons/EditorIcons/DBEnergyIcon/DBEnergyIcon.js";
import { DBFaqAnswerIcon } from "./Icons/EditorIcons/DBFaqAnswerIcon/DBFaqAnswerIcon.js";
import { DBFaqQuestionIcon } from "./Icons/EditorIcons/DBFaqQuestionIcon/DBFaqQuestionIcon.js";
import { DBFoodIcon } from "./Icons/EditorIcons/DBFoodIcon/DBFoodIcon.js";
import { DBFridgeIcon } from "./Icons/EditorIcons/DBFridgeIcon/DBFridgeIcon.js";
import { DBFurnitureIcon } from "./Icons/EditorIcons/DBFurnitureIcon/DBFurnitureIcon.js";
import { DBGamesIcon } from "./Icons/EditorIcons/DBGamesIcon/DBGamesIcon.js";
import { DBHealthIcon } from "./Icons/EditorIcons/DBHealthIcon/DBHealthIcon.js";
import { DBJusticeIcon } from "./Icons/EditorIcons/DBJusticeIcon/DBJusticeIcon.js";
import { DBLeisureIcon } from "./Icons/EditorIcons/DBLeisureIcon/DBLeisureIcon.js";
import { DBMovingIcon } from "./Icons/EditorIcons/DBMovingIcon/DBMovingIcon.js";
import { DBOnlineGamingIcon } from "./Icons/EditorIcons/DBOnlineGamingIcon/DBOnlineGamingIcon.js";
import { DBPadlockIcon } from "./Icons/EditorIcons/DBPadlockIcon/DBPadlockIcon.js";
import { DBPhoneIcon } from "./Icons/EditorIcons/DBPhoneIcon/DBPhoneIcon.js";
import { DBRenovationIcon } from "./Icons/EditorIcons/DBRenovationIcon/DBRenovationIcon.js";
import { DBRentIcon } from "./Icons/EditorIcons/DBRentIcon/DBRentIcon.js";
import { DBTravelIcon } from "./Icons/EditorIcons/DBTravelIcon/DBTravelIcon.js";
import { DBWarningIcon } from "./Icons/EditorIcons/DBWarningIcon/DBWarningIcon.js";
import { DBWifiIcon } from "./Icons/EditorIcons/DBWifiIcon/DBWifiIcon.js";

import { DBSocialShareIcon } from "./Icons/EditorIcons/DBSocialShareIcon/DBSocialShareIcon.js";
import { DBFriendshipIcon } from "./Icons/EditorIcons/DBFriendshipIcon/DBFriendshipIcon.js";
import { DBWebsiteInfoIcon } from "./Icons/EditorIcons/DBWebsiteInfoIcon/DBWebsiteInfoIcon.js";
import { RSS } from "./Icons/EditorIcons/RSS/RSS.js";

import useOnClickOutside from "./hooks/useOnClickOutside";


export {

  // Utils

  colors,
  newColors,
  globalStyles,
  CompositionFonts,
  spacing,
  breakpoints,
  containerStyles,
  typography,
  small,
  medium,
  large,
  useOnClickOutside,

  // System icons

  Adapt,
  ChevronRight,
  ChevronLeft,
  MonoSigning,
  Volume,
  MonoDownload,
  MonoGlobe,
  MonoListen,
  MonoListenWhite,
  Ecc,
  Arrow,
  ArrowAngleRight,
  arrowPath,
  ArrowFat,
  External,
  Exclamationmark,
  Check,
  checkPath,
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
  Send,
  MegamenuCompany,
  MonoSettings,
  Logo,
  MonoArrowSmall,
  MonoDelete,
  MonoDeleteSmall,
  MonoSearch,
  MonoMenuThin,
  MonoEasyToRead,
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
  Video,
  MonoWhiteVideo,
  MonoWhiteDownload,
  Information,
  MonoWhiteChat,
  DBFileUpload,
  DBFileText,
  DBFilePDF,
  DBFileImage,
  DBDeleteFileAlt2,

  // System icons

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
  //nya
  RSS,
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
  //MarketingIcon,
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
  //nya dual blue
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
  DBWebsiteInfoIcon
}
