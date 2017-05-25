import * as React from 'react';
import * as cover from '../assets/cover.jpg';

export default class Cover extends React.Component<any, any> {
    render() {
        return (
            <div id="cover">
                <img src={cover}/>
            </div>
        )
    }
}