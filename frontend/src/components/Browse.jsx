import { useDispatch, useSelector } from "react-redux"
import Job from "./Job"
import Footer from "./shared/Footer"
import Navbar from "./shared/Navbar"
import { useEffect } from "react"
import { setSearchQuery } from "@/redux/jobSlice"
import useGetAllJobs from "@/hooks/useGetAllJobs"



const Browse = () => {

    useGetAllJobs();
    const { allJobs } = useSelector(store => store.job);
    const dispatch = useDispatch();
    
     useEffect(()=>{
         return ()=>{
             dispatch(setSearchQuery(""));
         }
     },[])


    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto my-10">
                <h1 className="font-bold text-xl my-10">Search Results ({allJobs.length})</h1>
                <div className="grid grid-cols-3 gap-4 ">
                    {
                        allJobs.map((job) => {
                            return (
                                <Job key={job._id} job={job} />
                            )
                        })
                    }
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Browse