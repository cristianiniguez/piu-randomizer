import stepsPiuPhoenix from './steps-piu-phoenix.json';
import stepsPiuXX from './steps-piu-xx.json';

const steps: Record<string, Record<string, Record<string, number[]>>> = {
  'piu-phoenix': stepsPiuPhoenix,
  'piu-xx': stepsPiuXX,
};

export default steps;
