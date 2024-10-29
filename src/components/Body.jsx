import Card from "./Card";

import { Data } from "../../Data";
import DataModal from "./DataModal";
import { useState } from "react";

const Body = () => {
  const [users, setUsers] = useState(Data);
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState("");

  const onSubmit = (data) => {
    users[id].name = data.name;
    users[id].email = data.email;
    users[id].phone = data.phone;
    users[id].url = data.url;
    users[id].imgurl = data.imageurl;
    setShowModal(false);
  };

  const handleShowModal = (status) => {
    setShowModal(status);
  };

  const handleId = (id) => {
    setId(id);
  };

  return (
    <div className="flex gap-4 flex-wrap">
      {showModal ? (
        <DataModal handleShowModal={handleShowModal} onSubmit={onSubmit} />
      ) : (
        ""
      )}

      {users.map((val) => (
        <Card
          handleId={handleId}
          key={val.id}
          handleShowModal={handleShowModal}
          value={val}
        />
      ))}
    </div>
  );
};
export default Body;