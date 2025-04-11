import { Toaster } from "@/components/ui/sonner"

import "@/app/globals.css";
import { SellingProvider } from "@/context/sellingcontext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SellingProvider>{children}</SellingProvider>
        <Toaster />
      </body>
    </html>
  )
}