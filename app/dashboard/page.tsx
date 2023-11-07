import AuthButton from "@/components/costums/authButton";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
  } from "@/components/ui/table"
import supabase from "@/config/supabaseClient"
  
export default async function DashboardPage() {
	const { data: consult } = await supabase.from("consult").select();

	return (
		<>
			<Table>
				<TableCaption>List Form Database Dhisan</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">Nama</TableHead>
						<TableHead>Email</TableHead>
						<TableHead>Method</TableHead>
						<TableHead className="text-right">Pesan Konsul</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{consult?.map((item) => (
						<TableRow key={item.id}>
						<TableCell className="font-medium">{item.name}</TableCell>
						<TableCell>{item.email}</TableCell>
						<TableCell>{item.whatsapp}</TableCell>
						<TableCell className="text-right">{item.message}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<AuthButton />
		</>
	)
}