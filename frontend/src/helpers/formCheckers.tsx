type roomErrorTypes = {
  roomName: string;
  maxPrice: string;
  welcomeMsg: string;
};

export function checkRoomName(roomName: string) {
  if (roomName.length < 1) {
    return false;
  }
  return true;
}

export function checkMaxPrice(
  price: string,
  setErrors: React.Dispatch<React.SetStateAction<roomErrorTypes>>
) {
  if (price.length < 1) {
    setErrors((prev) => ({ ...prev, maxPrice: "Max Price cannot be empty" }));
    return false;
  }
  const priceNum = Number(price);
  if (Number.isNaN(priceNum)) {
    setErrors((prev) => ({ ...prev, maxPrice: "Max price has to be a number" }));
    return false;
  }
  return true;
}
