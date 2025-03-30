import CardComponent from './cardComponent' 
import { useParams } from 'react-router-dom';
import {useContext} from 'react';
import { componentContext } from './layout';

const DummyComponent = () => {
    const {index} = useParams();
    const {components, setComponents} = useContext(componentContext);

    return (
      <div>
        <CardComponent
            components={components}
            id={index}
            setComponents={setComponents}
        />
      </div>
    );
  };
  
  export default DummyComponent;
  