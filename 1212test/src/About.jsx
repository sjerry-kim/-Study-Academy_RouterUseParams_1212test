import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (  
    <div>
      <h3>아래 버턴을 누르면 Home으로 갑니다</h3>
      <button onClick={()=>{navigate('/')}}>Home으로 가기</button>
    </div>
  );
}

export default About;