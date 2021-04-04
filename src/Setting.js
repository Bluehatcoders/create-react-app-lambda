import React from 'react';
const Setting = () => { 
  return (
    
    <div id="appCapsule"><div className="section mt-3 text-center"><div className="avatar-section"><a href="#"><img src="https://d33wubrfki0l68.cloudfront.net/cf4659276540ac7ee8d0b74241c71273435f9e9f/4ec62/avatar1.jpg" alt="avatar" className="imaged w100 rounded" /><span className="button"><ion-icon name="camera-outline" role="img" className="md hydrated" aria-label="camera outline" /></span></a></div></div><div className="listview-title mt-1">Notifications</div><ul className="listview image-listview text"><li><div className="item"><div className="in"><div>Payment Alert <div className="text-muted">Send notification when new payment received </div></div><div className="custom-control custom-switch"><input type="checkbox" className="custom-control-input" id="customSwitch4" defaultChecked /><label className="custom-control-label" htmlFor="customSwitch4" /></div></div></div></li><li><a href="#" className="item"><div className="in"><div>Notification Sound</div><span className="text-primary">Beep</span></div></a></li></ul><div className="listview-title mt-1">Profile Settings</div><ul className="listview image-listview text"><li><a href="#" className="item"><div className="in"><div>Change Username</div></div></a></li><li><a href="#" className="item"><div className="in"><div>Update E-mail</div></div></a></li><li><a href="#" className="item"><div className="in"><div>Address</div><span className="text-primary">Edit</span></div></a></li><li><div className="item"><div className="in"><div>Private Profile </div><div className="custom-control custom-switch"><input type="checkbox" className="custom-control-input" id="customSwitch2" /><label className="custom-control-label" htmlFor="customSwitch2" /></div></div></div></li></ul><div className="listview-title mt-1">Security</div><ul className="listview image-listview text mb-2"><li><a href="#" className="item"><div className="in"><div>Update Password</div></div></a></li><li><div className="item"><div className="in"><div>2 Step Verification </div><div className="custom-control custom-switch"><input type="checkbox" className="custom-control-input" id="customSwitch3" defaultChecked /><label className="custom-control-label" htmlFor="customSwitch3" /></div></div></div></li><li><a href="#" className="item"><div className="in"><div>Log out all devices</div></div></a></li></ul></div>

    
    
        );
}

export default Setting;
