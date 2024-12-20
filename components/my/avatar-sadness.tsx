import { Flag } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarSadness() {
  return (
    <Avatar className="hidden md:block">
      <AvatarImage src="/sadness_2_40x40.webp" />
      <AvatarFallback><Flag /></AvatarFallback>
    </Avatar>
  )
}