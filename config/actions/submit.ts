'use server'
import supabase from '../supabaseClient'

interface Data {
  name: string
  email: string
  whatsapp: string
  message: string
}

export default async function submit(data: Data) {

  const { name, email, whatsapp, message } = data;

  const { error } = await supabase
    .from('consult')
    .insert([{ name, email, whatsapp, message }]);

  if (error) {
    throw new Error('Terjadi kesalahan saat mengirim data.');
  }

  return 'Form anda berhasil dikirim, mohon tunggu kontak dari kami!';
}
