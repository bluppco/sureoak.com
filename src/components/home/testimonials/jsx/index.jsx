// IMPORTS REACT RESPONSIVE CAROUSEL
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

// IMPORTS HERO ICONS
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

// IMPORTS ATOMS
import ParagraphLargeItalic from "@/atoms/paragraph/large/italic/jsx/index.jsx"
import PictureInternalContain from "@/atoms/picture/internal/jsx/contain/index.jsx"

const Testimonials = ( props ) => {

    const { data } = props

    return (
        <section className="w-full h-[400px] md:h-full group">
            <Carousel showThumbs={ false } showStatus={ false } showArrows={ true } autoPlay={ true } infiniteLoop={ true }
                renderArrowPrev={( onClickHandler, hasPrev, label ) =>
                hasPrev && (
                        <button
                            type="button"
                            onClick={ onClickHandler }
                            title={ label }
                            className="absolute top-0 left-1 z-10 flex items-center h-full mt-10 md:mt-0"
                        >
                            <ChevronLeftIcon className="text-zinc-400 size-4 md:size-8"/>
                        </button>
                )}
                renderArrowNext={( onClickHandler, hasNext, label ) =>
                    hasNext && (
                        <button
                            type="button"
                            onClick={ onClickHandler }
                            title={ label }
                            className="absolute top-0 right-1 z-10 flex items-center h-full mt-10 md:mt-0"
                        >
                            <ChevronRightIcon className="text-zinc-400 size-4 md:size-8"/>
                        </button>
                )}
            >
                {

                    data.map( ( value, index ) => {
                        return (
                            <div className="relative py-14 md:px-32 h-full w-full flex flex-col gap-8 justify-center items-center" key={ index }>
                                <div className="size-28">
                                    <PictureInternalContain
                                        alternative_text={ value.name }
                                        source={ value.cover }
                                    />
                                </div>
                                <ParagraphLargeItalic>{ value.review }</ParagraphLargeItalic>
                                <div>
                                    <span className="font-commissioner font-extrabold text-lg text-sureoak_black tracking-widest">{ value.name }, </span>
                                    <span className="font-commissioner text-lg text-sureoak_black tracking-widest">{ value.company_name }</span>
                                </div>
                            </div>
                        )
                    })

                }
            </Carousel>
        </section>
    )

}

export default Testimonials
