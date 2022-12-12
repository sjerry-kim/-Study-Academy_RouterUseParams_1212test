import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const Product = () => {
  const {id} = useParams();
  const [product, setProduct] = useState("");
  return (  
    <div>
      <h3>값을 입력 받아서 페이지를 이동합니다</h3>
      <input type="text" onChange={(e)=>{
        setProduct(e.target.value);
        }} />
      <Link to={`/product/${product}`}>페이지 이동</Link>
    </div>
  );
}

export default Product;