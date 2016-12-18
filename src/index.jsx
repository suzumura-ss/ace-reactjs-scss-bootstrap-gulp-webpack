const TheTheme = 'solarized_light';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
require('brace/theme/' + TheTheme);


ReactDOM.render(
  <div class="row">
    <AceEditor
      mode='javascript'
      theme={TheTheme}
      name='ace-javascript'
      className='col-md-12'
      width='100%'
      height='300px'
      editorProps={{$blockScrolling: true}}
    />
  </div>
  ,
  document.getElementById('application')
);
