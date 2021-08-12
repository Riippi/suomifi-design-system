import React, { ReactNode } from 'react';
import { Link } from '@wapps/gatsby-plugin-i18next';
import { defaultSuomifiTheme } from 'suomifi-ui-components';
import { focusOutline } from './utils/outline';
import { isFrontPage } from 'components/LinkUtil';

const NavItem = ({ to, children }: Props): JSX.Element => (
  <Link
    to={to}
    css={[
      {
        padding: defaultSuomifiTheme.spacing.insetM,
        lineHeight: '2.8rem',
        whiteSpace: 'nowrap',
        color: defaultSuomifiTheme.colors.blackBase,
        textDecoration: 'none',
        '&:hover': {
          borderBottom: `4px solid ${defaultSuomifiTheme.colors.highlightBase}`,
        },
      },
      `&:focus { ${focusOutline} }`,
    ]}
    getProps={({ isCurrent, isPartiallyCurrent }) => {
      if (isCurrent || (!isFrontPage(to) && isPartiallyCurrent)) {
        return {
          style: {
            borderBottom: `4px solid ${defaultSuomifiTheme.colors.highlightBase}`,
          },
        };
      }
    }}
  >
    {children}
  </Link>
);

interface Props {
  to: string;
  children: ReactNode;
}

export default NavItem;
