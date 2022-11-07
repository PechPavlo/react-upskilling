import { useSelector } from 'react-redux';
import { COMPETENCY } from '../../constants/competency';
import Module from '../Module/Module';

const Competency = (props: any) => {
  const { competency, index } = props;
  const { modules } = useSelector((state: any) => state.modules);
  const modulesList = modules.filter(
    (module: any) => module.competencyType === COMPETENCY[index]
  );
  return (
    <li>
      <h3>{competency}</h3>
      <ul>
        {modulesList.map((module: any) => (
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
