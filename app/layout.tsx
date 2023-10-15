import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`font-quicksans dark:bg-black bg-white scrollbar-thin scrollbar-thumb-[#DCE4FF] scrollbar-thin-rounded-md scrollbar-track-white  `}
			>
				{children}
      <ToastContainer position="bottom-right" />
			</body>
		</html>
	);
}
