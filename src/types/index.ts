export type Service = {
  id: number | string;
  name: string;
  price: number | string;
};
export type User = {
  id: number;
  token: string;
  name: string;
  role: number;
};

export type CalendarEvent = {
  id: number;
  title: string;
  start: Date;
  end: Date;
};
