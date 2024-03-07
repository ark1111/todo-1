const Header = () => {
  return (
    <div className="w-full flex items-center justify-between pt-4">
      <div className="w-[50px] h-[50px] rounded-full bg-primary-main flex items-center justify-center">
        <div className="w-full text-text-primary text-center ">ARK</div>
      </div>
      <div className="flex items-center gap-x-1">
        <div className="w-[50px] h-[50px] rounded-full border border-primary-main flex items-center justify-center"></div>
        <div className="w-[50px] h-[50px] rounded-full bg-primary-main flex items-center justify-center"></div>
      </div>
    </div>
  );
};

export default Header;
