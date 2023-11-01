"use client"
import { useEffect, useState } from "react"
import { createClient } from "@/utils/supabase/client"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Page({ params }: { params: { id: number } }) {
    const navigate = useRouter()
    const supabase = createClient()
    const [title, setTitle] = useState('')
    const [method, setMethod] = useState('')
    const [rating, setRating] = useState('')
    const [formError, setFormError] = useState('')

    const handleSubmit = async (e:any) => {
        e.preventDefault()

        if (!title || !method || !rating) {
            setFormError('Please fill in all the fields correctly')
            return
        }

        const {data, error} = await supabase
        .from('smoothies')
        .update({title, method, rating})
        .eq('id', params.id)
        .select()

        if (error) {
            console.log(error)
            setFormError('Please fill in all the fields correctly')
        }
        if (data) {
            console.log(data)
            setFormError('')
            navigate.push('/smoothies')
        }
    }

    useEffect(() => {
        const fetchSmoothie = async () => {
            const {data, error} = await supabase
            .from('smoothies')
            .select()
            .eq('id', params.id)
            .single()

            if (error) {
                navigate.replace('/smoothies')
            }
            if (data) {
                setTitle(data.title)
                setMethod(data.method)
                setRating(data.rating)
            }
        }

        fetchSmoothie()
    }, [params.id, navigate])
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <div className="border-2 w-2/4 flex items-center justify-center flex-col px-14 py-10 border-gray-400 rounded-2xl shadow-2xl shadow-white/10">
                <h2 className='mb-8 text-3xl'>Update Smoothie</h2>
                <form onSubmit={handleSubmit} className='flex flex-col w-full'>
                    <label htmlFor="title" className='font-bold mb-4'>Title: </label>
                    <input 
                        type="text"
                        id='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='text-black px-4 py-2 rounded-lg bg-gray-300'
                    />
                    <label htmlFor="method" className='font-bold my-4'>Method: </label>
                    <textarea 
                        id='method'
                        value={method}
                        onChange={(e) => setMethod(e.target.value)}
                        className='text-black px-4 py-2 rounded-lg bg-gray-300'
                    />
                    <label htmlFor="rating" className='font-bold my-4'>Rating: </label>
                    <input 
                        type="number"
                        id='rating'
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        className='text-black px-4 py-2 rounded-lg mb-6 bg-gray-300'
                    />

                    <button className='mt-6 border border-gray-500 p-3 rounded-lg'>Update Smoothie Recipe</button>

                    {formError && <p className='text-red-600 text-center mt-4'>{formError}</p>}
                </form>
                <Link href='/smoothies' className='text-white mt-12 hover:text-teal-700'> Back to Smoothie </Link> 
            </div>
        </div>
    )
}