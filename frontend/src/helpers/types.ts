export type roomInfoType = {
  exchange_date: string;
  state: boolean;
  room_code: string;
  name: string;
  msg: string;
  budget: number;
};

export type usersInfoType = {
  id: number;
  fn: string;
  ln: string;
  email: string;
  phone: string;
  admin: boolean;
  adress: string;
  links: [];
  pref: string;
  code: string;
};

export type fetchType = {
  room: roomInfoType;
  users: usersInfoType[];
};