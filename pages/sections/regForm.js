import { Form, Input, Button, Checkbox ,Upload } from "antd";
import axios from "axios";


//  Signs Users Up 
const sendData = async()=>{
    const endpoint = host + ''

    let fd = new FormData()
    fd.append('','')

    axios.post(endpoint,fd)
}

export default function signUpForm() {
  return (
    <>
      <Form
        onFinish = ''
        name="basic"
        initialValues={{ remember: true }}
        
      >
        <Form.Item
          name="fName"
          rules={[{ required: true, message: "Please input your First Name!" }]}
        >
          <Input placeholder ='First Name' />
        </Form.Item>

        <Form.Item
          name="lName"
          rules={[{ required: true, message: "Please input your Last Name" }]}
        >
          <Input placeholder ='First Name' />
        </Form.Item>

        <Form.Item
          name="Email"
          rules={[{ required: true, message: "Please input your Email" }]}
        >
          <Input placeholder ='First Name' />
        </Form.Item>

        <Form.Item
          name="Phone"
          rules={[{ required: true, message: "Please input your phone!" }]}
        >
          <Input placeholder ='First Name' />
        </Form.Item>


        <Form.Item
          name="fName"
          rules={[{ required: true, message: "Please input your first Name!" }]}
        >
          <Input placeholder ='First Name' />
        </Form.Item>


        
      </Form>
    </>
  );
}
