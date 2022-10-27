import styled from "styled-components";

function MovieSlide(props) {
  return (
    <Container>
      <Image
        src={`https://image.tmdb.org/t/p/w185/${props.data.poster_path}`}
      ></Image>
    </Container>
  );
}

export default MovieSlide;

const Container = styled.div`
  flex: 0 0 25%;
  margin: 0.2rem;
  border-radius: 2px;
  position: relative;
  aspect-ratio: 16/9;
  overflow: visible;
  transition: transform 0.5s ease-in-out;
  cursor: pointer;

  &:hover ~ div {
    transform: translateX(36%) !important;
  }
  &:hover {
    transform: translateX(0) !important;
  }
`;

const Image = styled.div`
  background: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-clip: content-box;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: block;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.5) !important;
    /* transform: translateX(0) !important; */
    z-index: 1;
  }
`;
