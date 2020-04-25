import React, { useEffect, useState, useRef } from 'react';
import debounce from 'utils/debounce';
import Props from './Content.types';
import { StyledContent } from './Content.styles';

const Content = ({ children }: Props): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const handleResize = () => {
    const rootHeight = document.querySelector('#root')?.clientHeight || 0;
    const elHeight = ref.current?.clientHeight || 0;

    setHeight(window.innerHeight - rootHeight + elHeight);
  };

  useEffect(() => {
    const handleResizeDebounce = debounce(handleResize);

    handleResize();
    window.addEventListener('resize', handleResizeDebounce);

    return () => {
      window.removeEventListener('resize', handleResizeDebounce);
    };
  }, []);

  return (
    <StyledContent height={height} ref={ref}>{children}</StyledContent>
  );
};

export default Content;
