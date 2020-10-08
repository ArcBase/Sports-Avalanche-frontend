import axios from "axios";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;


//  Signs Users Up
const sendData = async (e) => {
  e.preventDefault()
  const host = ''
  const endpoint = host + "";
 
  const fName = e.target.elements.firstname.value;
  const lName = e.target.elements.lastname.value
  const email =  e.target.elements.email.value;
  const phone =  e.target.elements.phone.value
  const videoUploaod = e.target.elements.playerVideo.files[0]

  console.log(fName , lName , email, phone,videoUploaod)

  let fd = new FormData();
  fd.append("fName", fName);

  // axios.post(endpoint, fd);
};



export default function signUpForm() {
  return (
    <>
      <div className="playSignUp-container">
        <form onSubmit={(e)=>{sendData(e)}} >
          <div class="container">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>

            <label for="email">
              <b>First Name</b>
            </label>
            <input
              type="text"
              placeholder="Your First Name"
              name="firstname"
              required
            />

            <label for="email">
              <b>Last Name</b>
            </label>
            <input
              type="text"
              placeholder="Your First Name"
              name="lastname"
              required
            />

            <label for="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Your First Name"
              name="email"
              required
            />

            <label for="Phone">
              <b>Phone</b>
            </label>
            <input
              type="text"
              placeholder="Your First Name"
              name="phone"
              required
            />

          <input
              type="file"
              accept="image/*" name="image" id="file"
              name="playerVideo"
              required
            />

            <button type="submit" class="registerbtn">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

{
  /* 
    <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files
    </p>
  </Dragger> */
}
