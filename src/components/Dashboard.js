import React from "react";



const Dashboard = () =>{
   
    return(
    <div >
    <div className="wrapper">
    <div class="section">
            <div class="top_navbar">
                <div class="hamburger">
                    <a href="/">
                        <i class="fas fa-bars"></i>
                    </a>
                </div>
            </div>
        </div>
        <div className="sidebar">
        <ul>
                <li>
                    <a href="/" class="active">
                        <span class="icon"><i class="fas fa-home"></i></span>
                        <span class="item">Home</span>
                    </a>
                </li>
                <li>
                <a href="/karyawan">
                        <span class="icon"><i class="fas fa-user-friends"></i></span>
                        <span class="item">Karyawan</span>
                </a>
                </li>
                <li>
                        <a href="galerilist">
                        <span class="icon"><i class="fas fa-desktop"></i></span>
                        <span class="item">Gallery</span>
                    </a>
                    
                </li>
               
            </ul>
        </div>
</div>

</div>

  );  
};



export default Dashboard;

