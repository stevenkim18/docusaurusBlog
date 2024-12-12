import React from 'react';
import DocItem from '@theme-original/DocItem';
import type DocItemType from '@theme/DocItem';
import Comment from '../../components/HomepageFeatures/Comment';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof DocItemType>;

export default function DocItemWrapper(props: Props): JSX.Element {
  return (
    <>
      <DocItem {...props} />
      <Comment />
    </>
  );
}
