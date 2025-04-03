import { colors } from '../theme/colors';

export const getManagerStyles = () => `
  nav.sidebar-container,
  div[role="main"] > div:first-child {
    background-color: ${colors.sidebar.bg} !important;
  }
  nav.sidebar-container *,
  div[role="main"] > div:first-child * {
    color: ${colors.sidebar.text} !important;
  }
  nav.sidebar-container button:hover {
    color: ${colors.sidebar.hover} !important;
  }
  nav.sidebar-container [data-selected="true"] {
    color: ${colors.sidebar.selected} !important;
  }
`;
