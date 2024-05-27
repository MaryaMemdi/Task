import { useState, useRef } from "react";

const Edit = ({ title }) => {
  console.log(title);
  const [text, setText] = useState(title);
  const [isEditing, setIsEditing] = useState(false);
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSave = () => {
    setText(textareaRef.current.value);
    setIsEditing(false);
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const textareaRef = useRef(null);
  return (
    <div>
      {isEditing ? (
        <textarea
          ref={textareaRef}
          value={text}
          onChange={handleChange}
        ></textarea>
      ) : (
        <p>{text}</p>
      )}
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Edit;

// اینجا ما یه مشکل برای ذخیره تغیرات توی فضای ذخیره داریم که ایشالله بعد بهش می رسیم
