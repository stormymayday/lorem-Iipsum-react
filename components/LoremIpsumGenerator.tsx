"use client";

import data from "@/data";
import { useState } from "react";

function LoremIpsumGenerator() {
    const [count, setCount] = useState(1);
    const [text, setText] = useState<string[]>([]);
    return (
        <section className="section-center">
            <h4>lorem ipsum generator</h4>
            <form
                className="lorem-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    // const newText = data.slice(0, count);
                    setText(data.slice(0, count));
                }}
            >
                {/* <div> */}
                <label htmlFor="amount">paragraphs:</label>
                <input
                    type="number"
                    name="amount"
                    id="amount"
                    value={count}
                    min={1}
                    step={1}
                    max={8}
                    onChange={(e) => setCount(parseInt(e.target.value))}
                />
                {/* </div> */}
                <button className="btn" type="submit">
                    generate
                </button>
            </form>

            <article className="lorem-text">
                {text.length > 0 && (
                    <div className="text-center mb-2">
                        <button
                            type="button"
                            onClick={() => setText([])}
                            className="btn btn-hipster"
                        >
                            clear
                        </button>
                    </div>
                )}
                {text.length > 0 &&
                    text.map((p, index) => {
                        return <p key={index}>{p}</p>;
                    })}
            </article>
        </section>
    );
}
export default LoremIpsumGenerator;
