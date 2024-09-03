"use client"
import { useState, ChangeEvent, FormEvent } from "react"

type FormState = {
    name: string
    age: number | undefined
    postcode: number | undefined
}

export default function UserForm(){
    const [form, setForm] = useState<FormState>({name: "", age: 0, postcode: 0})

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target

        const parsedValue = name === "age" || name == "postcode" ? Number(value) : value
        setForm(prevForm => ({...prevForm, [name]:parsedValue}))
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log('Form Submitted : ', form)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name:
                    <input type="text" name="name" value={form.name} onChange={handleChange} />
                </label>
                <label htmlFor="age">
                    Age:
                    <input type="number" name="age" value={form.age} onChange={handleChange} />
                </label>
                <label htmlFor="postcode">
                    Postal Code:
                    <input type="number" name="postcode" value={form.postcode} onChange={handleChange} />
                </label>
            </form>
            <h1>Input Elements:</h1>
            <p>Name: {form.name}</p>
            <p>Age: {form.age}</p>
            <p>Postal Code: {form.postcode}</p>
        </div>
    )
} 