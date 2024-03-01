import { NavList } from "./constants"

type Props = {}

const Nav = (props: Props) => {
  return (
    <div className="w-full h-[80px] bg-primary-main fixed bottom-0 flex items-center gap-x-2 px-4">
        {NavList.map((item)=>(
            <div key={item.id} className="flex-1 h-12 flex items-center justify-center gap-x-1 rounded-full border border-divider-main"></div>
        ))}
    </div>
  )
}

export default Nav