import { Button } from "../../components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../components/ui/dialog";
import { Info } from "lucide-react";

export function VideoDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    size={"icon"}
                    className="inline-flex size-14 animate-shimmer items-center justify-center rounded-md border border-sky-800 bg-[linear-gradient(110deg,#001933,45%,#1e4661,55%,#001933)] bg-[length:200%_100%] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-50 group/button"
                >
                    <Info className=" duration-400 transition-all group-hover/button:scale-110" />
                </Button>
            </DialogTrigger>
            <DialogContent className="w-max h-max p-6 pt-8 max-w-4xl bg-card">
                <iframe
                    className="w-[400px] h-[225px] md:w-[640px] md:h-[360px] xl:w-[800px] xl:h-[450px] rounded-md"
                    src="https://www.youtube.com/embed/iohqiGMR2MQ?si=efg44e3ZqMZaPgEZ&amp;start=1"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                />
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" variant="destructive" size={"sm"}>
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
