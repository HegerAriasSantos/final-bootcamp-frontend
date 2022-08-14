import "./styles.scss";

function App() {
  return (
    <div className="Home">
      <br /><br />
      <div>
        <h1 style={{
          padding: '0',
          height: '100%',
        }}>You need to look good and feel good!</h1><br />



        {/* This is the style of the description */}
        <p style={{
          fontSize: '15px',

        }}>This is your opportunity! Join us and have the best experience of your life!</p><br /><br />

      </div>

      {/* THIS IS HE PICTURE */}
      <img src="https://thefader-res.cloudinary.com/private_images/c_limit,w_1024/c_crop,h_683,w_1025,x_0,y_75,f_auto,q_auto:eco/IMG_1928_WEB_havya5/IMG_1928_WEB_havya5.jpg" alt="Foto" style={{ width: '50%', height: '50%' }} /><br /><br />
      {/* THIS IS HE BUTTON */}
      <div>
        <button type="button" style={{
          color: 'black',
          padding: '0.7em 1.7em',
          fontSize: '18px',
          borderRadius: '0.5em',
          background: '#4b75ff',
          border: '1px solid #e8e8e8',
          transition: 'all .4s',
          boxShadow: '6px 6px 12px #c5c5c5, -6px -6px 12px #fff',
          alignItems: 'left'
        }}> Contact us!</button> <br /><br />

      </div>
      {/* THIS IS A TEST */}

      {/* THIS IS THE FOOTER */}
      <footer>
        <h3 style={{
          height: '50px',
          background: '#BDBDBD',
          width: '100%',
          position: 'sticky',
          bottom: 0,
          color: 'black'
        }}> Copyright design license by react group </h3>
      </footer>

    </div>
  );
}

export default App;
