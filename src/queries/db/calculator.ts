import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '.';
import type { CalculationsResponse, CalculationType } from './types';

const getCalculations = async () =>
  (await getDocs(collection(db, 'calculations'))).docs.map((doc) =>
    doc.data()
  ) as CalculationsResponse[];

const setCalculations = async (data: CalculationType) =>
  addDoc(collection(db, 'calculations'), data);

export { getCalculations, setCalculations };
