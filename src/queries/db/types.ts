import type { Timestamp } from 'firebase/firestore';

export type CalculationType = {
  days: number;
  data: Date;
  money: number;
};

export type CalculationsResponse = Omit<CalculationType, 'data'> & {
  data: Timestamp;
};
