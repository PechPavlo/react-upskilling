import { useSelector } from 'react-redux';
import { Module as ModuleType } from '../../constants/module.interface';

import Module from '../Module/Module';

const Competency = (props: any) => {
  const { competency } = props;
  const { modules } = useSelector((state: any) => state.modules);
  const modulesList = modules.filter(
    (module: ModuleType) => module.competencyType === competency
  );
  return (
    <li>
      <h3>{competency}</h3>
      <ul>
        {modulesList.map((module: ModuleType) => (
          <Module
            key={module.id}
            id={module.id}
            name={module.name}
            sections={module.sections}
          />
        ))}
      </ul>
    </li>
  );
};

export default Competency;
