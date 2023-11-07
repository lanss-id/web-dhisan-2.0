'use client'

import React, { FormEvent, useState } from "react";
import { Button, Input, Textarea } from '@nextui-org/react';
import submit from '@/config/actions/submit'
import { Alert } from "@material-tailwind/react";

export default function FormConsult() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('')
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('')
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const [open, setOpen] = useState(false)

    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setOpen(false)
      try {
        const result = await submit({ name, email, whatsapp, message });
        setResult(result);
        setName('');
        setEmail('');
        setWhatsapp('');
        setMessage('');
        setOpen(true);
        setColor('rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]')
      } catch (error:any) {
        setResult(error.message);
        setOpen(true);
        setColor('rounded-none border-l-4 border-red-500 bg-red-500/10 font-medium text-red-500')
      }
      setLoading(false);
    };
  return (
    <div className="w-full flex flex-col">
        <div className="flex w-full flex-col mb-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-12">
            <Alert className={`${color}`} open={open} onClose={() => setOpen(false)}>
              {result}
            </Alert>
            <Input 
              type="text" 
              label="Nama" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama Anda"
              labelPlacement="outside"
              variant='underlined'
              required
            />
            <Input
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="emailanda@example.com"
              labelPlacement="outside"
              variant='underlined'
              required
            />
            <Input
              type="text"
              label="Kontak"
              value={whatsapp.toString()}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="0821-8880-0988"
              labelPlacement="outside"
              variant='underlined'
              required
            />
            </div>
            <Textarea 
              size={'lg'} 
              type="textarea" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              label="Terangkan Keinginan anda" 
              labelPlacement="outside"
              placeholder="Beri tahu kami apa yang ingin anda sampaikan disini"
              variant='underlined'
              className="mt-6"
              required
            />
              <Button 
              radius="none"
              className="my-6"
              color="primary"
              variant="bordered"
              type="submit"
              isLoading={loading}
              onClick={() => setOpen(true)}
            >
              Kirimkan
            </Button>
          </form>
        </div>
    </div>  
  );
}