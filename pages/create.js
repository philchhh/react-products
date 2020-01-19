import React from "react";

import Message from "../components/ui/Messages";
import Button from "../components/ui/Button";
import Form from "../components/ui/form-elements/Form";
import Input from "../components/ui/form-elements/Input";
import Textarea from "../components/ui/form-elements/Textarea";
import Segment from "../components/ui/Segment";
import Image from "../components/ui/Image";
import axios from "axios";
import baseUrl from "../utils/baseUrl";
import catchErrors from "../utils/catchErrors";

const INITIAL_PRODUCT = {
  name: "",
  price: "",
  media: "",
  description: ""
};

function CreateProduct() {
  const [product, setProduct] = React.useState(INITIAL_PRODUCT);
  const [mediaPreview, setMediaPreview] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    const isProduct = Object.values(product).every(el => Boolean(el));
    isProduct ? setDisabled(false) : setDisabled(true);
  }, [product]);

  const handleChange = event => {
    const { name, value, files } = event.target;
    if (name === "media") {
      setProduct(prevState => ({ ...prevState, media: files[0] }));
      setMediaPreview(window.URL.createObjectURL(files[0]));
    } else {
      setProduct(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = async event => {
    try {
      event.preventDefault();
      setLoading(true);
      setError("");
      const mediaUrl = await handleImageUpload();
      const url = `${baseUrl}/api/product`;
      const payload = { ...product, mediaUrl }; // name: "" = error
      const response = await axios.post(url, payload);

      setProduct(INITIAL_PRODUCT);
      setSuccess(true);
    } catch (error) {
      catchErrors(error, setError);
    } finally {
      setLoading(false);
      setMediaPreview("");
    }
  };

  const handleImageUpload = async () => {
    const data = new FormData();
    data.append("file", product.media);
    data.append("upload_preset", "reactreserve");
    data.append("cloud_name", "pchampagne001");
    const response = await axios.post(process.env.CLOUDINARY_URL, data);
    const mediaUrl = response.data.url;
    return mediaUrl;
  };

  return (
    <div className="content-main">
      <h2>Create New Product</h2>

      <Form
        loading={loading}
        success={success}
        error={Boolean(error)}
        onSubmit={handleSubmit}
      >
        {error && (
          <Message
            error
            header="Oops!"
            content="Error product could not be saved."
          />
        )}
        {success && (
          <Message
            success
            header="Success!"
            content="Your product has been saved!"
          />
        )}
        <Segment loading={loading}>
          <Input
            name="name"
            label="Name"
            placeholder="name"
            value={product.name}
            onChange={handleChange}
          />
          <Input
            name="price"
            label="Price"
            placeholder="Price"
            value={product.price}
            min="0.00"
            step="0.01"
            type="number"
            onChange={handleChange}
          />
          <Input
            name="media"
            label="Media"
            type="file"
            accept="image/*"
            content="Select Image"
            onChange={handleChange}
          />
        </Segment>

        {mediaPreview && (
          <Image src={mediaPreview} width="160" centered size="small" />
        )}

        <Textarea
          name="description"
          label="Description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
        />
        <Button
          commonBtn
          disabled={disabled || loading}
          label="Submit"
          type="submit"
        />
      </Form>
    </div>
  );
}

export default CreateProduct;
