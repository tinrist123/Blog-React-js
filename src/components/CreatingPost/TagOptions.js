import React, { useState, useEffect } from 'react';


export default function TagsCheckbox({ url, name, value }) {
    const [loading, setLoading] = useState(true);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        fetch(url).then(res => res.json()).then(
            data => setOptions(data), setLoading(false),
        );
    }, [url]);


    if (loading) return <div>Loading...</div>;

    return (
        // <select class={name} name={name}>
        <ul className="checkBoxList row" style={{ flexWrap: "wrap" }} >
            {
                options.map((option) => {
                    return (
                        <li><label><input type={"checkbox"} key={option.Alias} value={option['id']} />{option[value]}</label></li>
                    )
                })
            }
        </ul>
        // </select>
    )
}