class VisibilityToggle extends React.Component {

  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    }
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    }); 
  }

  render() {
    return (
      <div>
        <h1>Visible Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {
          this.state.visibility && (
            <div>
              <p>Hey. These are some details you can now see!</p>
            </div>
          )
        }
      </div>
    );
  }
};

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visibility = false;
// const onToggleDetails = () => {
//     visibility = !visibility;
//     renderApp();
// };

// const appRoot = document.getElementById('app');

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>Visible Toggle</h1>
//             <button onClick={onToggleDetails}>
//                 {visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Hey. These are some details you can now see!</p>
//                 </div>
//             )}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// };

// renderApp();