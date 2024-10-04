import React, { PureComponent } from 'react'

class Lifecyclemethods extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            name:"Rahul",
            lastname:"xyz",
            isRendered:false
        }
    }
static getDerivedStateFromProps (props,state){
    return {name:props.name}
}
componentDidMount(){
    setTimeout(()=>{
        this.setState({lastname:"ABC" , isRendered:true})
    },2000)
}
shouldComponentUpdate(){
    return true;
}
getSnapshotBeforeUpdate(prevProps,prevState){
document.getElementById('para').innerHTML="Data before props and state were updated:" + prevProps.name + prevState.lastname
}
componentDidUpdate(){
    document.getElementById('para2').innerHTML='updated data'+ this.state.lastname
}
changename=()=>{
this.setState({name:'Preethi'})

}
    render() {
        return (
            <>
            <h1>my name is {this.state.name} {this.state.lastname}</h1>
            <h3>{this.state.isRendered? "Rendered!" : "Rendering..."} </h3>
            <button onClick={this.changename}>change name</button>
            <p id='para'></p>
            <p id='para2'></p>
            </>
            
        )
    }
}

export default Lifecyclemethods