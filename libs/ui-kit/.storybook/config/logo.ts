interface LogoConfig {
  path: string;
  type?: string;
  rel?: string;
}

const defaultConfig: LogoConfig = {
  path: './kuchen-logo.svg',
  type: 'image/svg+xml',
  rel: 'icon',
};

export const getStorybookLogo = (config: Partial<LogoConfig> = {}) => {
  const { path, type, rel } = { ...defaultConfig, ...config };
  return `<link rel="${rel}" type="${type}" href="${path}" />`;
};
