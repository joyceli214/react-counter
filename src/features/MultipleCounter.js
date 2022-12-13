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
    return (
        <div>
            <CounterSizeGenerator updateSize={updateSize} />
            <CounterGroupSum sum={sum} />
            <CounterGroup size={size} sum={sum} updateSum={updateSum} />
        </div>
    );
}
