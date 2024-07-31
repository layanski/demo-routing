"use client";
import Link from "next/link"
import  {usePathname} from "next/navigation";
import "./styles.css"
 

const navlinks = [
  {name:"Register", href : "/register"},
  {name:"Login", href : "/login"},
  {name:"Forgot Password", href : "/forgot-Password"}
]

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  
  return (
    <div>
      {navlinks.map((link) => {
        const isActive = pathname.startsWith(link.href)
        return(
          <Link href= {link.href} key= {link.href}
          className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {link.href} 
            </Link>
        )
      })}
      {children}
    </div>
    
  )
}
