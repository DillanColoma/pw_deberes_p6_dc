var HolaMundo = React.createClass({    
  render: function() {    
    return (    
      <h1>Hola mundo React CDN</h1>    
    )    
  }    
});    console.log(HolaMundo);   
ReactDOM.render(    
  <HolaMundo/>,    
  document.querySelector('#root') 
);