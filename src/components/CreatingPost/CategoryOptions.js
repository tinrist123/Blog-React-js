import React, { useState, useEffect } from 'react';


export default function CategoryOptions({ url, name, value }) {
    const [loading, setLoading] = useState(true);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        fetch(url).then(res => res.json()).then(
            data => setOptions(data), setLoading(false),
        );
    }, [url]);


    if (loading) return <div>Loading...</div>;

    return (
        <select class={name} name={name}>
            {options.map((option) => {
                return <option key={option.Alias} value={option.id}>{option[value]}</option>
            })}
        </select>
    )
}