import React, { useEffect, useRef } from 'react';
import { H5P } from 'h5p-standalone';
import './App.css' 

const App = () => {
  const h5pRef = useRef(null);

  useEffect(() => {
    if (!h5pRef.current) {
      h5pRef.current = new H5P(document.getElementById('h5p-container'), {
        h5pJsonPath: '../h5p-standalone/content/h5p-content/my-video-3',
        frameJs: '../h5p-standalone/dist/frame.bundle.js',
        frameCss: '../h5p-standalone/dist/styles/h5p.css'
      });
    }
  }, []);

 
  return (
    <div>
      <h1>H5P Test</h1>
      <div id="h5p-container"></div>
       {/* <iframe
          src="http://localhost/wordpress/wp-admin/admin-ajax.php?action=h5p_embed&id=4"
          
          width="100%"  
          height="600"  
          frameborder="0"
          allowfullscreen="allowfullscreen"
          title="Interactive"
  ></iframe> */}
  {/* <iframe src="http://localhost/wordpress/wp-admin/admin-ajax.php?action=h5p_embed&id=3" width="806" height="515" frameborder="0" allowfullscreen="allowfullscreen" title="my_video"></iframe><script src="http://localhost/wordpress/wp-content/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script> */}
    </div> 
  );
};

export default App;