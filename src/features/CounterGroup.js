import React from "react";
import Counter from "./Counter";

export default function CounterGroup(props) {
    const { sum, updateSum } = props;
    return Array(props.size)
        .fill(0)
        .map((item, index) => {
            return <Counter key={index} sum={sum} updateSum={updateSum} />;
        });
}
