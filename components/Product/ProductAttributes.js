import React from "react";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import { useRouter } from "next/router";

function ProductAttributes({ description, _id, user }) {
  const [modal, setModal] = React.useState(false);
  const router = useRouter();

  const isRoot = user && user.role === "root";
  const isAdmin = user && user.role === "admin";
  const isRootOrAdmin = isRoot || isAdmin;

  async function handleDelete() {
    const url = `${baseUrl}/api/product`;
    const payload = { params: { _id } };
    await axios.delete(url, payload);
    router.push("/");
  }

  return (
    <>
      <h2>About this product</h2>
      <p>{description}</p>

      {isRootOrAdmin && (
        <>
          <Button
            commonBtn
            onClick={() => setModal(true)}
            label="Delete Product"
          />

          {modal && (
            <Modal openModal={modal}>
              <Modal.Header>Confirm Delete</Modal.Header>
              <Modal.Content>
                <p>Are you sure you want to delete this product?</p>
              </Modal.Content>
              <Modal.Actions>
                <Button
                  commonBtn
                  onClick={() => setModal(false)}
                  label="Cancel"
                />
                <Button commonBtn onClick={handleDelete} label="Delete" />
              </Modal.Actions>
            </Modal>
          )}
        </>
      )}
    </>
  );
}

export default ProductAttributes;
