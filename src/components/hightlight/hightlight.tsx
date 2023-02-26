/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { StyledHightlight } from './styles';

interface IProps {
  filter: string;
  str: string;
}

export const Hightlight = ({ filter, str }: IProps): any => {
  if (!filter) return <span>{str}</span>;
  const regexp = new RegExp(filter, 'ig');
  const matchValue = str.match(regexp);

  if (matchValue) {
    return str.split(regexp).map((s, index, array) => {
      if (index < array.length - 1) {
        const c = matchValue.shift();

        return (
          <React.Fragment key={uuidv4()}>
            {s}
            <StyledHightlight data-test-id='highlight-matches'>{c}</StyledHightlight>
          </React.Fragment>
        );
      }

      return <span key={uuidv4()}>{s}</span>;
    });
  }

  return <span>{str}</span>;
};
