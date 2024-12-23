import { LogOut, User2 } from "lucide-react"
import { Avatar, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Link } from "react-router-dom"


const Navbar = () => {
    const user = true;
    return (
        <div className="bg-white">
            <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
                <div>
                    <Link to="/"><h1 className="text-2xl font-bold">Job<span className="text-[#F83002]">Portal</span></h1></Link>
                </div>

                <div className="flex items-center gap-12">
                    <ul className="flex font-medium items-center gap-5">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/jobs">Jobs</Link></li>
                        <li><Link to="/browse">Browse</Link></li>
                    </ul>

                    {
                        !user ? (
                            <div className="flex items-center gap-2">
                                <Link to="/login"><Button className="bg-[#6A38C2] hover:bg-[black] text-white hover:text-white rounded-r-full" variant="outline">Login</Button></Link>
                                <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[black] text-white hover:text-white rounded-l-full" variant="outline">Signup</Button></Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className="w-80">
                                    <div>
                                        <div className="flex gap-4 space-y-2">
                                            <Avatar className="cursor-pointer">
                                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                            </Avatar>
                                            <div>
                                                <h4 className="font-medium">Bapi Das</h4>
                                                <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet.</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col my-2  text-gray-600">
                                            <div className="flex w-fit items-center gap-2 cursor-pointer">
                                                <User2 />
                                                <Button variant="link">View Profile</Button>
                                            </div>
                                            <div className="flex w-fit items-center gap-2 cursor-pointer">
                                                <LogOut />
                                                <Button variant="link">Logout</Button>
                                            </div>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )
                    }
                </div>
            </div>
        </div >
    )
}

export default Navbar


//button --> <Button className="bg-[#6A38C2] hover:bg-[black] text-white hover:text-white rounded-[10px]">Signup</Button>