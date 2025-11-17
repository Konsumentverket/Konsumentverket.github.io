/** @jsx jsx */
import { jsx } from "@emotion/core";

import { AppsAndGames } from "./EditorIcons/AppsAndGames/AppsAndGames.js";
import { Auction } from "./EditorIcons/Auction/Auction.js";
import { BeautyEngagement } from "./EditorIcons/BeautyEngagement/BeautyEngagement.js";
import { Bullhorn } from "./EditorIcons/Bullhorn/Bullhorn.js";
import { Leaf } from "./EditorIcons/Leaf/Leaf.js";
import { Hardhat } from "./EditorIcons/Hardhat/Hardhat.js";
import { BrokerServices } from "./EditorIcons/BrokerServices/BrokerServices.js";
import { Cars } from "./EditorIcons/Cars/Cars.js";
import { Clothes } from "./EditorIcons/Clothes/Clothes.js";
import { Complaint } from "./EditorIcons/Complaint/Complaint.js";
import { ComputerTvGameConsole } from "./EditorIcons/ComputerTvGameConsole/ComputerTvGameConsole.js";
import { ConcertAndEvent } from "./EditorIcons/ConcertAndEvent/ConcertAndEvent.js";
import { ConsumerRights } from "./EditorIcons/ConsumerRights/ConsumerRights.js";
import { ContractWorkHouses } from "./EditorIcons/ContractWorkHouses/ContractWorkHouses.js";
import { Craftsman } from "./EditorIcons/Craftsman/Craftsman.js";
import { DistanceContractLaw } from "./EditorIcons/DistanceContractLaw/DistanceContractLaw.js";
import { EducationAndCourses } from "./EditorIcons/EducationAndCourses/EducationAndCourses.js";
import { ElectricityHeatingContract } from "./EditorIcons/ElectricityHeatingContract/ElectricityHeatingContract.js";
import { FurnituresAndDecoration } from "./EditorIcons/FurnituresAndDecoration/FurnituresAndDecoration.js";
import { GymAndWorkoutService } from "./EditorIcons/GymAndWorkoutService/GymAndWorkoutService.js";
import { Hairdresser } from "./EditorIcons/Hairdresser/Hairdresser.js";
import { Insurance } from "./EditorIcons/Insurance/Insurance.js";
import { InternetFiberBroadband } from "./EditorIcons/InternetFiberBroadband/InternetFiberBroadband.js";
import { LoanSaveInvest } from "./EditorIcons/LoanSaveInvest/LoanSaveInvest.js";
import { LotteryAndGames } from "./EditorIcons/LotteryAndGames/LotteryAndGames.js";
import { MobilePhone } from "./EditorIcons/MobilePhone/MobilePhone.js";
import { MoveAndCleaningService } from "./EditorIcons/MoveAndCleaningService/MoveAndCleaningService.js";
import { NotDefinedPicture } from "./EditorIcons/NotDefinedPicture/NotDefinedPicture.js";
import { Pets } from "./EditorIcons/Pets/Pets.js";
import { PurchaseFromPrivate } from "./EditorIcons/PurchaseFromPrivate/PurchaseFromPrivate.js";
import { Receipt } from "./EditorIcons/Receipt/Receipt.js";
import { SalesLaw } from "./EditorIcons/SalesLaw/SalesLaw.js";
import { Telemarketing } from "./EditorIcons/Telemarketing/Telemarketing.js";
import { Travel } from "./EditorIcons/Travel/Travel.js";
import { WhiteGoods } from "./EditorIcons/WhiteGoods/WhiteGoods.js";
import { Withdrawal } from "./EditorIcons/Withdrawal/Withdrawal.js";
import { Pen } from "./EditorIcons/Pen/Pen.js";
import { Map } from "./EditorIcons/Map/Map.js";
import { ChatWithUs } from "./EditorIcons/ChatWithUs/ChatWithUs.js";
import { CallUs } from "./EditorIcons/CallUs/CallUs.js";
import { Mic } from "./EditorIcons/Mic/Mic.js";
import { DatingServices } from "./EditorIcons/DatingServices/DatingServices.js";
import { UserInjured } from "./EditorIcons/UserInjured/UserInjured.js";
import { BabyCarriage } from "./EditorIcons/BabyCarriage/BabyCarriage.js";
import { Ellipsis } from "./EditorIcons/Ellipsis/Ellipsis.js";
import { HandHeart } from "./EditorIcons/HandHeart/HandHeart.js";
import { Snowboarding } from "./EditorIcons/Snowboarding/Snowboarding.js";


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
