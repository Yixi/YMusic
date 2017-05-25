import * as React from 'react';
import Cover from "./cover";

export default class Card extends React.Component<any, any> {
    render() {
        return (
            <div id="card">
                <Cover />
            </div>
        )
    }
}