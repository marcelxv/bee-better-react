
import React from "react";
import { Button, Box } from "@chakra-ui/react";

const ListQuestions = (
    { questions, setNewQuestion },
    { listQuestions, setListQuestions }
) => {
    return (
        <Box display="flex" flexDirection="column" flexWrap="wrap" m={2}>
            {questions.map((item, index) => (
                <Button
                    key={index}
                    h="50px"
                    maxW="sm"
                    whiteSpace={"normal"}
                    bg="gray.100"
                    borderRadius="lg"
                    boxShadow="md"
                    py={8}
                    px={4}
                    cursor="pointer"
                    mb={4}
                    wordBreak={"break-word"}
                    onClick={() => {
                        setNewQuestion(item);
                    }}
                >
                    {item}
                </Button>
            ))}
        </Box>
    );
};
export default ListQuestions;
