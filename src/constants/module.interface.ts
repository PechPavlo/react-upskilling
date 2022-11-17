import { Competencies } from './competencies';

export interface Module {
  id: string;
  name: string;
  competencyType: Competencies;
  sections: string[];
}
