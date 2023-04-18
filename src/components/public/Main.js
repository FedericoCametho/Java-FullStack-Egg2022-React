import React, { Component } from 'react'
import { Cards } from './Cards';



export class Main extends Component {

    constructor(props){
        super(props);
        this.state = {mascotas : []};
    }


    // Solucion alternativa a hacer la peticion en main es delegar la petcion a Cards.js usan useEffect hook, por ende tampoco le pasamos parametros a cartas
    componentDidMount(){
    //     RickAndMortyService.getAllCharacters()
    //         .then((data) => { this.setState( { mascotas: data.results } ) })
    //         .catch((error) => {console.log(error)});
    }

    render() {
        return (
            <div className="main-wrapper">
                <main>

                    <section className="py-5 text-center container">
                        <div className="row py-lg-5">
                            <div className="col-lg-6 col-md-8 mx-auto">
                                <h1 className="fw-light">Album example</h1>
                                <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                                <p>
                                    <a href="#" className="btn btn-primary my-2">Main call to action</a>
                                    <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* <Cards mascotas={this.state.mascotas}/> */} <Cards/>

                </main>
            </div>
        )
    }
}

export default Main
