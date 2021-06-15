import './App.css';
import 'antd/dist/antd.css';// this is Ant css
import { Modal, Button } from 'antd';
import React, {useState} from 'react';


function App(){


const[isSelected,setIsSelected] = useState(false);
const [isModalVisible, setIsModalVisible] = useState(false)

  
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
	const onSelectingfile = () => {
   setIsSelected(true);
	};



return(
    <div>
      <br></br>
     <div class="inpt">
      <input  type="file" name="file" onChange={onSelectingfile} />
     <Button onClick={showModal}>Submit</Button>
			
  {isSelected ? (
      <div>
         <Modal title="Success Message" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <p>File is uploaded successfully !!!</p>
         </Modal>
     </div>
) : (
        <Modal title="Error Message " visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
	   <p>Please choose the file to upload !!!</p>
        </Modal>
			   )
   }
      </div>
</div>
	)
}

export default App;

