import * as React from 'react';
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Box, Flex, Spacer, Text } from '@chakra-ui/layout';
import PageContainer from '../../../components/atoms/page_container';

function SignUpPage(): ReactJSXElement {
    return <Box >
        <PageContainer>
            <Flex>
                <Text>Tracking</Text>
                <Spacer />
                <Text>Already have an account? Sign in.</Text>
            </Flex>
        </PageContainer>
        <PageContainer>

        </PageContainer>
    </Box>
}

export default SignUpPage;