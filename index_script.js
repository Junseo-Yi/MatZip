const e = React.createElement;

class cat_switch extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    //const tmp = e('input', {type:'password'}, null)
    const div_input = e('input', {classname:"form-check-input", type:"checkbox", role:"switch", id:"flexSwitchCheckDefault"}, null);
    const div_label = e('label', {classname:"form-check-label", for:"flexSwitchCheckDefault"}, this.props.name);
    return(e('div', {classname: 'form-check form-switch'}, [div_input,div_label]));
    //return(e('input', {classname="form-check-input", type="checkbox", role= "switch", id = "flexSwitchCheckDefault"}, null));
  }

}
var cat_array = [{name:`식당`},{name:`간식`},{name:`카페`}];
for (let i=0; i<cat_array.length; i++){
  ReactDOM.render(
      e(cat_switch, {name:cat_array[i].name}, null),
      document.getElementById(cat_array[i].name)
  );
}
