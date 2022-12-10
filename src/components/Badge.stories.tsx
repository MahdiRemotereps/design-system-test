import React from 'react';
import { Badge } from './Badge';

export default {
  title: 'Badge',
  component: Badge,
};

export const Basic = (args) => <Badge {...args}>Badge</Badge>;

export const All = () => (
  <div>
    <Badge status="positive">Positive</Badge>
    <Badge status="negative">Negative</Badge>
    <Badge status="neutral">Neutral</Badge>
    <Badge status="error">Error</Badge>
    <Badge status="warning">Warning</Badge>
    <Badge status="selected">Selected</Badge>
  </div>
);

export const WithIcon = () => <Badge status="warning">with icon</Badge>;
