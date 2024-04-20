import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {useSelector} from "react-redux";
import { RootState } from "../../store/store";
import "./TextEditor.css";

const TextEditor = () => {
    const users = useSelector((state: RootState) => state.user.users);
    const len = users.length;
    
    const userDataHTML = (len > 0) ? 
        `<div key=${users[len - 1].id}>
            <h2>${users[len - 1].name}</h2>
            <p><strong>Email:</strong> ${users[len - 1].email}</p>
            <p><strong>Address:</strong> ${users[len - 1].address}</p>
            <p><strong>Phone:</strong> ${users[len - 1].phone}</p>
        </div>` : '';

  return (
    <ReactQuill theme="snow" value={userDataHTML}/>
  )
}

export default TextEditor;