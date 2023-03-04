






const Shimmer = () => (
    <div className="flex flex-wrap items-center justify-center">
    { 
        Array(21).fill("").map((e,index) => {
            return (
            <>
            <div key={index}   className="w-96 gap-1 h-96 bg-[#D6D8DA] p-2.5 ml-10 mr-10 mt-24" />
            </>
        )})
    }
    </div>
)

export default Shimmer