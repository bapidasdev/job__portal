import { useEffect, useState } from "react"
import { Label } from "./ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { useDispatch } from "react-redux"
import { setSearchQuery } from "@/redux/jobSlice"

const filterData = [
  {
    filterType: "Location",
    array: ["Hyderabad", "Bangalore", "kolkata", "Pune", "tulin"]
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "Fullstack Developer"]
  },
  {
    filterType: "Salary",
    array: ["0-40k", "41-1lakh", "1lakh to 5lakh"]
  },
]
const FilterCard = () => {

  const [selectedValue, setSelectedValue] = useState('')
  const dispatch = useDispatch();

  const changeHandler = (value) => {
    setSelectedValue(value)
  }

  useEffect(() => {
    dispatch(setSearchQuery(selectedValue))
  }, [selectedValue])

  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {filterData.map((data, index) => (
          <div key={index}>
            <h1 className="font-bold text-lg">{data.filterType}</h1>

            {data.array.map((item, i) => {
              const itemId = `id${index}-${i}`
              return (
                <div key={i} className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value={item} id={itemId} />
                  <Label htmlFor={itemId}>{item}</Label>
                </div>
              )
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}

export default FilterCard
