import React, { Component } from 'react';
import { Collapse } from 'reactstrap';

import Aux from '../../hoc/Auxiliary';
import Header from '../Layout/Header/Header';
import NavigationItem from '../Navigation/NavigationItem/NavigationItem';
import DescriptiveTitle from '../Layout/DescriptiveTitle/DescriptiveTitle';
import Home from '../Layout/Content/Home/Home';
import Resume from '../Layout/Content/Resume/Resume';
import Work from '../Layout/Content/Work/Work';
import Contact from '../Layout/Content/Contact/Contact';
import Footer from '../Layout/Footer/Footer';

import classes from './Layout.css';
import person from '../../assets/images/person1.png';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.onEntering = this.onEntering.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: true, shown: {} };
    }

    onEntering(collapseID) {
        let componentIDs = [0,1,2,3];
        let index = componentIDs.indexOf(collapseID);

        if(index !== -1) {
            componentIDs.splice(index,1);
        }
        for (let id of componentIDs){
            this.setState( (prevState, props) => { 
                return {
                    shown: {
                        ...prevState.shown,
                        [id]: prevState.shown[id] = false
                    }
                }
            });
        } 
    }
    
    toggle(collapseID) {
        this.setState({ collapse: !this.state.collapse,
                shown: {
                    ...this.state.shown,
                    [collapseID]: !this.state.shown[collapseID]
                }  
        });
    }

    render () {
        return (
            <Aux>
                <div className="container">
                    <header id="main-header">
                        <div className="row no-gutters">
                            <div className="col-lg-4 col-md-5">
                                <img src={person} alt="Kai Harms - Bild" className={classes.img}/>
                            </div>
                            <div className="col-lg-8 col-md-7">
                                <div className="d-flex flex-column">
                                    <Header/>
                                    <DescriptiveTitle/>
                                    <div>
                                        <div className="d-flex flex-row text-white align-items-stretch text-center">
                                            <NavigationItem colorType="bg-primary" iconType="fa-home" onClick={() => this.toggle(0)}>Home</NavigationItem>
                                            <NavigationItem colorType="bg-success" iconType="fa-graduation-cap" onClick={() => this.toggle(1)}>Lebenslauf</NavigationItem>
                                            <NavigationItem colorType="bg-warning" iconType="fa-folder-open" onClick={() => this.toggle(2)}>Arbeiten</NavigationItem>
                                            <NavigationItem colorType="bg-danger" iconType="fa-envelope" onClick={() => this.toggle(3)}>Kontakt</NavigationItem>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                            <main>
                                {this.props.children}
                            </main>
                        </div>
                    </header>
                    <Aux>
                        <Collapse isOpen={this.state.shown[0]}
                       onEntering={() => this.onEntering(0)}>
                            <Home/>
                        </Collapse>
                        <Collapse isOpen={this.state.shown[1]}
                       onEntering={() => this.onEntering(1)}>
                            <Resume/>
                        </Collapse>
                        <Collapse isOpen={this.state.shown[2]}
                        onEntering={() => this.onEntering(2)}>
                            <Work/>
                        </Collapse>
                        <Collapse isOpen={this.state.shown[3]}
                        onEntering={() => this.onEntering(3)}>
                            <Contact/>
                        </Collapse>
                    </Aux>
                    <Footer />
                </div>
            </Aux>
        );
    }
}

export default Layout;