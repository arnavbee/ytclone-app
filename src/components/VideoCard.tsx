
export function VideoCard(props: any) {
    return (
        <div>
        <img className="rounded-xl" src={props.image} alt="new" />
        <div className="grid grid-cols-12 pt-2">
            <div className="col-span-1">
            <img className={"rounded-full w-12 h-12 mr-0"} src="../thumb.jpg" alt="new" />

            </div>

            <div className="col-span-11 pl-3">
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
   