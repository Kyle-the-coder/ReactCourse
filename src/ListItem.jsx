const ListItem = ({ children, isComplete }) => {
  return (
    <>
      <label>
        <input type="checkbox" checked={isComplete} />
        {children}
      </label>
    </>
  );
};

export default ListItem;
