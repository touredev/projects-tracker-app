import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 3rem auto;
  width: 500px;
`;

const Input = styled.input`
  border-radius: 25px;
  border: 1px solid #dcdcdc;
  padding: 20px;
  width: 100%;
  height: 30px;
  font-size: 0.9rem;
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

type SearchProps = {
  searchText?: string,
  onSearchTextChange: (textValue: string) => void
};

const Search = ({ searchText="", onSearchTextChange }: SearchProps) => {
  const changeText = (event: React.ChangeEvent<HTMLInputElement>) => onSearchTextChange(event.target.value);

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

export default Search;
