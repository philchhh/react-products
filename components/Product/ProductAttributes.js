import React from "react";
import { Button, Modal } from "semantic-ui-react";
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
    console.log(axios.delete(url, payload));
    router.push("/");
  }

  return (
    <>
      <h2>About this product</h2>
      <p>{description}</p>

      {isRootOrAdmin && (
        <>
          <Button
            onClick={() => setModal(true)}
            icon="trash alternate outline"
            color="red"
            content="Delete Product"
          />
          <Modal open={modal} dimmer="blurring">
            <Modal.Header>Confirm Delete</Modal.Header>
            <Modal.Content>
              <p>Are you sure you want to delete this product?</p>
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={() => setModal(false)} content="Cancel" />
              <Button
                onClick={handleDelete}
                negative
                icon="trash"
                content="Delete"
                labelPosition="right"
              />
            </Modal.Actions>
          </Modal>
        </>
      )}
    </>
  );
}

export default ProductAttributes;
