import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => (
  <SearchForm onSubmit={() => {}}>
    <SearchInput
      type='text'
      onChange={() => {}}
      value=''
      placeholder='Search...'
    />
    <SearchBtn type='submit'>
      <BiSearch />
    </SearchBtn>
  </SearchForm>
);

export default SearchBar;

const SearchForm = styled.form`
  display: flex;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 20px;
  border: 0;
  border-radius: 20px 0 0 20px;
  outline: none;
`;
const SearchBtn = styled.button`
  padding: 10px 12px;
  border: 0;
  border-radius: 0 20px 20px 0;
`;
