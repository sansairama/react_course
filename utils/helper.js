export const transform = (v,a) => {
    {
     newinfo = a.filter((infos) => infos?.data?.name?.toLowerCase().includes(v.toLowerCase()))
     return newinfo
    }
}

//shared location make our code mode readable and testable.