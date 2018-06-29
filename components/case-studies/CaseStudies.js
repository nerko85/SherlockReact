import React, {Component} from 'react';
import css from './CaseStudies.css';

class CaseWrapper extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:1,
            title: "Coffe Branding",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            href: "#"
        }
    }
    render(){
        return(
            <div className={css.caseGrid}>
                <div className={css.itemA}></div>
                <CaseImage title={this.state.title} body={this.state.body} href={this.state.href}/>
                <CaseNavigation id={this.state.id}/>
            </div>
        )
    }
};

const CaseImage = (props) => (
    <div className={css.itemB}>
        <CaseDescription title={props.title} body={props.body} href={props.href}/>
    </div>
);

const CaseDescription = (props) => (
    <div className={css.desc}>
        <div className={css.heading}>{props.title}</div>
        <p>{props.body}</p>
        <a href={props.href}>view case</a>
    </div>
)

const CaseNavigation = (props) => ( 
    <div className={css.itemC}>
        <ul>
            <li><a href="http://">{`0${props.id}`}</a></li>
            <li><a href="http://">02</a></li>
            <li><a href="http://">03</a></li>
            <li><a href="http://">04</a></li>
        </ul>
    </div>
)

export default CaseWrapper;