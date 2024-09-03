import ReactLoading from 'react-loading';
import styled from "@emotion/styled";

const Loader: React.FC<any> = () => {
  return (
    <Container>
      <ReactLoading type="cylon" color="#165248" height={50} width={100} />
    </Container>
  );
};

export default Loader;

const Container = styled.div`
  display:flex;
  justify-content:center;
  align-content:center;
  height:100vh;
  background-color:#f0f0f0;
`