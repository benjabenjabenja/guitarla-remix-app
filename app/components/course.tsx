import { ICourseEntity } from "~/entities/course.entity";
import { IApiSingleResponse } from "~/entities/response-strappi.entitys";

function Course({ course }: { course: IApiSingleResponse<ICourseEntity> }) {
    const { data } = course;
    const { attributes } = data;
    return (
        <section className="course">
            <style jsx="true">{`
                .course {
                    background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${attributes?.image?.data?.attributes?.url});
                }
            `}</style>
            <div className="contenedor course-grid">
                <div className="contenido">
                    <h2 className="heading"> {attributes?.title} </h2>
                    <p className="texto">{attributes?.contenido[0]?.children[0]?.text}</p>
                </div>
            </div>
        </section>
    )
}

export default Course;
