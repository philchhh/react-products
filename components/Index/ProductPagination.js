import { useRouter } from "next/router";
import { Pagination } from "semantic-ui-react";
import Container from "../ui/Container";

function ProductPagination({ totalPages }) {
  const router = useRouter();

  return (
    <Container center>
      <Pagination
        defaultActivePage={1}
        totalPages={totalPages}
        onPageChange={(event, data) => {
          data.activPage === 1
            ? router.push("/")
            : router.push(`/?page=${data.activePage}`);
        }}
      />
    </Container>
  );
}

export default ProductPagination;
