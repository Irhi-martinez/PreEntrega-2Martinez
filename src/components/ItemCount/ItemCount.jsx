import { useEffect, useState, useRef } from "react";
import { Flex,Button,Text } from "@chakra-ui/react";

export const ItemCount = () => {
    const [ state, setState] = useState(0);

    const handleAdd = () => {
setState(state + 1);
    };

    const handleRemove = () => {
        setState(state - 1);
    };

    useEffect(() => {
        console.log("useEffect con dependencias vacias");
    },[]);


    return(
        <Flex>
            <button onClick={handleRemove}>-</button>
            <text>{state}</text>
            <button onClick={handleAdd}>+</button>
        </Flex>
    );
 };