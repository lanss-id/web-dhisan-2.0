import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { Logo } from "@/components/costums/icons";

export const Navbar = () => {
	return (
		<NextUINavbar maxWidth="full" position="sticky" className="shadow-lg dark:shadow-white/5 container-none">
			<NavbarContent className="basis-1/5 sm:basis-full -pl-4" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo className="fill-black dark:fill-white"/>
						<p className="font-bold text-inherit tracking-wider text-xl">Dhisan Atelier</p>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent
				className="hidden md:flex basis-1/5 md:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden md:flex gap-2 items-center">
					<ul className="hidden md:flex gap-4 justify-center mr-2">
						{siteConfig.navItems.map((item) => (
							<NavbarItem key={item.href}>
								<Link
									className={clsx(
										linkStyles({ color: "foreground" }),
										"data-[active=true]:text-primary data-[active=true]:font-medium"
									)}
									color="foreground"
									href={item.href}
									isDisabled={item.class}
								>
									{item.label}
								</Link>
							</NavbarItem>
						))}
					</ul>
					{/* <ThemeSwitch /> */}
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="md:hidden basis-1 pl-4" justify="end">
				{/* <ThemeSwitch /> */}
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col items-center h-screen justify-center gap-2 space-y-10">
					{siteConfig.navItems.map((item) => (
						<NavbarMenuItem key={item.href}>
							<Link
								color={"foreground"}
								href={item.href}
								className={`text-3xl font-medium tracking-wider antialiased hover:text-[#D2B13E] transition ease-in-out duration-200`}
								isDisabled={item.class}
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};