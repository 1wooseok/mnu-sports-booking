import React from "react";
import Skeleton from "react-loading-skeleton";

export default function MobileSuspense() {
  console.log("MobileSuspense");
  return <Skeleton count={5} />;
}
