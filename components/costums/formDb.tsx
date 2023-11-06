import {Input, Textarea, Button, Select, SelectItem} from "@nextui-org/react";
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamyc'

export default async function Page() {
  const supabase = createClient(cookies())
  const {data: typeService} = await supabase.from('type_service').select()

  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <div className="flex w-full flex-col mb-6 md:mb-0 gap-4">
          <form action="">
          <Input 
            size={'lg'} 
            type="text" 
            label="Nama" 
            placeholder="Nama Anda"
            labelPlacement="outside"
            variant='underlined'
          />
          <Input
            size={'lg'}
            type="email"
            label="Email"
            placeholder="emailanda@example.com"
            labelPlacement="outside"
            variant='underlined'
          />
          <Input
            size={'lg'}
            type="text"
            label="Kontak"
            placeholder="0821-8880-0988"
            labelPlacement="outside"
            variant='underlined'
          />
          <Textarea 
            size={'lg'} 
            type="textarea" 
            label="Terangkan Keinginan anda" 
            labelPlacement="outside"
            placeholder="Beri tahu kami apa yang ingin anda sampaikan disini"
            variant='underlined'
          />
          
          <Button 
          radius="none"
          className="mt-6"
          >
            Kirimkan
          </Button>
          </form>
          <Select 
          label="Select an animal" 
          className="max-w-xs" 
          variant="underlined"
          >
            <SelectItem key={'hi'}>hi</SelectItem>
          </Select>
        </div>
    </div> 
    </>
  )
}