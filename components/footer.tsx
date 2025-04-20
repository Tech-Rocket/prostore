'use client'

import { APP_NAME } from "@/lib/constants"

export default function footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
        <div className="p-5 flex justify-center items-center text-sm text-gray-600">
            {currentYear} {APP_NAME}. All right reserved
        </div>
    </footer>
  )
}
