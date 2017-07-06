import React from 'react';
import Link  from 'next/link';

import PrimaryButton from  '../buttons/button-primary/button-primary';
import ArrowRight from '../icons/arrow-right/arrow-right';

class ReadMoreBlock extends React.Component {
    render() {
        const props = this.props;
        return (
            <section className="read-more-block container">
                <div className="image-block" style={{backgroundImage: `url(${props.imageBlock.image})`}} >
                    <h2>{props.imageBlock.title}</h2>
                    <PrimaryButton href={props.imageBlock.buttonTarget} value={props.imageBlock.buttonValue} />
                </div>
                <div className="text-block">
                    {props.buttons.map((item, i) => {
                        return (
                            <div key={i}>
                                <Link href={item.link}><a>{item.title}<ArrowRight /></a></Link>
                                <p>{item.subtext}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    }
}

export default ReadMoreBlock;
