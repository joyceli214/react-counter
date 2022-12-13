// react fucntional component: rfc

import React, { useState, useEffect } from "react";

export default function Counter(props) {
    const { updateSum } = props;
    const [number, setNumber] = useState(0);
    const onIncrease = () => {
        setNumber(number + 1);
        updateSum(1);
    };
    const onDecrease = () => {
        setNumber(number - 1);
        updateSum(-1);
    };
    useEffect(() => {
        setNumber(0);
    }, [props.size]);

    return (
        <div>
            <button onClick={onIncrease}>+</button>
            <span>{number}</span>
            <button onClick={onDecrease}>-</button>
        </div>
    );
}
