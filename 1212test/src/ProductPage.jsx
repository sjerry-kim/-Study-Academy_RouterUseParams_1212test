import { useParams } from "react-router-dom";

const ProductPage = () => {
  const {id} = useParams();
  return ( 
    <div>
      <h3>{id}</h3>
      상품의 이름으로 상품페이지를 출력하고 있습니다
    </div>
  );
}

export default ProductPage;