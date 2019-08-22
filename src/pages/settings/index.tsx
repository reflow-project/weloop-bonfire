import * as React from 'react';
import { graphql, OperationOption } from 'react-apollo';
import { Helmet } from 'react-helmet';
import { compose, withState } from 'recompose';
// import media from 'styled-media-query';
import { Flex, Box } from 'rebass';
import Loader from '../../components/elements/Loader/Loader';
import Sidebar from './sidebarSettings';
import { APP_NAME } from '../../constants';
import styled from '../../themes/styled';
import CommentType from '../../types/Comment';
import GeneralInfo from './generalInfo';
import Preferences from './preferences';
import { HomeBox } from '../../sections/layoutUtils';
import media from 'styled-media-query';

const getSettings = require('../../graphql/me.graphql');

interface Props {
  data: any;
  switch: string;
  onSwitch(string): string;
  history: any;
}

const withGetSettings = graphql<
  {},
  {
    data: {
      comment: CommentType;
    };
  }
>(getSettings) as OperationOption<{}, {}>;

const Component = (props: Props) => {
  const { data } = props;
  if (data.error) {
    return 'error...';
  } else if (data.loading) {
    return <Loader />;
  }
  return (
    <>
      <Helmet>
        <title>{APP_NAME} > Settings</title>
      </Helmet>
      <SidebarComponent
        style={
          props.switch === 'sidebar'
            ? { display: 'block' }
            : { position: 'relative' }
        }
      >
        <Sidebar switch={props.switch} onSwitch={props.onSwitch} />
      </SidebarComponent>

      {props.switch === 'general' ? (
        <SettingBox>
          <FormWrapper>
            <GeneralInfo
              profile={data.me}
              history={props.history}
              switch={props.switch}
              onSwitch={props.onSwitch}
            />
          </FormWrapper>
        </SettingBox>
      ) : props.switch === 'preferences' ? (
        <SettingBox>
          <FormWrapper>
            <Preferences switch={props.switch} onSwitch={props.onSwitch} />
          </FormWrapper>
        </SettingBox>
      ) : null}
    </>
  );
};

const SettingBox = styled(HomeBox)`
  border-right: 1px solid ${props => props.theme.styles.colors.lightgray};
  ${media.lessThan('1005px')`
border-left: 1px solid ${props => props.theme.styles.colors.lightgray};
  `};
`;

const FormWrapper = styled(Box)`
  width: 100%;
`;

const SidebarComponent = styled(Flex)`
  flex-grow: 1;
  z-index: 3;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
  height: 100%;
  ${media.lessThan('1005px')`
  display: none;
  `};
`;

export default compose(
  withGetSettings,
  withState('switch', 'onSwitch', 'general')
)(Component);
