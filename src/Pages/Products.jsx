import { useParams } from "react-router-dom";

function Products() {
const { id } = useParams();


  return (
    <div>
      <h1>Products Page</h1>
      <p> Produit numero : {id}</p>
    </div>
  );
}
export default Products;