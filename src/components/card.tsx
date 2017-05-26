import * as React from 'react';
import Cover from "./cover";
import Description from "./description";
import Progress from "./progress";

export default class Card extends React.Component<any, any> {
    render() {
        return (
            <div id="card">
                <Cover />
                <Description />
                <Progress />
            </div>
        )
    }
}