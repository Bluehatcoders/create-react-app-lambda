import React, { Component } from "react"
import { Link } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Body from './Body';
import Setting from './Setting';
class App extends Component {
  render() {
    return (
    <div className="App">
    <BrowserRouter> 
      <div>
<Route exact path="/" component={Body} />
<Route exact path="/setting" component={Setting} />
      </div>
 </BrowserRouter>
      <div className="appBottomMenu" style={{background: '#f8f8f8'}}><Link to="/setting" className="item active" style={{fontSize: '9px', letterSpacing: 0, textAlign: 'center', width: '100%', height: '56px', lineHeight: '1.2em', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}}><div className="col"><svg style={{height: '24px'}} className="ionicon" viewBox="0 0 512 512"><title>Home</title><path d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><path d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></svg><strong style={{fontSize: '9px', marginTop: '4px', display: 'block', color: '#6236FF !important', fontWeight: 400, transition: '0.1s all', fontFamily: 'arial'}}>Home</strong></div> </Link><Link to="#" className="item" data-toggle="modal" data-target="#exchangeActionSheet" style={{fontSize: '9px', letterSpacing: 0, textAlign: 'center', width: '100%', height: '56px', lineHeight: '1.2em', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}}><div className="col"><svg style={{height: '24px', color: '#27173E', lineHeight: '1.2em'}} xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Bar Chart</title><path d="M32 32v432a16 16 0 0016 16h432" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><rect x={96} y={224} width={80} height={192} rx={20} ry={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><rect x={240} y={176} width={80} height={240} rx={20} ry={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><rect x="383.64" y={112} width={80} height={304} rx={20} ry={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></svg><strong style={{fontSize: '9px', marginTop: '4px', display: 'block', color: '#27173E !important', fontWeight: 400, transition: '0.1s all', fontFamily: 'arial'}}>Analysis</strong></div> </Link><Link to="app-components.html" className="item" style={{fontSize: '9px', letterSpacing: 0, textAlign: 'center', width: '100%', height: '56px', lineHeight: '1.2em', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}}><div className="col"><svg style={{height: '24px', color: '#27173E', lineHeight: '1.2em'}} xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Compass</title><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} /><path d="M350.67 150.93l-117.2 46.88a64 64 0 00-35.66 35.66l-46.88 117.2a8 8 0 0010.4 10.4l117.2-46.88a64 64 0 0035.66-35.66l46.88-117.2a8 8 0 00-10.4-10.4zM256 280a24 24 0 1124-24 24 24 0 01-24 24z" /></svg><strong style={{fontSize: '9px', marginTop: '4px', display: 'block', color: '#27173E !important', fontWeight: 400, transition: '0.1s all', fontFamily: 'arial'}}>Explore</strong></div> </Link><Link to="app-cards.html" className="item" style={{fontSize: '9px', letterSpacing: 0, textAlign: 'center', width: '100%', height: '56px', lineHeight: '1.2em', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}}><div className="col"><svg style={{height: '24px', color: '#27173E', lineHeight: '1.2em'}} xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Card</title><rect x={48} y={96} width={416} height={320} rx={56} ry={56} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={60} d="M48 192h416M128 300h48v20h-48z" /></svg><strong style={{fontSize: '9px', marginTop: '4px', display: 'block', color: '#27173E !important', fontWeight: 400, transition: '0.1s all', fontFamily: 'arial'}}>My Cards</strong></div> </Link><Link to="app-notification.html" className="item" style={{fontSize: '9px', letterSpacing: 0, textAlign: 'center', width: '100%', height: '56px', lineHeight: '1.2em', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}}><div className="col"><svg style={{height: '24px', color: '#27173E', lineHeight: '1.2em'}} xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Settings</title><path d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></svg><strong style={{fontSize: '9px', marginTop: '4px', display: 'block', color: '#27173E !important', fontWeight: 400, transition: '0.1s all', fontFamily: 'arial'}}>Settings</strong></div> </Link></div>

</div>
    );
  }
}

export default App
