import React from "react";
import ButtonUI from "UI/ButtonUI/ButtonUI";
import { useCustomRouter } from "../../hooks/useCustomRouter";

const Ozon = () => {
  const { handlePushTo } = useCustomRouter();
  return (
    <div>
      <div> Ozon</div>
      <ButtonUI color="primary" onClick={handlePushTo("/yandex")}>
        navigate to yandex
      </ButtonUI>
    </div>
  );
};

export default React.memo(Ozon);
