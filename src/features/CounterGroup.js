import React from "react";
import Counter from "./Counter";

export default function CounterGroup(props) {
    const { size, updateSum } = props;
    return Array(props.size)
        .fill(0)
        .map((item, index) => {
            return <Counter key={index} size={size} updateSum={updateSum} />;
        });
}
