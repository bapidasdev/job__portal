import { Label } from "./ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"

const filterData = [
  {
    filterType: "Location",
    array: ["purulia", "garh jaipur", "kotshila", "jhalda", "tulin"]
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
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((data, i) => (
          <div key={i}>
            <h1 className="font-bold text-lg">{data.filterType}</h1>

            {data.array.map((item, i) => {
              return (
                <div key={i} className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value={item} />
                  <Label>{item}</Label>
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
