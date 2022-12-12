import React, { useState } from "react";
import CounterGroup from "./CounterGroup";
import CounterSizeGenerator from "./CounterSizeGenerator";

export default function MultipleCounter() {
    const [size, setSize] = useState(0);
    const updateSize = (size) => {
        setSize(size);
    };
    return (
        <div>
            <CounterSizeGenerator updateSize={updateSize} />
            <CounterGroup size={size} />
        </div>
    );
}
