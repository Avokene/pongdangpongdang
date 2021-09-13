import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

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
    }
  }
  onReset(){
    this.setState({s1:0,s2:0,f1:0,
      c1:["#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3"],
      c2:["#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3"],
      c3:["#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3","#D3D3d3"]
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
        this.state.cProbability -= 10
      }
      success = true
    }
    else{
      //fail
      if(this.state.cProbability != 75) {
        this.state.cProbability += 10
      }
      success = false
    }
    if(index == 1) {
      if(success) {
        this.state.c1[this.state.s1] = "#0067a3"
      }
      else {
        this.state.c1[this.state.s1] = "#808080"
      }
      this.setState({s1:this.state.s1 + 1})
    }
    if(index == 2) {
      if(success) {
        this.state.c2[this.state.s2] = "#0067a3"
      }
      else {
        this.state.c2[this.state.s2] = "#808080"
      }
      this.setState({s2:this.state.s2 + 1})
    }
    if(index == 3) {
      if(success) {
        this.state.c3[this.state.f1] = "#9B111E"
      }
      else {
        this.state.c3[this.state.f1] = "#808080"
      }
      this.setState({f1:this.state.f1 + 1})
    }
  }
  render(){
    return(
      <div className="App" style={{flexDirection:'row',alignItems:'center',display:"blocks"}}>
        <h1>돌깎이</h1>
        <h4>{"성공확률: "+this.state.cProbability+"%"}</h4>
        <br></br>
        <div className="fline" style={{alignItems:'center',display:'flex',justifyContent:'center'}}>
          <p>첫 번째 각인</p>
          <div className = "c11" style={{width:30,height:30,backgroundColor:this.state.c1[0],borderRadius:30,padding:5}}></div>
          <div className = "c12" style={{width:30,height:30,backgroundColor:this.state.c1[1],borderRadius:30,padding:5}}></div>
          <div className = "c13" style={{width:30,height:30,backgroundColor:this.state.c1[2],borderRadius:30,padding:5}}></div>
          <div className = "c14" style={{width:30,height:30,backgroundColor:this.state.c1[3],borderRadius:30,padding:5}}></div>
          <div className = "c30" style={{width:30,height:30,backgroundColor:this.state.c1[4],borderRadius:30,padding:5}}></div>
          <div className = "c16" style={{width:30,height:30,backgroundColor:this.state.c1[5],borderRadius:30,padding:5}}></div>
          <div className = "c17" style={{width:30,height:30,backgroundColor:this.state.c1[6],borderRadius:30,padding:5}}></div>
          <div className = "c18" style={{width:30,height:30,backgroundColor:this.state.c1[7],borderRadius:30,padding:5}}></div>
          <div className = "c19" style={{width:30,height:30,backgroundColor:this.state.c1[8],borderRadius:30,padding:5}}></div>
          <div className = "c110" style={{width:30,height:30,backgroundColor:this.state.c1[9],borderRadius:30,padding:5}}></div>
          <button onClick={()=>{this.onPress(1)}}>각인하기</button>
        </div>
        <div style={{alignItems:'center',display:'flex',justifyContent:'center'}}>
          <p>두 번째 각인</p>
          <div className = "c21" style={{width:30,height:30,backgroundColor:this.state.c2[0],borderRadius:30,padding:5}}></div>
          <div className = "c22" style={{width:30,height:30,backgroundColor:this.state.c2[1],borderRadius:30,padding:5}}></div>
          <div className = "c23" style={{width:30,height:30,backgroundColor:this.state.c2[2],borderRadius:30,padding:5}}></div>
          <div className = "c24" style={{width:30,height:30,backgroundColor:this.state.c2[3],borderRadius:30,padding:5}}></div>
          <div className = "c25" style={{width:30,height:30,backgroundColor:this.state.c2[4],borderRadius:30,padding:5}}></div>
          <div className = "c26" style={{width:30,height:30,backgroundColor:this.state.c2[5],borderRadius:30,padding:5}}></div>
          <div className = "c27" style={{width:30,height:30,backgroundColor:this.state.c2[6],borderRadius:30,padding:5}}></div>
          <div className = "c28" style={{width:30,height:30,backgroundColor:this.state.c2[7],borderRadius:30,padding:5}}></div>
          <div className = "c29" style={{width:30,height:30,backgroundColor:this.state.c2[8],borderRadius:30,padding:5}}></div>
          <div className = "c210" style={{width:30,height:30,backgroundColor:this.state.c2[9],borderRadius:30,padding:5}}></div>
          <button onClick={()=>{this.onPress(2)}}>각인하기</button>
        </div>
        <div style={{alignItems:'center',display:'flex',justifyContent:'center'}}>
          <p>감소</p>
          <div className = "c31" style={{width:30,height:30,backgroundColor:this.state.c3[0],borderRadius:30,padding:5}}></div>
          <div className = "c32" style={{width:30,height:30,backgroundColor:this.state.c3[1],borderRadius:30,padding:5}}></div>
          <div className = "c33" style={{width:30,height:30,backgroundColor:this.state.c3[2],borderRadius:30,padding:5}}></div>
          <div className = "c34" style={{width:30,height:30,backgroundColor:this.state.c3[3],borderRadius:30,padding:5}}></div>
          <div className = "c35" style={{width:30,height:30,backgroundColor:this.state.c3[4],borderRadius:30,padding:5}}></div>
          <div className = "c36" style={{width:30,height:30,backgroundColor:this.state.c3[5],borderRadius:30,padding:5}}></div>
          <div className = "c37" style={{width:30,height:30,backgroundColor:this.state.c3[6],borderRadius:30,padding:5}}></div>
          <div className = "c38" style={{width:30,height:30,backgroundColor:this.state.c3[7],borderRadius:30,padding:5}}></div>
          <div className = "c39" style={{width:30,height:30,backgroundColor:this.state.c3[8],borderRadius:30,padding:5}}></div>
          <div className = "c310" style={{width:30,height:30,backgroundColor:this.state.c3[9],borderRadius:30,padding:5}}></div>
          <button onClick={()=>{this.onPress(3)}}>각인하기</button>
        </div>
        <button onClick={()=>{this.onReset()}}>리셋</button>
      </div>
    )
  }
}

export default App;
