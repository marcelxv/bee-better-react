import { Box, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function ContinueButton({ isValid, link, onClick }: { isValid: boolean; link: string; onClick?: any }) {
    return (
        <Box position="fixed" bottom="0" p="0.2rem" zIndex="0" width="100%" bg="white">
            <Link to={link}>
                <Button
                    onClick={onClick}
                    colorScheme="orange"
                    variant="solid"
                    disabled={!isValid}
                    p="10px 30px"
                    m="20px 0"
                >
                    próxima etapa
                </Button>
            </Link>
        </Box>
    )
}

export default ContinueButton;