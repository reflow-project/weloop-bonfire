import * as React from 'react';
import Alert from 'ui/elements/Alert/index';
import { X } from 'react-feather';
import styled from 'ui/themes/styled';
import { Box } from 'rebass';

export const TopMessage: React.FC = () => {
  const [show, setShow] = React.useState(true);
  return show ? (
    <AlertWrap>
      <Alert variant="warning">
        <div style={{ textAlign: 'center' }}>
          This site is currently in active development. We are looking forward to reading your
          feedback and ideas in our{' '}
          <a
            href="https://github.com/reflow-project/weloop/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            Issues Tracker
          </a>
          <span
            style={{
              cursor: 'pointer',
              position: 'absolute',
              top: '10px',
              right: '10px'
            }}
            onClick={() => setShow(false)}
          >
            <X size={16} />
          </span>
        </div>
      </Alert>
    </AlertWrap>
  ) : null;
};

const AlertWrap = styled(Box)`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 4010;
`;
