/** @jsx jsx */
import { jsx } from "@emotion/core";

import AppsAndGames from "../Icons/EditorIcons/AppsAndGames/AppsAndGames.js";
import Auction from "../Icons/EditorIcons/Auction/Auction.js";
import BeautyEngagement from "../Icons/EditorIcons/BeautyEngagement/BeautyEngagement.js";
import Bullhorn from "../Icons/EditorIcons/Bullhorn/Bullhorn.js";
import Leaf from "../Icons/EditorIcons/Leaf/Leaf.js";
import Hardhat from "../Icons/EditorIcons/Hardhat/Hardhat.js";
import BrokerServices from "../Icons/EditorIcons/BrokerServices/BrokerServices.js";
import Cars from "../Icons/EditorIcons/Cars/Cars.js";
import Clothes from "../Icons/EditorIcons/Clothes/Clothes.js";
import Complaint from "../Icons/EditorIcons/Complaint/Complaint.js";
import ComputerTvGameConsole from "../Icons/EditorIcons/ComputerTvGameConsole/ComputerTvGameConsole.js";
import ConcertAndEvent from "../Icons/EditorIcons/ConcertAndEvent/ConcertAndEvent.js";
import ConsumerRights from "../Icons/EditorIcons/ConsumerRights/ConsumerRights.js";
import ContractWorkHouses from "../Icons/EditorIcons/ContractWorkHouses/ContractWorkHouses.js";
import Craftsman from "../Icons/EditorIcons/Craftsman/Craftsman.js";
import DistanceContractLaw from "../Icons/EditorIcons/DistanceContractLaw/DistanceContractLaw.js";
import EducationAndCourses from "../Icons/EditorIcons/EducationAndCourses/EducationAndCourses.js";
import ElectricityHeatingContract from "../Icons/EditorIcons/ElectricityHeatingContract/ElectricityHeatingContract.js";
import FurnituresAndDecoration from "../Icons/EditorIcons/FurnituresAndDecoration/FurnituresAndDecoration.js";
import GymAndWorkoutService from "../Icons/EditorIcons/GymAndWorkoutService/GymAndWorkoutService.js";
import Hairdresser from "../Icons/EditorIcons/Hairdresser/Hairdresser.js";
import Insurance from "../Icons/EditorIcons/Insurance/Insurance.js";
import InternetFiberBroadband from "../Icons/EditorIcons/InternetFiberBroadband/InternetFiberBroadband.js";
import LoanSaveInvest from "../Icons/EditorIcons/LoanSaveInvest/LoanSaveInvest.js";
import LotteryAndGames from "../Icons/EditorIcons/LotteryAndGames/LotteryAndGames.js";
import MobilePhone from "../Icons/EditorIcons/MobilePhone/MobilePhone.js";
import MoveAndCleaningService from "../Icons/EditorIcons/MoveAndCleaningService/MoveAndCleaningService.js";
import NotDefinedPicture from "../Icons/EditorIcons/NotDefinedPicture/NotDefinedPicture.js";
import Pets from "../Icons/EditorIcons/Pets/Pets.js";
import PurchaseFromPrivate from "../Icons/EditorIcons/PurchaseFromPrivate/PurchaseFromPrivate.js";
import Receipt from "../Icons/EditorIcons/Receipt/Receipt.js";
import SalesLaw from "../Icons/EditorIcons/SalesLaw/SalesLaw.js";
import Telemarketing from "../Icons/EditorIcons/Telemarketing/Telemarketing.js";
import Travel from "../Icons/EditorIcons/Travel/Travel.js";
import WhiteGoods from "../Icons/EditorIcons/WhiteGoods/WhiteGoods.js";
import Withdrawal from "../Icons/EditorIcons/Withdrawal/Withdrawal.js";
import Pen from "../Icons/EditorIcons/Pen/Pen.js";
import Map from "../Icons/EditorIcons/Map/Map.js";
import ChatWithUs from "../Icons/EditorIcons/ChatWithUs/ChatWithUs.js";
import CallUs from "../Icons/EditorIcons/CallUs/CallUs.js";
import Mic from "../Icons/EditorIcons/Mic/Mic.js";
import DatingServices from "../Icons/EditorIcons/DatingServices/DatingServices.js";
import UserInjured from "../Icons/EditorIcons/UserInjured/UserInjured.js";
import BabyCarriage from "../Icons/EditorIcons/BabyCarriage/BabyCarriage.js";
import Ellipsis from "../Icons/EditorIcons/Ellipsis/Ellipsis.js";
import HandHeart from "../Icons/EditorIcons/HandHeart/HandHeart.js";
import Snowboarding from "../Icons/EditorIcons/Snowboarding/Snowboarding.js";

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
  Snowboarding
};

const EditorIcon = ({ icon, className, style, title, ...otherAttr }) => {
  const Element = editorIconDefinitions[icon];

  if (Element === undefined) {
    console.log(`Could not find icon in storybook tried to load: ${icon}`);
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
