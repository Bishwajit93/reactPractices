"use client"

import { useState, ChangeEvent } from "react"

type FormState = {
    name: string;
    age: number;
}

export default function UserForm() {
    const [form, setForm] = useState<FormState>({name: "", age: 0})

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setForm (prevForm => ({
            ...prevForm,
            [name]: value
        }))
    }
    return(
        <div>
            <form action="">
                <label htmlFor="">
                    Name:
                    <input type="text" name="name" value={form.name} onChange={handleChange}/>
                </label>
                <label htmlFor="">
                    Age:
                    <input type="number" name="age" value={form.age} onChange={handleChange} />
                </label>
            </form>
            <h3>Form Values:</h3>
            <p>Name: {form.name}</p>
            <p>Age: {form.age}</p>
        </div>
    )
}