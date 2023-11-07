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
import Link from "next/link";

  const invoices = [
	{
	  invoice: "INV001",
	  paymentStatus: "Paid",
	  totalAmount: "$250.00",
	  paymentMethod: "Credit Card",
	},
	{
	  invoice: "INV002",
	  paymentStatus: "Pending",
	  totalAmount: "$150.00",
	  paymentMethod: "PayPal",
	},
	{
	  invoice: "INV003",
	  paymentStatus: "Unpaid",
	  totalAmount: "$350.00",
	  paymentMethod: "Bank Transfer",
	},
	{
	  invoice: "INV004",
	  paymentStatus: "Paid",
	  totalAmount: "$450.00",
	  paymentMethod: "Credit Card",
	},
	{
	  invoice: "INV005",
	  paymentStatus: "Paid",
	  totalAmount: "$550.00",
	  paymentMethod: "PayPal",
	},
	{
	  invoice: "INV006",
	  paymentStatus: "Pending",
	  totalAmount: "$200.00",
	  paymentMethod: "Bank Transfer",
	},
	{
	  invoice: "INV007",
	  paymentStatus: "Unpaid",
	  totalAmount: "$300.00",
	  paymentMethod: "Credit Card",
	},
  ]
  
  export default async function DashboardPage() {
	const {
		data: { user },
	  } = await supabase.auth.getUser()
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
	  <AuthButton></AuthButton>
	  </>
	)
  }
  