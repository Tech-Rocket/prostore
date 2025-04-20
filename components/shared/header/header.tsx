import { ShoppingCart, UserIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { APP_NAME } from "@/lib/constants"
import ModeToggle from "./mode-toggle"


export default function Header() {
  return (
    <header className="w-full border-b">
        <div className="max-w-7xl lg:mx-auto p-5 md:px-10 w-full flex justify-between items-center">
            <div className="flex justify-start items-center">
                <Link href="/" className="flex justify-start items-center">
                  <Image 
                  src='/images/logo.svg' 
                  alt={`${APP_NAME} logo`} 
                  width={48} 
                  height={48} 
                  priority={true} 
                  />
                </Link>
                <span className="hidden lg:block font-bold text-2xl ml-3">{APP_NAME}</span>
            </div>
            <div className="space-x-2">
              <ModeToggle/>
              <Button asChild variant='ghost' >
                <Link href='/cart'><ShoppingCart/> Cart </Link>
              </Button>

              <Button asChild >
                <Link href='/sign-in'><UserIcon/> Sign In</Link>
              </Button>
            </div>
        </div>
    </header>
  )
}
