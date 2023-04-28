import React from "react";
import { Box, Button, Heading } from "@chakra-ui/react";

function Navbar() {

    const isHome = () => {
        return window.location.pathname === '/';
    }

    return (
        <Box bg="orange.100" borderBottom="1px" borderColor="gray.200">
            <Box display="flex" flexDir="row" justifyContent="space-between" alignItems="center" p={4}>
                <Box>
                    {isHome() ? null : (
                        <Button variant="link" colorScheme="orange" onClick={() => window.history.back()}>
                            voltar
                        </Button>
                    )}
                </Box>
                <Box>
                    <Heading as="h1" size="md">
                        BeeBetter 🐝
                    </Heading>
                </Box>
            </Box>
        </Box>
    );
}

export default Navbar;