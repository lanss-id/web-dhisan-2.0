import React from "react";
import {Input, Textarea} from "@nextui-org/react";

export default function FormConsult() {
  return (
    <div className="w-full flex flex-col gap-4">
        <div className="flex w-full flex-col mb-6 md:mb-0 gap-4">
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
        </div>
    </div>  
  );
}