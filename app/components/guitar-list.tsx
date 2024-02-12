import { IGuitarEntity } from "~/entities/guitar.entity"
import { IApiResponse } from "~/entities/response-strappi.entitys"
import Guitar from './guitar';

function GuitarList({ guitars }: { guitars: IApiResponse<IGuitarEntity>}) {
    return (
        <>
            <h2 className="heading">~~ Our Stock ~~</h2>
            {
                guitars?.data?.length && (
                    <div className="guitarras-grid">
                        {
                            guitars?.data.map(g => (<Guitar guitar={g.attributes} key={g?.attributes?.url} />))
                        }
                    </div>
                )
            }    
        </>
    )
}

export default GuitarList
