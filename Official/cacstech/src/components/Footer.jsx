import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center' color='white' style={{backgroundColor : "#232D3F",fontFamily : "Times New Roman"}}>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.google.com/search?q=cacs+instagram+iiitkota&rlz=1C1VDKB_en-gbIN1071IN1071&oq=cacs&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIICAEQRRgnGDsyEQgCEEUYFBg5GIcCGLEDGIAEMg0IAxAuGJECGIAEGIoFMgwIBBAAGBQYhwIYgAQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgxNTk3ajBqNKgCALACAQ&sourceid=chrome&ie=UTF-8' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/cacs_iiitkota/' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className=''>
          <div className="logos" style={{height : "30px",display:"flex",justifyContent : "center"}}>
          <div className="innerlogos" style={{ width: "120px", height: "inherit", display: "flex", alignItems: "center", justifyContent: "center" }}>
  <div className="iiit" style={{ width: "60px", height: "inherit" }}>
    <img
      src="/photos/iiitkota.png"
      alt=""
      style={{ width: "100%", height: "100%", objectFit: "contain" }}
    />
  </div>
  <div className="cross" style={{ width: "60px", height: "inherit", margin: "0 10px" }}>
    <img
      src="https://img.freepik.com/premium-vector/new-twitter-x-logo-vector-twitter-x-sign-vector_952796-6.jpg?semt=ais_hybrid"
      alt=""
      style={{ width: "100%", height: "100%", objectFit: "contain" }}
    />
  </div>
  <div className="cacs" style={{ width: "60px", height: "inherit" }}>
    <img
      src="/cacs_logo.jpg"
      alt=""
      style={{ width: "100%", height: "100%", objectFit: "contain" }}
    />
  </div>
</div>

          </div>
        </section>

        <section className='mb-4'>
          <p>
            <br />
          "CACS Society, IIIT Kota" <br />
         "Empowering Innovation and Creativity"
          </p>
        </section>

        <section className=''>
          <MDBRow style={{display : "flex" , justifyContent : "space-evenly"}}>
             <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                  <ul className='list-unstyled mb-0'>
                <li>
                <a style={{textDecoration : "none"}} href="tel:0744-2667000" class="text-white" target="_blank" rel="noopener noreferrer">+91 78509 82929, +91 93136 77785</a>
                </li>
                <li>
                <a style={{textDecoration : "none"}} href="https://g.page/MNITJ?share" class="text-white" target="_blank" rel="noopener noreferrer">MNIT Office, Jaipur, 302017</a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <ul className='list-unstyled mb-0'>
                <li>
                <a style={{textDecoration : "none"}} href="tel: 0141-2715071" class="text-white" target="_blank" rel="noopener noreferrer">+91 73405 23775</a>
                </li>
                <li>
                <a style={{textDecoration : "none"}} href="mailto:cacs@iiitkota.ac.in" target="_blank" rel="noopener noreferrer" class="text-white">cacs@iiitkota.ac.in</a>
                </li>
              </ul>
            </MDBCol>

            
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:CACS
      </div>
    </MDBFooter>
  );
}