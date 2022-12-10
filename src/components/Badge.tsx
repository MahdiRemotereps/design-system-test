import { styled, css } from '@storybook/theming';

export const Badge = styled.div<{
  status: 'positive' | 'negative' | 'neutral' | 'error' | 'warning' | 'selected';
}>`
  display: inline-block;
  vertical-align: top;
  line-height: 12px;
  padding: 4px 12px;
  border-radius: 3em;

  svg {
    height: 12px;
    width: 12px;
    margin-right: 4px;
    margin-top: -2px;
  }

  ${(props) => props.status === 'positive' && css``};

  ${(props) => props.status === 'negative' && css``};

  ${(props) => props.status === 'warning' && css``};

  ${(props) => props.status === 'error' && css``};

  ${(props) => props.status === 'selected' && css``};

  ${(props) => (props.status === 'neutral' || props.status === undefined) && css``};
`;
