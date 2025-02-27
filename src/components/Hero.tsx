import React from 'react';
import { defaultSuomifiTheme } from 'suomifi-ui-components';

import { Heading, Text, Paragraph } from 'components/ResponsiveComponents';
import { Desktop, Mobile, Tablet } from 'components/Responsive';
import SuomiFiLogo from 'icons/suomifi.svg';
import Background from './Hero_bg.png';

const Content = ({
  title,
  description,
  center = false,
  compact = false,
}: Props & { center?: boolean; compact?: boolean }): JSX.Element => (
  <div
    style={{
      margin: 0,
      padding: compact ? '2rem 1rem 5rem 1rem' : '6rem 1rem 8rem 1rem',
      background: `no-repeat center url(${Background}) ${defaultSuomifiTheme.colors.brandBase}`,
      backgroundSize: compact ? 'auto' : 'cover',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <div
      style={{
        width: '100%',
        maxWidth: 1058,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: center ? 'center' : 'space-between',
      }}
    >
      <div>
        <SuomiFiLogo
          style={{
            width: '1em',
            height: '1em',
            fill: defaultSuomifiTheme.colors.whiteBase,
            fontSize: compact ? '30px' : '64px',
            margin: center ? '0 0 1rem' : '0 2rem 1rem 0',
          }}
        />
      </div>
      <div
        style={{
          flex: center ? '1 1 100%' : '1 1 70%',
          textAlign: center ? 'center' : 'initial',
        }}
      >
        <Heading
          variant="h1hero"
          color="whiteBase"
          style={{ textAlign: 'inherit' }}
        >
          {title}
        </Heading>
        {description && (
          <Paragraph
            variant="lead"
            style={{
              margin: compact ? '1.5rem 0 0 0' : '3rem 0 0 0',
              textAlign: 'inherit',
            }}
          >
            <Text variant="lead" color="whiteBase">
              {description}
            </Text>
          </Paragraph>
        )}
      </div>
    </div>
  </div>
);

const Hero = ({ title, description }: Props): JSX.Element => (
  <>
    <Desktop>
      <Content title={title} description={description} />
    </Desktop>
    <Tablet>
      <Content title={title} description={description} />
    </Tablet>
    <Mobile>
      <Content title={title} description={description} center compact />
    </Mobile>
  </>
);

interface Props {
  title: string;
  description: string;
}

export default Hero;
