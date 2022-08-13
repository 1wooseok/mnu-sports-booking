import React from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function BackButton() {
  const history = useHistory();

  return <FiArrowLeft onClick={history.goBack} />;
}
