import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 11px 16px;
`;

export const GithubLogo = styled(FaGithub)`
  fill: var(--logo);
  width: 32px;
  flex-shrink: 0;
  height: 32px;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
export const SearchForm = styled.form`
  width: 100%;
  padding-left: 16px;

  input {
    background: var(--search);
    border-radius: 6px;
    padding: 7px 12px;
    width: 100%;
    transition: width 0.2s ease-out, color 0.2s ease-out;

    &:focus {
      width: 318px;
    }
  }
`;
