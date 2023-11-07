'use client'

import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, Textarea } from '@nextui-org/react';
import submit from '@/config/actions/submit';
import { Alert } from "@material-tailwind/react";

interface FormData {
  name: string;
  email: string;
  whatsapp: string;
  message: string;
}

export default function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const result = await submit(data);
      setResult(result);
      setOpen(true);
    } catch (error: any) {
      setResult(error.message);
      setOpen(true);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex flex-col space-y-2">
        <Alert className='mb-8' open={open} onClose={() => setOpen(false)}>
            {result}
        </Alert>
        <Input 
          type="text" 
          label="Nama" 
          {...register("name", { required: "Nama harus diisi" })}
          placeholder="Nama Anda"
          labelPlacement="outside"
          variant='underlined'
        />
        {errors.name && <p className="text-red-500 text-md">{errors.name.message}</p>}
      </div>
      
      <div className="flex flex-col space-y-2">
        <Input
          type="email"
          label="Email"
          {...register("email", { required: "Email harus diisi", pattern: { value: /^\S+@\S+$/i, message: "Email tidak valid" } })}
          placeholder="emailanda@example.com"
          labelPlacement="outside"
          variant='underlined'
        />
        {errors.email && <p className="text-red-500 text-md">{errors.email.message}</p>}
      </div>
      
      <div className="flex flex-col space-y-2">
        <Input
          type="text"
          label="No Whatsapp"
          {...register("whatsapp", { required: "No. Whatsapp harus diisi" })}
          placeholder="0821-8880-0988"
          labelPlacement="outside"
          variant='underlined'
        />
        {errors.whatsapp && <p className="text-red-500 text-md">{errors.whatsapp.message}</p>}
      </div>
      
      <div className="flex flex-col space-y-2">
        <Textarea 
          size={'lg'} 
          type="textarea" 
          {...register("message", { required: "Pesan harus diisi" })}
          label="Terangkan Keinginan anda" 
          labelPlacement="outside"
          placeholder="Beri tahu kami apa yang ingin anda sampaikan disini"
          variant='underlined'
          className="mt-6"
        />
        {errors.message && <p className="text-red-500 text-md">{errors.message.message}</p>}
      </div>
      
      <Button 
        radius="none"
        className="my-6"
        color="primary"
        variant="bordered"
        type="submit"
        isLoading={loading}
      >
        Kirimkan
      </Button>
    </form>
  );
}
