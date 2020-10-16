import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  > p {
    font-size: 16px;
  }
`;

export const Breadcrumb = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;

  flex-wrap: nowrap;
  white-space: nowrap;

  font-size: 18px;

  > a {
    color: var(--link);
    text-decoration: none;

    &:focus,
    &:hover {
      text-decoration: underline;
    }

    &.username {
      margin-left: 8px;
    }

    &.reponame {
      font-weight: 600;
    }
  }

  > span {
    padding: 0 5px;
  }
`;

export const Stats = styled.ul`
  margin-top: 16px;
  display: flex;
  align-items: center;

  > li {
    display: flex;
    align-items: center;
    margin-right: 9px;

    > * {
      color: var(--gray);
      margin-right: 7px;
    }
  }
`;

export const LinkButton = styled.a`
  margin-top: 24px;
  background: var(--gray-dark);
  padding: 12px 7px;
  border-radius: 24px;
  width: max-content;
  text-decoration: none;

  display: flex;
  align-items: center;

  > span {
    color: var(--primary);
  }

  > svg {
    fill: var(--primary);
    margin-right: 10px;
  }
`;
