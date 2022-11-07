import { useSelector } from 'react-redux';

const StackList = () => {
  const { stacks } = useSelector((state: any) => state.stacks);
  return (
    <>
      <ul>
        {stacks.map((stack: any) => (
          <li>{stack}</li>
        ))}
      </ul>
    </>
  );
};

export default StackList;
