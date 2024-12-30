import { useSelector } from "react-redux"
import FilterCard from "./FilterCard"
import Job from "./Job"
import Footer from "./shared/Footer"
import Navbar from "./shared/Navbar"
import { useEffect, useState } from "react"




const Jobs = () => {
    const { allJobs,
        searchQuery
    } = useSelector(store => store.job)

    const [filterJobs, setFilterJobs] = useState(allJobs);

    useEffect(() => {
        if (searchQuery) {
            const filteredJobs = allJobs.filter((job) => {
                return job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    job.salary.toLowerCase().includes(searchQuery.toLowerCase())
            })
            setFilterJobs(filteredJobs)
        } else {
            setFilterJobs(allJobs)
        }
    }, [allJobs, searchQuery]);



    return (
        <div>
            <Navbar />

            <div className="max-w-7xl mx-auto mt-5">
                <div className="flex gap-5">
                    <div className="w-[20%]">
                        <FilterCard />
                    </div>

                    {
                        filterJobs.length <= 0 ? <span>Job not found</span> : (
                            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
                                <div className="grid grid-cols-3 gap-4">
                                    {
                                        filterJobs.map((job) => (
                                            <div key={job?._id}>
                                                <Job job={job} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Jobs
