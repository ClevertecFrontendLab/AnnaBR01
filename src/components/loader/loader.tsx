import Lottie from 'lottie-react';

import loader from '../../loader.json';

import { StaledLoader } from './styles';

interface IProps {
  size?: number;
}

export const Loader = ({ size = 68 }: IProps) => (
  <StaledLoader data-test-id='loader'>
    <Lottie
      animationData={loader}
      loop={true}
      style={{
        height: size,
      }}
    />
  </StaledLoader>
);
