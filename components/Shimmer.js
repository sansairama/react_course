






const Shimmer = () => (
    <div className="dinner_list">
    { 
        Array(21).fill("").map((e,index) => {
            return (
            <>
            <div key={index}   className="shimmer" />
            </>
        )})
    }
    </div>
)

export default Shimmer