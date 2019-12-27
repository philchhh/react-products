import { useRouter } from "next/router";
import { Pagination } from "semantic-ui-react";
import Container from "../ui/Container";

function ProductPagination({ totalPages }) {
  const router = useRouter();
  const getActivePage = router.query.page ? router.query.page : 1;

  return (
    <Container center>
      <Pagination
        defaultActivePage={getActivePage}
        totalPages={totalPages}
        onPageChange={(event, data) => {
          data.activePage === 1
            ? router.push("/")
            : router.push(`/?page=${data.activePage}`);
        }}
      />
    </Container>
  );
}

export default ProductPagination;
