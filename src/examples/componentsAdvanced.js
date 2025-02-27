import React from 'react';
import { Button } from 'suomifi-ui-components';
import styled from 'styled-components';

/**
.fi-button.button--custom {
  background: #09ae88;
}
.fi-button.button--custom:hover {
  background: #e97025;
}
.fi-button.button--custom:active {
  background: #faaf00;
}
 */
import './customButton.css';

const CustomButton = styled(Button)({
  background: '#09ae88',
  '&:hover': { background: '#e97025' },
  '&:active': { background: '#faaf00' },
});

export const Example = () => (
  <>
    <CustomButton>Styled</CustomButton>
    <Button className="button--custom">Classname</Button>
  </>
);
