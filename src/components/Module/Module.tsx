const Module = (props: any) => {
  const { id, name, sections } = props;
  return (
    <li>
      <h3>{name}</h3>
      <ul>
        {sections.map((section: any, index: any) => (
          <li key={`${id}${index}`}>{section}</li>
        ))}
      </ul>
    </li>
  );
};

export default Module;
