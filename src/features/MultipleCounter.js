import React, { useState } from "react";
import CounterGroup from "./CounterGroup";
import CounterSizeGenerator from "./CounterSizeGenerator";
import CounterGroupSum from "./CounterGroupSum";

export default function MultipleCounter() {
    const [size, setSize] = useState(0);
    const updateSize = (size) => {
        setSize(size);
    };
    const [sum, setSum] = useState(0);
    const updateSum = (change) => {
        setSum(sum + change);
    };

    const resetSum = () => {
        setSum(0);
    };

    return (
        <div>
            <CounterSizeGenerator updateSize={updateSize} resetSum={resetSum} />
            <CounterGroupSum sum={sum} />
            <CounterGroup size={size} updateSum={updateSum} />
        </div>
    );
}
