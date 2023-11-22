function CircularShape() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[200px] h-[350px] left-0 right-0 top-0 bottom-0 border-[1px] border-[#ccc] relative m-auto rounded-[50%]">
        <div className="circle"></div>
      </div>
      <div className="w-[100px] h-[350px] left-[-100px] right-0 top-0 bottom-0 border-[1px] border-[#ccc] relative m-auto rounded-[50%]">
        <div className="circle"></div>
      </div>
      <div className="w-[100px] h-[350px] left-[-100px] right-0 top-0 bottom-0 border-[1px] border-[#ccc] relative m-auto rounded-[50%]">
        <div className="circle"></div>
      </div>
      <div className="w-[200px] h-[350px] left-[-200px] right-0 top-0 bottom-0 border-[1px] border-[#ccc] relative m-auto rounded-[50%]">
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default CircularShape;
