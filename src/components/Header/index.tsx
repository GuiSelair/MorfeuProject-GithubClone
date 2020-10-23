import React, { FormEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeName } from '../../styles/themes';

import { Container, GithubLogo, SearchForm } from './styles';

interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<Props> = ({ themeName, setThemeName }) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      navigate(`/${search.toLowerCase().trim()}`);
    },
    [navigate, search],
  );

  const toggleTheme = useCallback(() => {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  }, [setThemeName, themeName]);

  return (
    <Container>
      <GithubLogo onClick={toggleTheme} />
      <SearchForm onSubmit={handleSubmit}>
        <input
          value={search}
          onChange={e => setSearch(e.currentTarget.value)}
          placeholder="Enter username ou repo..."
        />
      </SearchForm>
    </Container>
  );
};

export default Header;
