import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  margin: 3rem auto;
  width: 600px;
`;

const Input = styled.input`
  border-radius: 25px;
  border: 1px solid #dcdcdc;
  padding: 20px;
  width: 500px;
  height: 30px;
  font-size: 1.1rem;
  text-align: center;
  color: #000;
  &:hover {
    box-shadow: 1px 1px 8px 1px #dcdcdc;
  }
  &:focus-within {
    box-shadow: 1px 1px 8px 1px #dcdcdc;
    outline: none;
  }
  &::placeholder {
    font-size: 0.9rem;
    font-style: italic;
  }
`;

const Search = ({ searchText, onSearchTextChange }) => {
  const changeText = (event) => onSearchTextChange(event.target.value);

  return (
    <Container>
      <Input
        type="search"
        title="Search"
        value={searchText}
        placeholder="Search project..."
        onChange={changeText}
      />
    </Container>
  );
};

Search.defaultProps = {
  searchText: "",
};

Search.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func,
};

export default Search;
