import React from 'react';
// Components
import Header from './components/Header/header'; 
import Content from './components/Content/content';

const today = new Date(); 
const year = today.getFullYear(); 

class App extends React.Component {
    
    render() {
        

        return (
            <div>
                <Header />

                <Content />

                <footer style={{
                    textAlign: "Center",
                    fontSize: "12px",
                    fontColor: "#C1F1F8",
                    padding: "10px",
                    backgroundColor: '#7C8693'
                }}>
                    Copright &copy; {`${year}`}. All right reserved by Dara Soumgit.
                </footer>
            </div>
        )
    }
}

export default App; 