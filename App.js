import './App.css';
import 'antd/dist/antd.css';// this is Ant css
import { Modal, Button,Input,Form } from 'antd';
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

  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 11,
      span: 10,
    },
  };

return(
    <div>
    <br></br>
      <Form
       {...layout}
      name="Details"
      >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
      <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
      <Input />
      </Form.Item>
      <Form.Item
        label="Contact Number"
        name="contact number"
        rules={[{ required: true, message: 'Please input your number!' }]}
      >
      <Input />
      </Form.Item>
      <Form.Item label="Choose File"
      name="choose file">
      <Input  type="file"  onChange={onSelectingfile} />
      </Form.Item>
     
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" onClick={showModal}>
          Submit
        </Button>
      </Form.Item>
        </Form>
  {isSelected ? (
      <div>
         <Modal title="Success Message" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <p>Your data is uploaded successfully !!!</p>
         </Modal>
     </div>
) : (
        <Modal title="Error Message " visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
	   <p>Please fill your data !!!</p>
        </Modal>
			   )
   }
      </div>

	)
}

export default App;
