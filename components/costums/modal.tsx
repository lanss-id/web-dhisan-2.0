import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DialogCloseButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Konsultasi Gratis</Button>
      </DialogTrigger>
      <DialogContent className="max-w-xs flex flex-col items-center ">
        <DialogHeader>
          <DialogTitle>Pilih Media Konsultasi</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <DialogClose asChild>
            <a href="#form">
              Form
            </a>
          </DialogClose>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
