import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { User } from '@supabase/supabase-js'

//component
import Card from '@/components/smoothies/card'

export const dynamic = 'force-dynamyc'

export default async function Page() {
  const supabase = createClient(cookies())
  const {data: smoothies} = await supabase.from('smoothies').select()

  return (
    <>
      <div className='h-screen flex items-center justify-center flex-col space-y-12'>
          <Link href='/smoothies/create' className='text-center text-2xl font-semibold border-2 border-gray-400 py-2 px-4 rounded-xl'>Create Some Smoothie</Link>
          <div className="grid grid-cols-3 border-white gap-6 items-center place-items-stretch">
            {smoothies?.map(smoothie => (
              <Card key={smoothie.id} smoothie={smoothie}/>
            ))}
          </div>
      </div>
    </>
  )
}