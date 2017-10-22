import * as React from 'react';
import Cover from "./cover";
import Description from "./description";
import Progress from "./progress";
import * as music from '../assets/1.mp3';

export default class Card extends React.Component<any, any> {

    componentDidMount() {
        console.log(music);
    }

    setAudio() {

    }

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