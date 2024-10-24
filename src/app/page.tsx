import CommonButton from "@/components/CommonButton";
import CloseButton from "@/components/CloseButton";
import Dropdown from "@/components/Dropdown";
import { LanguageMenus, modeMenus, quickHelpMenus } from "@/data/menu";

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="flex lg:flex-row flex-col gap-8 justify-evenly w-full items-center pt-10">
        <Dropdown
          label={"Quick Help"}
          menuItems={quickHelpMenus}
          className="w-[68px]"
        />
        <Dropdown label={"Mode"} menuItems={modeMenus} className="w-10" />
        <Dropdown
          label={"Language"}
          menuItems={LanguageMenus}
          className="w-16"
        />
        <CommonButton label={"Add To Cart"} />
        <CommonButton label={"Buy Now"} />
        <CloseButton />
      </div>
      <h3 className="text-5xl text-gray-700 text-center mt-20">
        E-commerce Project created <br /> by <br /> Md. Selim
      </h3>
    </div>
  );
}
