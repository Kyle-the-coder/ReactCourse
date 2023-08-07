const ListItem = ({ children, isComplete }) => {
  return (
    <>
      <div>
        <input type="checkbox" checked={isComplete} />
        {children}
      </div>
    </>
  );
};

export default ListItem;
