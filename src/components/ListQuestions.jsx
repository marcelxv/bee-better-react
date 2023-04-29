
import React from "react";
import { Text } from "@chakra-ui/react";

const ListQuestions = (
    { questions, setNewQuestion },
    { listQuestions, setListQuestions }
) => {
    return (
        <>
            {questions.map((item, index) => (
                <Text
                    key={index}
                    size="sm"
                    textAlign="center"
                    bg="yellow.300"
                    borderRadius="lg"
                    p={2}
                    cursor="pointer"
                    mb={2}
                    textOverflow="ellipsis"
                    onClick={() => {
                        setNewQuestion(item);
                    }}
                >
                    {item}
                </Text>
            ))}
        </>
    );
};
export default ListQuestions;
