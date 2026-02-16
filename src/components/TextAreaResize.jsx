import { useRef, useState } from "react";

export default function TextAreaResize() {
  const textareaRef = useRef(null);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);

    const el = textareaRef.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = el.scrollHeight + "px";
    }
  };

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={handleChange}
      style={{ resize: "none", overflow: "hidden" }}
      rows={4}
      placeholder="Írd le röviden mivel keresnél meg minket, és mi felvesszük veled a kapcsolatot!"
    />
  );
}
