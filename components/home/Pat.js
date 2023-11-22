import Image from "next/image";

function p() {
  return (
    <div className="flex mx-auto overflow-hidden">
      <div className="flex flex-col overflow-hidden animate-loop-scroll">
        <div className="flex w-full">
          <Image src="/HomeImages/p2.png" width={360} height={50} alt="" className="w-[360px] h-[40px]"/>
          <Image src="/HomeImages/p2.png" width={360} height={50} alt="" className="w-[360px] h-[40px]"/>
          <Image src="/HomeImages/p2.png" width={360} height={50} alt="" className="w-[360px] h-[40px]"/>
          <Image src="/HomeImages/p2.png" width={360} height={50} alt="" className="w-[360px] h-[40px]"/>
        </div>
        <div className="flex w-full">
          <Image src="/HomeImages/p1.png" width={360} height={50} alt="" className="w-[360px] h-[40px]"/>
          <Image src="/HomeImages/p1.png" width={360} height={50} alt="" className="w-[360px] h-[40px]"/>
          <Image src="/HomeImages/p1.png" width={360} height={50} alt="" className="w-[360px] h-[40px]"/>
          <Image src="/HomeImages/p1.png" width={360} height={50} alt="" className="w-[360px] h-[40px]"/>
        </div>
      </div>
      <div className="flex flex-col overflow-hidden animate-loop-scroll" aria-hidden={true}>
        <div className="flex w-full">
          <Image src="/HomeImages/p2.png" width={360} height={50} alt="" className="w-[360px] h-[40px]"/>
          <Image src="/HomeImages/p2.png" width={360} height={50} alt="" className="w-[360px] h-[40px]"/>
          <Image src="/HomeImages/p2.png" width={360} height={50} alt="" className="w-[360px] h-[40px]"/>
          <Image src="/HomeImages/p2.png" width={360} height={50} alt="" className="w-[360px] h-[40px]"/>
        </div>
        <div className="flex w-full">
          <Image src="/HomeImages/p1.png" width={360} height={50} alt="" className="w-[360px] h-[40px]"/>
          <Image src="/HomeImages/p1.png" width={360} height={50} alt="" className="w-[360px] h-[40px]"/>
          <Image src="/HomeImages/p1.png" width={360} height={50} alt="" className="w-[360px] h-[40px]"/>
          <Image src="/HomeImages/p1.png" width={360} height={50} alt="" className="w-[360px] h-[40px]"/>
        </div>
      </div>
    </div>
  );
}

export default p;
