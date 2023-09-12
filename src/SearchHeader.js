import { useState } from "react";

function SearchHeader({ search }) {
  const [valueInput, setValueInput] = useState(""); //arama kelimesini tutma
  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(valueInput);
  };

  const handleChange = (event) => {
    setValueInput(event.target.value); //input içinin boş olmasını sağlayan ve değiştiren blok
  };

  return (
    <div className="SeacrhDiv">
      <form onSubmit={handleFormSubmit}>
        <label> Ne Arıyorsunuz?</label>
        <input value={valueInput} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchHeader;
