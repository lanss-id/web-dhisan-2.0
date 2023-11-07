export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Dhisan Atelier Arsitektur",
	description: "Dhisan Atelier: Arsitektur Inovatif untuk Developer Bangunan di Indonesia.",
	navItems: [
		{
			label: "Home",
			href: "/",
			class: false,
		},
		{
			label: "About",
			href: "/about",
			class: false
		},
		{
			label: "Services",
			href: "/services",
			class: false
		},
		{
			label: "Portofolio",
			href: "/portofolio",
			class: false
		},
		{
			label: "Blog",
			href: "/blog",
			class: true		
		},
		{
			label: "Contact",
			href: "/contact",
			class: false
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    	sponsor: "https://patreon.com/jrgarciadev"
	},
	image: 'public/metadata-og-min.png'
};