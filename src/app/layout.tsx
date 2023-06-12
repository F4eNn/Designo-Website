import { Wrapper } from '@/components/UI/Wrapper'
import './globals.css'
import { Jost } from 'next/font/google'
import { Nav } from '@/components/Nav/Nav'

const jost = Jost({ subsets: ['latin'] })

export const metadata = {
	title: 'Designo',
	description: 'designo websit',
}

export default function RootLayout({ children }: { children: React.ReactNode }){
	return (
		<html lang='en'>
			<body className={jost.className}>
				<Wrapper>
					<Nav />
					{children}
				</Wrapper>
			</body>
		</html>
	)
}
