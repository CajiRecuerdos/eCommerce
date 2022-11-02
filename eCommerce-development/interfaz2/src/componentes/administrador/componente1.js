import React, {Component} from "react"
import styles from '../../style/App.module.css';



class Component1 extends Component{
    render(){
        return(
            <div>
                <header>
                    <h1 className={styles.title}> Cajirecuerdos </h1>
                </header>
                <main>
                    <cajitas></cajitas>
                </main>               
            </div>
        );
    }
}



export {Component1}
export {styles}
