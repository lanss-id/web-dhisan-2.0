import React from "react";
import {Input, Textarea, Button} from "@nextui-org/react";

export default function FormConsult() {
  return (
    <div className="w-full flex flex-col">
        <div className="flex w-full flex-col mb-6">
          <form action="">
            <div className="space-y-12">
            <Input 
              type="text" 
              label="Nama" 
              placeholder="Nama Anda"
              labelPlacement="outside"
              variant='underlined'
            />
            <Input
              type="email"
              label="Email"
              placeholder="emailanda@example.com"
              labelPlacement="outside"
              variant='underlined'
            />
            <Input
              type="text"
              label="Kontak"
              placeholder="0821-8880-0988"
              labelPlacement="outside"
              variant='underlined'
            />
            </div>
            <Textarea 
              size={'lg'} 
              type="textarea" 
              label="Terangkan Keinginan anda" 
              labelPlacement="outside"
              placeholder="Beri tahu kami apa yang ingin anda sampaikan disini"
              variant='underlined'
              className="mt-6"
            />
            <Button 
              radius="none"
              className="my-6"
              color="primary"
              variant="bordered"
            >
              Kirimkan
            </Button>
          </form>
        </div>
    </div>  
  );
}