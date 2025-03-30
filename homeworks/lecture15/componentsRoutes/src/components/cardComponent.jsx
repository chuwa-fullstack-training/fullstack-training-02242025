const CardComponent = ({ components, id, setComponents }) => {
    const handleValueChange = (value) => {
      const componentsCopy = [...components];
      componentsCopy[id].value = value;
      setComponents(componentsCopy);
    };

  
    return (
      <div
        style={{
          backgroundColor: `${components[id].color}`,
          border: "solid 1px grey",
          padding: "10px",
          height: "100px",
        }}
      >
        <div>Component name: </div>
        <input
          type="text"
          value={components[id].value}
          onChange={(e) => handleValueChange(e.target.value)}
        />
      </div>
    );
  };

export default CardComponent;