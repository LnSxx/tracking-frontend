import * as React from 'react';
import { Box, Container } from '@chakra-ui/layout';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

interface PageContainerProps {
    children?: React.ReactNode,
}

const pageContainerDefaultProps: PageContainerProps = {
  children: <Box />,
};

function PageContainer(
  {
    children,
  }: PageContainerProps,
): ReactJSXElement {
  return (
    <Box width="100vw">
      <Container maxW="container.lg">
        {children}
      </Container>
    </Box>
  );
}

PageContainer.defaultProps = pageContainerDefaultProps;

export default PageContainer;
