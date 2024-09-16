export const TextInput = ({ changeFn }) => {
  return (
    <input
      className="input"
      onChange={changeFn}
      placeholder="Search recipes"
      size="md"
      width="400"
    ></input>
  );
};
