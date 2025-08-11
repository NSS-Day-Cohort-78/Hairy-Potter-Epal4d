// define and export firePottery(potttery, temp)
export const firePottery = (potteryObject, fireTemp) => {
  potteryObject.fired = true;

  if (fireTemp > 2200) {
    potteryObject.cracked = true;
  } else {
    potteryObject.cracked = false;
  }
  return potteryObject;
};
