import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Modal({
  children,
  trigger,
  title
}: {
  children: React.ReactNode;
  trigger: React.ReactNode;
  title: React.ReactNode;
}) {
  return (<Dialog>
    <DialogTrigger className="w-full">
      {trigger}
    </DialogTrigger>
    <DialogContent>
      <DialogHeader className="w-full">
        <DialogTitle className="h-fit">
          {title}
        </DialogTitle>
        <DialogDescription className="flex flex-col justify-start items-left w-full bg-(--gray) rounded-xl gap-4 p-5 shadow-md/20">
          {children}
        </DialogDescription>
        <DialogClose asChild>
          <button className="mt-2 text-center ml-auto bg-(--green) py-1 w-60 text-xl rounded-xl font-semibold shadow-md/30 text-white hover:shadow-md hover:bg-green-700 transition-all duration-150 cursor-pointer">
            Go Back to Room
          </button>
        </DialogClose>
      </DialogHeader>
    </DialogContent>
  </Dialog>);
}
