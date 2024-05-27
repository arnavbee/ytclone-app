
export function VideoCard(props: any) {
    return (
        <div>
        <img className="rounded-xl" src={props.image} alt="new" />
        <div className="grid grid-cols-12 pt-2">
            <div className="col-span-1 pl-2">
            <img className={"rounded-full w-20 h-20"} src="../video.jpg" alt="new" />

            </div>

            <div className="col-span-11">
                {props.title}
                <div className="col-span-11 text-gray-500 text-base">
                {props.author}
            </div>

            <div className="col-span-11 text-gray-500 text-base">
                {props.views} | {props.timeStamp}
            </div>
            </div>

          

        </div>
        </div>
    
    )}
   