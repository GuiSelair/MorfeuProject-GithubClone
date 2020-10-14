import styled, { css } from 'styled-components';
import { RiBookmarkLine, RiStarLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';

const iconsCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const Container = styled.div``;

export const Topside = styled.div``;

export const Botside = styled.div``;

export const RepoIcon = styled(RiBookmarkLine)`
  ${iconsCSS}
`;

export const StarIcon = styled(RiStarLine)`
  ${iconsCSS}
`;

export const ForkIcon = styled(AiOutlineFork)`
  ${iconsCSS}
`;
