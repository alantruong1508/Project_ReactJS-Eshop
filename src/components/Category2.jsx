import Image1 from "../assets/category/gaming.png";
import Image2 from "../assets/category/vr.png";
import Image3 from "../assets/category/speaker.png";
import Button from "./Button";

export default function Category2() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* cột 1 */}
          <div className="py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-300/100 text-white rounded-3xl relative h-[320px] flex items-end sm:col-span-2">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  CONSOLE
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={Image1}
              alt=""
              className="w-[320px] absolute top-1/3 sm:top-1/2 -translate-y-1/2 -right-0 scale-53 sm:scale-100"
            />
          </div>
          {/* cột 2 */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brand-green/90 to-brand-green/90 text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Oculus
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brand-green"}
                />
              </div>
            </div>
            <img src={Image2} alt="" className="w-[320px] absolute bottom-0" />
          </div>
          {/* cột 3 */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brand-blue to-brand-blue/90 text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Speaker
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brand-blue"}
                />
              </div>
            </div>
            <img
              src={Image3}
              alt=""
              className="w-[200px] absolute bottom-0 right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
