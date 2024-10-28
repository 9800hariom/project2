import { useState } from "react";
import Card from "./Card";
import { Data } from "../../Data";
import DataModal from "./DataModal";

const Body = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setIsModalOpen(false); // Close modal on submit
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex gap-4 flex-wrap">
      <button onClick={openModal} className="bg-blue-500 text-white p-2 rounded-lg">
        Open Modal
      </button>
      {isModalOpen && <DataModal onSubmit={onSubmit} />}
      {Data.map((val, index) => (
        <Card key={index} value={val} />
      ))}
    </div>
  );
};

export default Body;
