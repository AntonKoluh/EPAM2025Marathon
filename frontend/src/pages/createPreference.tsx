import { PreferenceLink, PreferenceWish } from "@/components/preferanceComps";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft, Circle, CircleCheckBig, Plus } from "lucide-react";
import { useState } from "react";

type wishType = {
  id: number;
  value: string;
  link: string;
};

type incomingProps = {
  wish: wishType[];
  setWish: React.Dispatch<React.SetStateAction<wishType[]>>;
  maxPrice: string | null;
  setState: React.Dispatch<React.SetStateAction<"user" | "pref" | "finish">>;
  pref: string;
  setPref: React.Dispatch<React.SetStateAction<string>>;
  submitResult: () => void;
};

export default function CreatePreferance({
  maxPrice,
  setState,
  wish,
  setWish,
  pref,
  setPref,
  submitResult,
}: incomingProps) {


  const [linkCount, setLinkCount] = useState(1);
  function handleAddWish() {
    if (linkCount === 5) {
      return;
    }
    setWish((prev) => [...prev, { id: linkCount + 1, value: "", link: "" }]);
    setLinkCount((prev) => prev + 1);
  }

  function handleBack(){
    setState("user")
  }

  function handleFinish(){
    submitResult()
    setState("finish")
  }

  return (
    <div className="flex flex-col gap-4 px-10 py-4 overflow-hidden">
      <div className="flex flex-col gap-2 overflow-hidden">
        <h2 className="text-3xl">Add Your Wishes</h2>
        <p>Lets your Secret Nick know what would make you smile this season.</p>
        <p className="font-bold mt-2">Budget: {maxPrice === "0" ? "Unlimited" : maxPrice}</p>
      </div>

      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-4 overflow-hidden"
      >
        <div className="border-2 rounded-md overflow-hidden">
          <AccordionItem
            value="item-1"
            className="data-[state=open]:bg-[#76977E]/30 px-2 overflow-hidden"
          >
            <AccordionTrigger className="group">
              I Have Gift Ideas!
              <Circle className="w-5 h-5 group-data-[state=open]:hidden" />
              <CircleCheckBig className="w-5 h-5 hidden group-data-[state=open]:block text-[--green]" />
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance w-full px-4">
              <div className="flex flex-col justify-center items-center w-full">
                <div className="flex flex-row justift-between items-center gap-4 w-full">
                  <div className="flex flex-col justify-center items-left w-full">
                    <p className="text-left">
                      I wish for <span className="text-red-600">*</span>
                    </p>
                    <div className="flex flex-col gap-1">
                    {wish.map((item) => (
                      <PreferenceWish
                        key={item.id}
                        wish={item}
                        setWish={setWish}
                      />
                    ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-left w-full">
                    <p className="text-left">Add link</p>
                    <div className="flex flex-col gap-1">
                    {wish.map((item) => (
                      <PreferenceLink
                        key={item.id}
                        wish={item}
                        setWish={setWish}
                      />
                    ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4 ml-auto flex flex-row gap-4 justify-center items-center">
                  <p className="font-bold">
                    <span
                      className={
                        linkCount === 5 ? "text-red-600" : "text-gray-400"
                      }
                    >
                      {linkCount}
                    </span>{" "}
                    / 5
                  </p>
                  <button
                    className="text-md border-4 border-dashed bg-white py-1 px-12 rounded-4xl font-bold
                text-(--green) border-(--green) flex flex-row justify-center items-center gap-2 shadow-md/30
                hover:text-white hover:border-white hover:bg-(--green) transition-all duration-200 hover:shadow-md"
                    onClick={handleAddWish}
                  >
                    <Plus className="w-4 h-4" /> Add Wish
                  </button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </div>
        <div className="border-2 rounded-md">
          <AccordionItem
            value="item-2"
            className="data-[state=open]:bg-[#76977E]/30 px-2"
          >
            <AccordionTrigger className="group">
              Suprise Me!{" "}
              <Circle className="w-5 h-5 group-data-[state=open]:hidden" />
              <CircleCheckBig className="w-5 h-5 hidden group-data-[state=open]:block text-[--green]" />
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance px-4">
              <div>
              <p>Add your interests <span className="text-red-600">*</span></p>
              <textarea className="resize-none w-full h-20 rounded-xl p-1 text-black bg-(--gray) border-border border-3" value={pref} onChange={(e) => setPref(e.target.value)}/>
              </div>
            </AccordionContent>
          </AccordionItem>
        </div>
      </Accordion>
        <button
          type="submit"
          className="rounded-4xl bg-(--green) h-12 text-xl text-gray-100 hover:bg-(--green)/80 shadow-md/40 hover:shadow-sm cursor-pointer"
          onClick={handleFinish}
        >
          Continue
        </button>
        <button
            className="flex flex-row justify-center items-center text-(--green) mt-2 hover:underline cursor-pointer"
          onClick={handleBack}>
            <ArrowLeft className="w-8 h-4" /> Back to the previous step
          </button>

    </div>
  );
}
