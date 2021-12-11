import { Component } from "react";
import './App.css';
import WidgetBox from './components/WidgetBox';

export default class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      products:[]
    };
  }

  getProducts(){
    fetch('https://getgreenspark.mocklab.io/products')
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{

      //add additional data to the objects fetched
      const publicProfileElements = {
        headerClass:'widget-header public-profile__widget-header',
        headerTextOne:'This product collects',
        headerTextTwo:'100 plastic bottles',
        headerTextOneClass:'widget-header-text-one public-profile__widget-header-text-one',
        headerTextTwoClass:'widget-header-text-two public-profile__widget-header-text-two',
        checkboxId:'public-profile__check-box',
        badgeColours:[
          {id:1,checkboxId:'public-profile__check-box--blue', labelClass:'badge-colour-box badge-colour-box--blue', fillClass:'badge-colour-fill badge-colour-fill--blue'},
          {id:2,checkboxId:'public-profile__check-box--green', labelClass:'badge-colour-box badge-colour-box--green', fillClass:'badge-colour-fill badge-colour-fill--green'},
          {id:3,checkboxId:'public-profile__check-box--beige', labelClass:'badge-colour-box badge-colour-box--beige', fillClass:'badge-colour-fill badge-colour-fill--beige'},
          {id:4,checkboxId:'public-profile__check-box--white', labelClass:'badge-colour-box badge-colour-box--white', fillClass:'badge-colour-fill badge-colour-fill--white'},
          {id:5,checkboxId:'public-profile__check-box--black', labelClass:'badge-colour-box badge-colour-box--black', fillClass:'badge-colour-fill badge-colour-fill--black'}
       ],
       activateBadgeCheckboxId:'public-profile__badge-toggle'
      }
      const treesElements = {
        headerClass:'widget-header trees__widget-header',
        headerTextOne:'This product plants',
        headerTextTwo:'100 trees',
        headerTextOneClass:'widget-header-text-one trees__widget-header-text-one',
        headerTextTwoClass:'widget-header-text-two trees__widget-header-text-two',
        checkboxId:'trees__check-box',
        badgeColours:[
          {id:1,checkboxId:'trees__check-box--blue', labelClass:'badge-colour-box badge-colour-box--blue', fillClass:'badge-colour-fill badge-colour-fill--blue'},
          {id:2,checkboxId:'trees__check-box--green', labelClass:'badge-colour-box badge-colour-box--green', fillClass:'badge-colour-fill badge-colour-fill--green'},
          {id:3,checkboxId:'trees__check-box--beige', labelClass:'badge-colour-box badge-colour-box--beige', fillClass:'badge-colour-fill badge-colour-fill--beige'},
          {id:4,checkboxId:'trees__check-box--white', labelClass:'badge-colour-box badge-colour-box--white', fillClass:'badge-colour-fill badge-colour-fill--white'},
          {id:5,checkboxId:'trees__check-box--black', labelClass:'badge-colour-box badge-colour-box--black', fillClass:'badge-colour-fill badge-colour-fill--black'}
       ],
       activateBadgeCheckboxId:'trees__badge-toggle'
      }
      const carbonElements = {
        headerClass:'widget-header carbon__widget-header',
        headerTextOne:'This product offsets',
        headerTextTwo:'100kgs of carbon',
        headerTextOneClass:'widget-header-text-one carbon__widget-header-text-one',
        headerTextTwoClass:'widget-header-text-two carbon__widget-header-text-two',
        checkboxId:'carbon__check-box',
        badgeColours:[
          {id:1, checkboxId:'carbon__check-box--blue', labelClass:'badge-colour-box badge-colour-box--blue', fillClass:'badge-colour-fill badge-colour-fill--blue'},
          {id:2, checkboxId:'carbon__check-box--green', labelClass:'badge-colour-box badge-colour-box--green', fillClass:'badge-colour-fill badge-colour-fill--green'},
          {id:3, checkboxId:'carbon__check-box--beige', labelClass:'badge-colour-box badge-colour-box--beige', fillClass:'badge-colour-fill badge-colour-fill--beige'},
          {id:4, checkboxId:'carbon__check-box--white', labelClass:'badge-colour-box badge-colour-box--white', fillClass:'badge-colour-fill badge-colour-fill--white'},
          {id:5, checkboxId:'carbon__check-box--black', labelClass:'badge-colour-box badge-colour-box--black', fillClass:'badge-colour-fill badge-colour-fill--black'}
       ],
       activateBadgeCheckboxId:'carbon__badge-toggle'
      }

      Object.assign(data[0], publicProfileElements);
      Object.assign(data[1], treesElements);
      Object.assign(data[2], carbonElements);

      this.setState({products:data})
    })
    .catch((err)=>{
      console.log(err)
    });
  }

  componentDidMount(){
    this.getProducts();
  }

  render(){
    return(
      <div className="app">
          <div className='widget-card'>
            <div className='widget-card-title'>
                <h3>Per product widgets</h3>
            </div>
            <div className='line'></div>
            <div className='widget-box-container'>
                  <WidgetBox products={this.state.products}/>
            </div>          
         </div>
    </div>
    )
  }
  
}


