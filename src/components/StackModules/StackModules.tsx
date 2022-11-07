import Competency from '../Competency/Competency';
import { COMPETENCY } from '../../constants/competency';

const StackModules = () => {
  return (
    <>
      <ul>
        {COMPETENCY.map((competency, index) => (
          <Competency key={index} index={index} competency={competency} />
        ))}
      </ul>
    </>
  );
};

export default StackModules;
