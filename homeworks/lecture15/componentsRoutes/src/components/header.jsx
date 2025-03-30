import {useNavigate, useParams} from 'react-router-dom';
const Header = ({components, setComponents, colors}) => {
    
    const navigate = useNavigate();

    const {index} = useParams();

    const handleIndexSelect = (index) => {
        navigate(`/${index}`)
    }

    const handleColorSelect = (color) => {
        const componentsCopy = [...components];
        componentsCopy[index].color = color;
        console.log(componentsCopy);
        setComponents(componentsCopy);
    }

    return (
        <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "10px",
        }}
      >
        <select onChange={(e) => handleIndexSelect(parseInt(e.target.value))}>
          {components.map((component, index) => (
            <option value={index}>{component.value}</option>
          ))}
        </select>
        <select onChange={(e) => handleColorSelect(e.target.value)}>
          {colors.map((color) => (
            <option value={color}>{color}</option>
          ))}
        </select>
      </div>
    );
  };
  
  export default Header;
  