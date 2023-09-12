import React, { useState } from 'react'

export default function About(props) {
    let mystyle = {
        color: props.mode === 'dark'?'white':'#343a40',
        backgroundColor: props.mode === 'dark'?'#343a40':'white',
        border: '1px solid',
        borderColor: props.mode === 'dark'?'white':'#343a40'
    }
    return (
        <div style={mystyle}>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={mystyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo alias provident facilis sed? Aliquam aperiam rem quaerat. Modi, velit recusandae officia laudantium natus, aut, cumque impedit repellendus adipisci similique sit ipsa placeat. Optio neque est, vitae enim unde quam. Laudantium excepturi soluta sed accusamus dolorem placeat, dicta illum odio sunt!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea asperiores quod nihil facere corrupti quia placeat optio id eum vel aut culpa, dolor modi voluptates accusamus beatae vero quam quae!Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={mystyle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A non harum ea expedita sint sapiente incidunt cupiditate molestias velit possimus perspiciatis inventore earum neque eveniet consequatur voluptates, fugit quidem delectus labore adipisci. Obcaecati omnis incidunt repellat, ipsum numquam sint voluptates, vero aut voluptatum unde quae commodi magni illo, quam eligendi!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius nulla magnam, cupiditate dolor deserunt ipsam id nesciunt eos, culpa totam omnis iusto! Esse, odio. Soluta libero sint ad modi provident?Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={mystyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laudantium incidunt, ex neque consequuntur ipsam hic aspernatur sint tenetur at nesciunt odio commodi eveniet deserunt repellendus nemo dignissimos. Cumque, commodi? Sapiente provident architecto, assumenda sint molestias odio quibusdam sed eum, expedita impedit voluptatum ad deserunt aliquam voluptates sequi perferendis officia.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut necessitatibus delectus beatae dolorem recusandlorem50ae odio quisquam voluptas perspiciatis doloremque inventore voluptatem et, ipsum at, nesciunt cumque optio doloribus ab impedit?Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
