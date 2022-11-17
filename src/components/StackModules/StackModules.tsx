import Competency from '../Competency/Competency';
import { Competencies } from '../../constants/competencies';

const StackModules = () => {
  return (
    <>
      <ul>
        {Object.values(Competencies).map((competency, index) => (
          <Competency key={index} competency={competency} />
        ))}
      </ul>
    </>
  );
};

export default StackModules;
