import React, {Component} from 'react';
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cProbability:75,
      s1:0,
      s2:0,
      f1:0,
      c1:["#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3"],
      c2:["#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3"],
      c3:["#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3"],
      first:0,second:0,third:0,
      p75:0,p65:0,p55:0,p45:0,p35:0,p25:0,
      jeongbae:"정배"
    }
  }
  onReset(){
    this.setState({s1:0,s2:0,f1:0,cProbability:75,
      c1:["#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3"],
      c2:["#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3"],
      c3:["#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3"],
      first:0,second:0,third:0,
      p75:0,p65:0,p55:0,p45:0,p35:0,p25:0,
      jeongbae:"정배"
    })
  }
  onPress(index){
    let rand = Math.floor(Math.random()*100)+1;
    var success = false
    if(index == 1){
      if (this.state.s1 == 10) return;
    }
    if(index == 2){
      if (this.state.s2 == 10) return;
    }
    if(index == 3){
      if (this.state.f1 == 10) return;
    }
    if (rand <= this.state.cProbability) {
      //success
      if(this.state.cProbability != 25) {
        if(this.state.cProbability==45){
          this.state.p45 += 1;
        }
        if(this.state.cProbability==35){
          this.state.p35 += 1;
        }
        if(this.state.cProbability==25){
          this.state.p25 += 1;
        }
        this.state.cProbability -= 10
      }
      success = true
    }
    else{
      //fail
      if(this.state.cProbability != 75) {
        if(this.state.cProbability==75){
          this.state.p75 += 1;
        }
        if(this.state.cProbability==65){
          this.state.p65 += 1;
        }
        if(this.state.cProbability==55){
          this.state.p55 += 1;
        }
        this.state.cProbability += 10
      }
      success = false
    }
    if(index == 1) {
      if(success) {
        this.state.c1[this.state.s1] = "#0067a3"
        this.state.first += 1
      }
      else {
        this.state.c1[this.state.s1] = "#808080"
      }
      this.setState({s1:this.state.s1 + 1})
    }
    if(index == 2) {
      if(success) {
        this.state.c2[this.state.s2] = "#0067a3"
        this.state.second += 1
      }
      else {
        this.state.c2[this.state.s2] = "#808080"
      }
      this.setState({s2:this.state.s2 + 1})
    }
    if(index == 3) {
      if(success) {
        this.state.c3[this.state.f1] = "#9B111E"
        this.state.third += 1
      }
      else {
        this.state.c3[this.state.f1] = "#808080"
      }
      this.setState({f1:this.state.f1 + 1})
    }
    // end of press
    if (this.state.s1<9 && this.state.s2<9){
      if((this.state.p75 == 2) && this.state.cProbability == 75){
        this.setState({jeongbae:"역배"})
        console.log("75")
      }
      else if((this.state.p65 == 2) && this.state.cProbability == 65){
        this.setState({jeongbae:"역배"})
        console.log("65")
      }
      else if((this.state.p55 == 1) && this.state.cProbability == 55){
        this.setState({jeongbae:"역배"})
        console.log("55")
      }
      else if((this.state.p45 > 1 && this.state.p45 < 3) && this.state.cProbability == 45){
        this.setState({jeongbae:"역배"})
        console.log("45")
      }
      else if((this.state.p35 > 0 && this.state.p35 < 3) && this.state.cProbability == 35){
        this.setState({jeongbae:"역배"})
        console.log("35")
      }
      else if((this.state.p25 > 0 && this.state.p25 < 3) && this.state.cProbability == 25){
        this.setState({jeongbae:"역배"})
        console.log("25")
      }
      else{
        this.setState({jeongbae:"정배"})
      }
    }
  }
  renderCircles(index){
    if (index == 1) {
      return this.state.c1.map((color)=>{
        return(<div style={{width:30,height:30,borderRadius:30,margin:5,backgroundColor:color}} />)
      })
    }
    if (index == 2) {
      return this.state.c2.map((color)=>{
        return(<div style={{width:30,height:30,borderRadius:30,margin:5,backgroundColor:color}} />)
      })
    }
    if (index == 3) {
      return this.state.c3.map((color)=>{
        return(<div style={{width:30,height:30,borderRadius:30,margin:5,backgroundColor:color}} />)
      })
    }
  }
  render(){
    return(
      <div className="App" style={{display:"flex",flexDirection:'column',alignItems:'center',textAlign:'center',justifyContent:'center'}}>
        <h1>돌깎이</h1>
        <h4>{"성공확률: "+this.state.cProbability+"%"}</h4>
        <h2 style={{color:this.state.jeongbae=="정배" ? "steelblue" : "darkred"}}>{this.state.jeongbae}</h2>
        <div style={{alignItems:'center',display:'flex',justifyContent:'center'}}>
          <div style={{width:100}}>
            <h5>첫 번째 각인</h5>
          </div>
          {this.renderCircles(1)}
          <button onClick={()=>{this.onPress(1)}} style={{width:50,height:50,marginLeft:10,fontSize:14,backgroundColor:"steelblue",color:"white"}}>각인</button>
        </div>
        <div style={{alignItems:'center',display:'flex',justifyContent:'center'}}>
          <div style={{width:100}}>
            <h5>두 번째 각인</h5>
          </div>
          {this.renderCircles(2)}
          <button onClick={()=>{this.onPress(2)}} style={{width:50,height:50,marginLeft:10,fontSize:14,backgroundColor:"steelblue",color:"white"}}>각인</button>
        </div>
        <div style={{alignItems:'center',display:'flex',justifyContent:'center'}}>
          <div style={{width:100}}>
            <h5>감소</h5>
          </div>
          {this.renderCircles(3)}
          <button onClick={()=>{this.onPress(3)}} style={{width:50,height:50,marginLeft:10,fontSize:14,backgroundColor:"darkred",color:"white"}}>각인</button>
        </div>
        <button onClick={()=>{this.onReset()}}>리셋</button>
        <div>
          <h3>{this.state.first+" "+this.state.second+" "+this.state.third}</h3>
        </div>

      </div>
    )
  }
}

const styles = {
  circle: {
    width:30,
    height:30,
    borderRadius:30,
    margin:5,
    backgroundColor:"#000"
  }
}

export default App;
