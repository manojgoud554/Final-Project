import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './login'
import fruits from './assets/fruits.JPG';
// import frutisNew from './assets/frutisNew';
import vegetables from './assets/vegetables.jpg';
import groceries from './assets/groceries.png';
import veggies from './assets/veggies.jpg';
import success from './assets/success.png';
import Fruits from './fruits';
import cart from './cart.svg'
import mango from './assets/mango.svg';
import strawberry from './assets/strawberry.svg';
import kiwi1 from './assets/kiwi1.svg';
import beetroot1 from './assets/beetroot1.svg';
import mirchi from './assets/mirchi.svg';
import rice from './assets/rice.svg';
import salt from './assets/salt.svg';
import tomato from './assets/tomato.svg';
import potato from './assets/potato.svg';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// import Navbar from 'react-bootstrap/Navbar';
// import { Nav, NavItem, NavLink } from 'reactstrap';
import { Card, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import { keys } from '@material-ui/core/styles/createBreakpoints';
import { Input } from '@material-ui/core';
class Grocery extends React.PureComponent {
    items = [];
    constructor() {
        super();

        this.state = {
            signupData:{},
            signupPageErr:"",
            signupFlag: false,
            signupErr: "",
            signupmail: "",
            signupusername: "",
            signupnumber: "",
            signuppassword: "",
            signupConfirmPassword: "",
            signupConfirmPasswordErr: "",
            paymentYes: false,
            paymentSuccess: false,
            logout: false,
            totalAmount: 0,
            mail: "",
            loginerr: false,
            loggedIn: false,
            password: "",
            cartFlag: false,
            loginFlag: false,
            loginErrmsg: "",
            acceptPay: true,
            paymentFlag: false,
            groceriesFlag: false,
            fruitsFlag: false,
            veggiesFlag: false,
            Rice: "",
            RiceQuantity: 0,
            RiceAmount: 0,
            salt: "",
            saltQuantity: 0,
            saltAmount: 0,
            mirchi: "",
            mirchiQuantity: 0,
            mirchiAmount: 0,
            ricedisabled: true,
            saltdisabled: true,
            mirchidisabled: true,
            otherGroceriesAmount: 0,
            Mango: "",
            MangoQuantity: 0,
            MangoAmount: 0,
            kiwi: "",
            kiwiQuantity: 0,
            KiwiAmount: 0,
            Strawberry: "",
            StrawberryQuantity: 0,
            StrawberryAmount: 0,
            fruitsAmount: 0,
            mangoDisabled: true,
            kiwiDisabled: true,
            StrawberryDisabled: true,
            mangoerrMsg: "",
            kiwierrMsg: "",
            straerrMsg: "",
            fruitsErrorMessage: "",
            groceriesErrorMessage: "",
            veggieErrorMessage: "",
            tomato: "",
            tomatoQuantity: 0,
            tomatoAmount: 0,
            potato: "",
            potatoQuantity: 0,
            potatoAmount: 0,
            beetroot: "",
            beetrootQuantity: 0,
            beetrootAmount: 0,
            tomatoDisabled: true,
            potatoDisabled: true,
            beetrootDisabled: true,
            veggiesAmount: 0,
            itemsShopped: []
        }

    }

    other = () => {
        this.setState({ groceriesFlag: true });
        if (this.state.paymentSuccess) {
            this.setState({ salt: "" });
            this.setState({ mirchi: "" });
            this.setState({ Rice: "" });
            this.setState({ saltQuantity: 0 });
            this.setState({ RiceQuantity: 0 })
            this.setState({ mirchiQuantity: 0 });
        }
    }
    fruits = () => {
        this.setState({ fruitsFlag: true });
    }
    veggies = () => {
        this.setState({ veggiesFlag: true });
    }

    cart = () => {
        this.setState({ cartFlag: true });
        this.setState({ loginErrmsg: "" })
        if (this.state.paymentSuccess) {
            this.setState({ itemsShopped: [] })
        }
    }

    login = () => {
        console.log("bahvay")
        this.setState({ loginFlag: true });
        this.setState({ cartFlag: false })
        this.setState({signupFlag:false})
    }
    logout = () => {
        window.location.reload();
    }
    loginData = (event) => {
        if (event.target.name === "mail") {
            this.setState({ mail: event.target.value })
        }
        if (event.target.name === "password") {
            this.setState({ password: event.target.value });

        }
    }
    goBackHome = () => {
        window.location.reload();
        // console.log(this.state.loggedIn)
        // if(this.state.loggedIn){
        //     this.setState({loggedIn:true})
        // }

    }
    signup = () => {
        // this.setState({signupusername:""});
        this.setState({signuppassword:""})
        console.log("bhavya")
        this.setState({signupPageErr:""})
        this.setState({loginerr:""})
        this.setState({ signupFlag: true });
        this.setState({ loginFlag: false });
        console.log("signup")
    }
    register = () =>{
        let signUp=new Map();
        if(this.state.signupusername.length<=0 || this.state.signupConfirmPassword.length<=0 || this.state.signupnumber.length<=0 || this.state.signupmail.length<=0 || this.state.signuppassword.length<=0){
            this.setState({signupPageErr:"Please enter all the required information"});
            this.setState({ signupFlag: true });
        }
        else{
            this.setState({signupPageErr:""})
            this.setState({ signupFlag: false });
            this.setState({ loginFlag: false });
            console.log("signup")
        }
        console.log(this.signupusername)
       signUp.set(this.state.signupusername,this.state.signupConfirmPassword);
       this.setState({signupData:signUp});
    }
    submit = () => {
        this.setState({signupPageErr:""})
        console.log(this.state.signupData)
        if (this.state.mail === "vinay" || this.state.mail === "teja") {
            if (this.state.password === "bhavya") {
                this.setState({ loggedIn: true });
                this.setState({ loginFlag: false });
                this.setState({ signupErr: "" });
                this.setState({loginerr:""})
            }
            else {
                this.setState({ loggedIn: false });
                this.setState({ loginFlag: true });
                this.setState({ loginerr: "Username or password is in correct" });
            }
        }
        else if(this.state.mail.length>0 && this.state.password>0){
            if (this.state.mail===this.state.signupmail && this.state.password===this.state.signuppassword) {
                console.log("bhavya")
                this.setState({ loggedIn: true });
                this.setState({ loginFlag: false });
                this.setState({ signupErr: "" });
                this.setState({ loginerr: "" });
            }
            else {
                this.setState({ loggedIn: false });
                this.setState({ loginFlag: true });
                this.setState({ loginerr: "Please enter registered username" });
            }
        }
        
        else {
            this.setState({loginerr:"Please give your credentials"});
            this.setState({loginFlag:true})
            this.setState({loggedIn:false})
        }
        // if(this.state.password.length<=0 || this.state.mail.length<=0){
        //     this.setState({loginerr:"Please give your credentials"});
        //     this.setState({loginFlag:true})
        //     this.setState({loggedIn:false})
        // }
        // else{
        //     this.setState({loginerr:""});
        //     this.setState({loginFlag:false})
        //     this.setState({loggedIn:true})
        // this.setState({ cartFlag: false })

        // }

    }

    signupData = (event) => {
        // console.log(event.target.value);
        if (event.target.name === "username") {
            this.setState({ signupusername: event.target.value })
        }
        if (event.target.name === "email") {
            this.setState({ signupmail: event.target.value })
        }
        if (event.target.name === "password") {
            this.setState({ signuppassword: event.target.value });
        }
        if (event.target.name === "tel") {
            this.setState({ signupnumber: event.target.value });
        }
    }

    confirmPassword = (event) => {
        console.log(event.target.value)
        if (this.state.signuppassword === event.target.value) {
            this.setState({ signupConfirmPassword: event.target.value });
            this.setState({ signupConfirmPasswordErr: "" });
        }
        else {
            this.setState({ signupConfirmPassword: "" });
            this.setState({ signupConfirmPasswordErr: "Password doesnot match" })
        }
    }

    continue = () => {
        this.setState({ paymentFlag: true });
        this.setState({ cartFlag: false })
        let totalAmount = this.state.MangoAmount + this.state.KiwiAmount + this.state.StrawberryAmount + this.state.saltAmount + this.state.RiceAmount + this.state.mirchiAmount + this.state.potatoAmount + this.state.tomatoAmount + this.state.beetrootAmount;
        this.setState({ totalAmount: totalAmount });
        this.setState({ loginErrmsg: "" });
        this.setState({ paymentSuccess: true })
    }
    payment = () => {

        console.log(this.state.loggedIn);
        if (this.state.loggedIn) {
            let totalAmount = this.state.MangoAmount + this.state.KiwiAmount + this.state.StrawberryAmount + this.state.saltAmount + this.state.RiceAmount + this.state.mirchiAmount + this.state.potatoAmount + this.state.tomatoAmount + this.state.beetrootAmount;
            this.setState({ totalAmount: totalAmount });
            this.setState({ paymentYes: true, loginErrmsg: "" });
        }
        else {
            this.setState({ loginErrmsg: "To continue Payment, Please Login!!" })
        }
    }
    backHome = () => {
        let errMessage = "";
        // let kmsg = ""
        // let mMsg = ""
        // let smsg = ""
        console.log(this.state.fruitsErrorMessage);
        let count = 1;
        let shoppedItems = [];
        if (this.state.paymentSuccess) {
            this.setState({ itemsShopped: [] });
        }
        // if (this.state.fruitsErrorMessage.length === 0) {
        //     this.setState({ groceriesFlag: false, fruitsFlag: false, veggiesFlag: false });
        //     console.log(this.state.saltAmount + this.state.mirchiAmount + this.state.RiceAmount)
        //     this.setState({ otherGroceriesAmount: this.state.saltAmount + this.state.mirchiAmount + this.state.RiceAmount });
        // }
        // if(this.state.kiwi==="required" || this.state.Mango==="required" || this.state.Strawberry==="required"){
        //     if(this.state.StrawberryQuantity.length<=0 || this.state.kiwiQuantity<=0 || this.state.MangoQuantity<=0){
        //         console.log("bhavya");
        //         errMessage="Please enter the quantity of required fruit"
        //         this.setState({fruitsErrorMessage:"Please enter the quantity of required fruit"})
        //     }
        // }
        // if(this.state.salt==="required" || this.state.Rice==="required" || this.state.mirchi==="required"){
        //     if(this.state.saltQuantity.length<=0 || this.state.RiceQuantity<=0 || this.state.mirchiQuantity<=0){
        //         console.log("bhavya1");
        //         errMessage="Please enter the quantity of required Grocery"
        //         this.setState({groceriesErrorMessage:"Please enter the quantity of required Grocery"})
        //     }
        // }
        // if(this.state.salt==="required" || this.state.Rice==="required" || this.state.mirchi==="required"){
        //     if(this.state.saltQuantity.length<=0 || this.state.RiceQuantity<=0 || this.state.mirchiQuantity<=0){
        //         console.log("bhavya1");
        //         errMessage="Please enter the quantity of required Vegetable"
        //         this.setState({veggieErrorMessage:"Please enter the quantity of required Vegetable"})
        //     }
        // }
        if (this.state.Mango === "required") {
            console.log("bhavya44", typeof this.state.MangoQuantity)
            if (this.state.MangoQuantity === 0) {
                console.log("bhavya22")
                errMessage = "Please enter the quantity of required fruit";
                this.setState({ fruitsErrorMessage: "Please enter the quantity of required fruit" })

            }
            else {
                shoppedItems.push("Mango:" + this.state.MangoQuantity + "-" + this.state.MangoAmount);
            }
        }
        if (this.state.kiwi === "required") {
            if (this.state.kiwiQuantity === 0) {
                errMessage = "Please enter the quantity of required fruit";
                this.setState({ fruitsErrorMessage: "Please enter the quantity of required fruit" })
            }
            else {
                shoppedItems.push("Kiwi:" + this.state.kiwiQuantity + "-" + this.state.KiwiAmount);
            }
        }
        if (this.state.Strawberry === "required") {
            if (this.state.StrawberryQuantity === 0) {
                errMessage = "Please enter the quantity of required fruit";
                this.setState({ fruitsErrorMessage: "Please enter the quantity of required fruit" })
            }
            else {
                shoppedItems.push("Strawberry:" + this.state.StrawberryQuantity + "-" + this.state.StrawberryAmount);
            }
        }
        if (this.state.potato === "required") {
            if (this.state.potatoQuantity === 0) {
                errMessage = "Please enter the quantity of required vegetable";
                this.setState({ veggieErrorMessage: "Please enter the quantity of required vegetable" })
            }
            else {
                shoppedItems.push("Potato:" + this.state.potatoQuantity + "-" + this.state.potatoAmount);
            }
        }
        if (this.state.tomato === "required") {
            if (this.state.tomatoQuantity === 0) {
                errMessage = "Please enter the quantity of required vegetable";
                this.setState({ veggieErrorMessage: "Please enter the quantity of required vegetable" })
            }
            else {
                shoppedItems.push("Tomato:" + this.state.tomatoQuantity + "-" + this.state.tomatoAmount);
            }
        }
        if (this.state.beetroot === "required") {
            if (this.state.beetrootQuantity === 0) {
                errMessage = "Please enter the quantity of required vegetable";
                this.setState({ fruitsErrorMessage: "Please enter the quantity of required vegetable" })
            }
            else {
                shoppedItems.push("Beet Root:" + this.state.beetrootQuantity + "-" + this.state.beetrootAmount);
            }
        }
        if (this.state.salt === "required") {
            if (this.state.saltQuantity === 0) {
                errMessage = "Please enter the quantity of required grocery";
                this.setState({ groceriesErrorMessage: "Please enter the quantity of required grocery" })
            }
            else {
                shoppedItems.push("Salt:" + this.state.saltQuantity + "-" + this.state.saltAmount);
            }
        }
        if (this.state.mirchi === "required") {
            if (this.state.mirchiQuantity === 0) {
                errMessage = "Please enter the quantity of required grocery";
                this.setState({ groceriesErrorMessage: "Please enter the quantity of required grocery" })
            }
            else {
                shoppedItems.push("Mirchi Powder:" + this.state.mirchiQuantity + "-" + this.state.mirchiAmount);
            }
        }
        if (this.state.Rice === "required") {
            if (this.state.RiceQuantity === 0) {
                errMessage = "Please enter the quantity of required grocery";
                this.setState({ groceriesErrorMessage: "Please enter the quantity of required grocery" })
            }
            else {
                shoppedItems.push("Rice:" + this.state.RiceQuantity + "-" + this.state.RiceAmount);
            }
        }
        console.log(shoppedItems);
        // shoppedItems.forEach(attribute=>{

        //     this.items.push(<tr>
        //         <td>{count}</td>
        //         <td>{attribute.keys}</td>
        //         <td>{attribute.value}</td>
        //     </tr>)
        //     count=count+1;

        // })
        this.setState({ itemsShopped: shoppedItems });
        if (shoppedItems.length > 0) {
            this.setState({ acceptPay: false });
        }
        if (errMessage.length <= 0) {
            let totalAmount = this.state.MangoAmount + this.state.KiwiAmount + this.state.StrawberryAmount + this.state.saltAmount + this.state.RiceAmount + this.state.mirchiAmount + this.state.potatoAmount + this.state.tomatoAmount + this.state.beetrootAmount;
            this.setState({ fruitsErrorMessage: "", groceriesErrorMessage: "", veggieErrorMessage: "" });
            this.setState({ groceriesFlag: false, fruitsFlag: false, veggiesFlag: false, loginFlag: false, paymentYes: false, cartFlag: false, paymentFlag: false,signupFlag:false });
            console.log(this.state.saltAmount + this.state.mirchiAmount + this.state.RiceAmount)
            this.setState({ fruitsAmount: this.state.MangoAmount + this.state.KiwiAmount + this.state.StrawberryAmount })
            this.setState({ otherGroceriesAmount: this.state.saltAmount + this.state.mirchiAmount + this.state.RiceAmount });
            this.setState({ veggiesAmount: this.state.potatoAmount + this.state.tomatoAmount + this.state.beetrootAmount });
            this.setState({ totalAmount: totalAmount });
        }

    }
    handleInputChange = (event) => {
        let amountsArray = [];
        if (event.target.type === "select-one") {
            if (event.target.name === "RiceNeed") {
                this.setState({ Rice: event.target.value });
                if (event.target.value === "required") {
                    this.setState({ ricedisabled: false });
                }
                else {
                    this.setState({ ricedisabled: true })
                }
            }
            if (event.target.name === "saltNeed") {
                this.setState({ salt: event.target.value });
                if (event.target.value === "required") {
                    this.setState({ saltdisabled: false });
                }
                else {
                    this.setState({ saltdisabled: true })
                }
            }
            if (event.target.name === "MirchiNeed") {
                this.setState({ mirchi: event.target.value });
                if (event.target.value === "required") {
                    this.setState({ mirchidisabled: false });
                }
                else {
                    this.setState({ mirchidisabled: true })
                }
            }
        }

        if (event.target.type === "number") {
            if (event.target.name === "RiceQuantity") {
                this.setState({ RiceQuantity: event.target.value });
                if (this.state.Rice === "required") {
                    this.setState({ RiceAmount: event.target.value * 5 });
                    amountsArray.push(event.target.value * 5);
                    console.log(event.target.value * 5)
                }
                console.log(event.target.value);
            }
            if (event.target.name === "SaltQuantity") {
                this.setState({ saltQuantity: event.target.value });
                if (this.state.salt === "required") {
                    this.setState({ saltAmount: event.target.value * 10 });
                    console.log(event.target.value * 10)
                    amountsArray.push(event.target.value * 10);
                }
                console.log(event.target.value);
            }
            if (event.target.name === "MirchiQuantity") {
                this.setState({ mirchiQuantity: event.target.value });
                if (this.state.salt === "required") {
                    this.setState({ mirchiAmount: event.target.value * 6 });
                    console.log(event.target.value * 6)
                    amountsArray.push(event.target.value * 6);
                }
                console.log(event.target.value);
            }
        }

    }

    handleInputChange1 = (event) => {
        let amountsArray = [];
        if (event.target.type === "select-one") {
            if (event.target.name === "MangoNeed") {
                this.setState({ Mango: event.target.value });
                if (event.target.value === "required") {
                    this.setState({ mangoDisabled: false });
                }
                else {
                    this.setState({ mangoDisabled: true })
                }
            }
            if (event.target.name === "kiwiNeed") {
                this.setState({ kiwi: event.target.value });
                if (event.target.value === "required") {
                    this.setState({ kiwiDisabled: false });
                }
                else {
                    this.setState({ kiwiDisabled: true })
                }
            }
            if (event.target.name === "strawberryNeed") {
                this.setState({ Strawberry: event.target.value });
                if (event.target.value === "required") {
                    this.setState({ StrawberryDisabled: false });
                }
                else {
                    this.setState({ StrawberryDisabled: true })
                }
            }
        }

        if (event.target.type === "number") {
            if (event.target.name === "MangoQuantity") {
                this.setState({ MangoQuantity: event.target.value });
                if (this.state.Mango === "required") {
                    // if (event.target.value.length > 0) {
                    this.setState({ MangoAmount: event.target.value * 10 });
                    amountsArray.push(event.target.value * 10);
                    console.log(event.target.value * 10)
                    //     this.setState({ fruitsErrorMessage: "" });
                    // }
                    // else {
                    //     this.setState({ fruitsErrorMessage: "Please enter the quantity of selected fruit" });
                    // }

                }
                console.log(typeof event.target.value);
            }
            if (event.target.name === "KiwiQuantity") {
                this.setState({ kiwiQuantity: event.target.value });
                if (this.state.kiwi === "required") {
                    // if (event.target.value.length > 0) {
                    this.setState({ KiwiAmount: event.target.value * 10 });
                    console.log(event.target.value * 10)
                    amountsArray.push(event.target.value * 10);
                    // this.setState({ fruitsErrorMessage: "" });
                    // }
                    // else {
                    //     this.setState({ fruitsErrorMessage: "Please enter the quantity of selected fruit" });
                    // }
                }
                console.log(event.target.value);
            }
            if (event.target.name === "strawberryQuantity") {
                this.setState({ StrawberryQuantity: event.target.value });
                if (this.state.Strawberry === "required") {
                    // if (event.target.value.length > 0) {
                    this.setState({ StrawberryAmount: event.target.value * 6 });
                    console.log(event.target.value * 6)
                    amountsArray.push(event.target.value * 6);
                    //     this.setState({ fruitsErrorMessage: "" });
                    // }
                    // else {
                    //     this.setState({ fruitsErrorMessage: "Please enter the quantity of selected fruit" });
                    // }
                }
                console.log(event.target.value);
            }
        }

    }

    handleInputChange2 = (event) => {
        let amountsArray = [];
        if (event.target.type === "select-one") {
            if (event.target.name === "tomatoNeed") {
                this.setState({ tomato: event.target.value });
                if (event.target.value === "required") {
                    this.setState({ tomatoDisabled: false });
                }
                else {
                    this.setState({ tomatoDisabled: true })
                }
            }
            if (event.target.name === "potatoNeed") {
                this.setState({ potato: event.target.value });
                if (event.target.value === "required") {
                    this.setState({ potatoDisabled: false });
                }
                else {
                    this.setState({ potatoDisabled: true })
                }
            }
            if (event.target.name === "beetrootNeed") {
                this.setState({ beetroot: event.target.value });
                if (event.target.value === "required") {
                    this.setState({ beetrootDisabled: false });
                }
                else {
                    this.setState({ beetrootDisabled: true })
                }
            }
        }

        if (event.target.type === "number") {
            if (event.target.name === "beetrootQuantity") {
                this.setState({ beetrootQuantity: event.target.value });
                if (this.state.beetroot === "required") {
                    this.setState({ beetrootAmount: event.target.value * 6 });
                    amountsArray.push(event.target.value * 6);
                    console.log(event.target.value * 6)
                }
                console.log(event.target.value);
            }
            if (event.target.name === "potatoQuantity") {
                this.setState({ potatoQuantity: event.target.value });
                if (this.state.potato === "required") {
                    this.setState({ potatoAmount: event.target.value * 10 });
                    console.log(event.target.value * 10)
                    amountsArray.push(event.target.value * 10);
                }
                console.log(event.target.value);
            }
            if (event.target.name === "tomatoQuantity") {
                this.setState({ tomatoQuantity: event.target.value });
                if (this.state.tomato === "required") {
                    this.setState({ tomatoAmount: event.target.value * 5 });
                    console.log(event.target.value * 5)
                    amountsArray.push(event.target.value * 5);
                }
                console.log(event.target.value);
            }
        }

    }


    render() {
        console.log(this.state.itemsShopped);
        let itemsDisplay = []

        this.state.itemsShopped.forEach(values => {
            let amount = "";
            let item = "";
            let quantity = "";
            let amountQuant = "";
            item = values.split(':')[0];
            console.log(item);
            amount = values.split('-')[1];
            amountQuant = values.split(':')[1];
            console.log(amountQuant.split('-')[0])
            quantity = amountQuant.split('-')[0]
            console.log(amount)
            console.log(values.split(':'), values.split('-'));
            return (
                itemsDisplay.push(<tr>
                    <td>{item}</td>
                    <td>{quantity}</td>
                    <td>{amount}</td>
                </tr>)
            )
        })
        // this.state.itemsShopped.
        return (
            <React.Fragment>
                {/* <div className="row">
                    <div className="col-md-4">
                    <img src={fruits} alt="boohoo" style={{width:'300px'}}/>
                    
                    </div>
               </div> */}
                {this.state.groceriesFlag ?
                    <div className="row">
                        <div className="col-md-8 offset-2">
                            <b>List Of Other Groceries</b>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Picture</th>
                                        <th>Item Name</th>
                                        <th>Amount Per KG in $</th>
                                        <th>Select</th>
                                        <th>Required Quantity</th>
                                        <th>Price in $</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td><img src={rice}/></td>
                                        <td>Rice</td>
                                        <td>5</td>
                                        <td> <select name="RiceNeed" value={this.state.Rice} onChange={this.handleInputChange}>


                                            <option selected value="notRequired">Not Required</option>
                                            <option value="required">Required</option>

                                        </select></td>
                                        <td><input
                                            name="RiceQuantity"
                                            type="Number"
                                            step="0.1"
                                            onChange={this.handleInputChange}
                                            disabled={this.state.ricedisabled}
                                            value={this.state.RiceQuantity}
                                        /></td>
                                        <td>{this.state.RiceAmount}</td>
                                    </tr>
                                    <tr>
                                    <td><img src={salt}/></td>
                                        <td>Salt</td>
                                        <td>10</td>
                                        <td> <select name="saltNeed" value={this.state.salt} onChange={this.handleInputChange}>
                                            <option selected value="notRequired">Not Required</option>
                                            <option value="required">Required</option>


                                        </select></td>
                                        <td><input
                                            name="SaltQuantity"
                                            type="Number"
                                            onChange={this.handleInputChange}
                                            disabled={this.state.saltdisabled}
                                            value={this.state.saltQuantity}
                                            step="0.1"
                                        /></td>
                                        <td>{this.state.saltAmount}</td>
                                    </tr>
                                    <tr>
                                    <td><img src={mirchi}/></td>
                                        <td>Mirchi Powder</td>
                                        <td>6</td>
                                        <td> <select name="MirchiNeed" value={this.state.mirchi} onChange={this.handleInputChange}>


                                            <option selected value="notRequired">Not Required</option>
                                            <option value="required">Required</option>
                                        </select></td>
                                        <td><input
                                            name="MirchiQuantity"
                                            type="Number"
                                            step="0.1"
                                            onChange={this.handleInputChange}
                                            disabled={this.state.mirchidisabled}
                                            value={this.state.mirchiQuantity}
                                        /></td>
                                        <td>{this.state.mirchiAmount}</td>
                                    </tr>

                                </tbody>
                            </Table>
                            <Button variant="primary" onClick={this.backHome}>Back to Home</Button>
                            {this.state.groceriesErrorMessage.length > 0 ? <div style={{ color: 'red' }}>{this.state.groceriesErrorMessage}</div> : null}
                        </div>
                    </div> : this.state.fruitsFlag ? <div className="row">
                        <div className="col-md-8 offset-2">
                            <b>List Of Fruits</b>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Picture</th>
                                        <th>Item Name</th>
                                        <th>Amount Per KG in $</th>
                                        <th>Select</th>
                                        <th>Required Quantity</th>
                                        <th>Price in $</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td><img src={mango} className="image"/></td>
                                        <td>Mango</td>
                                        <td>10</td>
                                        <td> <select name="MangoNeed" value={this.state.Mango} onChange={this.handleInputChange1}>

                                            <option selected value="notRequired">Not Required</option>
                                            <option value="required">Required</option>
                                        </select></td>
                                        <td><input
                                            name="MangoQuantity"
                                            type="Number"
                                            step="0.1"
                                            onChange={this.handleInputChange1}
                                            disabled={this.state.mangoDisabled}
                                            value={this.state.MangoQuantity}
                                        /></td>
                                        <td>{this.state.MangoAmount}</td>
                                    </tr>
                                    <tr>
                                    <td><img src={kiwi1} className="image"/></td>
                                        <td>Kiwi</td>
                                        <td>10</td>
                                        <td> <select name="kiwiNeed" value={this.state.kiwi} onChange={this.handleInputChange1}>
                                            <option selected value="notRequired">Not Required</option>
                                            <option value="required">Required</option>


                                        </select></td>
                                        <td><input
                                            name="KiwiQuantity"
                                            type="Number"
                                            step="0.1"
                                            onChange={this.handleInputChange1}
                                            disabled={this.state.kiwiDisabled}
                                            value={this.state.kiwiQuantity}
                                        /></td>
                                        <td>{this.state.KiwiAmount}</td>
                                    </tr>
                                    <tr>
                                    <td><img src={strawberry} className="image"/></td>
                                        <td>Strawberry</td>
                                        <td>6</td>
                                        <td> <select name="strawberryNeed" value={this.state.Strawberry} onChange={this.handleInputChange1}>

                                            <option selected value="notRequired">Not Required</option>
                                            <option value="required">Required</option>

                                        </select></td>
                                        <td><input
                                            name="strawberryQuantity"
                                            type="Number"
                                            step="0.1"
                                            onChange={this.handleInputChange1}
                                            disabled={this.state.StrawberryDisabled}
                                            value={this.state.StrawberryQuantity}
                                        /></td>
                                        <td>{this.state.StrawberryAmount}</td>
                                    </tr>

                                </tbody>
                            </Table>
                            <Button variant="primary" onClick={this.backHome}>Back to Home</Button>
                            {this.state.fruitsErrorMessage.length > 0 ? <div style={{ color: 'red' }}>{this.state.fruitsErrorMessage}</div> : null}
                        </div>
                    </div> : this.state.veggiesFlag ? <div className="row">
                        <div className="col-md-8 offset-2">
                            <b>List Of Vegetables</b>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Picture</th>
                                        <th>Item Name</th>
                                        <th>Amount Per KG in $</th>
                                        <th>Select</th>
                                        <th>Required Quantity</th>
                                        <th>Price in $</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td><img src={tomato}/></td>
                                        <td>Tomato</td>
                                        <td>5</td>
                                        <td> <select name="tomatoNeed" value={this.state.tomato} onChange={this.handleInputChange2}>

                                            <option selected value="notRequired">Not Required</option>
                                            <option value="required">Required</option>
                                        </select></td>
                                        <td><input
                                            name="tomatoQuantity"
                                            type="Number"
                                            step="0.1"
                                            onChange={this.handleInputChange2}
                                            disabled={this.state.tomatoDisabled}
                                        /></td>
                                        <td>{this.state.tomatoAmount}</td>
                                    </tr>
                                    <tr>
                                    <td><img src={potato}/></td>
                                        <td>Potato</td>
                                        <td>10</td>
                                        <td> <select name="potatoNeed" value={this.state.potato} onChange={this.handleInputChange2}>


                                            <option selected value="notRequired">Not Required</option>
                                            <option value="required">Required</option>
                                        </select></td>
                                        <td><input
                                            name="potatoQuantity"
                                            type="Number"
                                            step="0.1"
                                            onChange={this.handleInputChange2}
                                            disabled={this.state.potatoDisabled}
                                        /></td>
                                        <td>{this.state.potatoAmount}</td>
                                    </tr>
                                    <tr>
                                    <td><img src={beetroot1}/></td>
                                        <td>Beet Root</td>
                                        <td>6</td>
                                        <td> <select name="beetrootNeed" value={this.state.beetroot} onChange={this.handleInputChange2}>


                                            <option selected value="notRequired">Not Required</option>
                                            <option value="required">Required</option>

                                        </select></td>
                                        <td><input
                                            name="beetrootQuantity"
                                            type="Number"
                                            step="0.1"
                                            onChange={this.handleInputChange2}
                                            disabled={this.state.beetrootDisabled}
                                        /></td>
                                        <td>{this.state.beetrootAmount}</td>
                                    </tr>

                                </tbody>
                            </Table>
                            <Button variant="primary" onClick={this.backHome}>Back to Home</Button>
                            {this.state.veggieErrorMessage.length > 0 ? <div style={{ color: 'red' }}>{this.state.veggieErrorMessage}</div> : null}
                        </div>
                    </div>
                            :
                            this.state.cartFlag ? <>
                                <div className="row nav">
                                    <div className="col-md-3 offset-4">
                                        <h2 style={{ color: 'aliceblue' }}>My Groceries</h2>
                                    </div>
                                    <div className="col-md-3  ">
                                        {this.state.loggedIn ?
                                            <>
                                                <b style={{ fontWeight: '500px', color: 'aliceblue' }}>Hey, {this.state.mail}</b>&nbsp;&nbsp;
                                     <Button className="logout" onClick={this.logout}>Logout</Button>
                                            </>
                                            : <Button className="login" onClick={this.login}>Login</Button>
                                        }
                                    </div>
                                    <div className="col-md-2 ">

                                        <Button className="cart" onClick={this.cart}><AddShoppingCartIcon></AddShoppingCartIcon> View Cart</Button>
                                    </div>
                                </div>
                                <div className="row" style={{ paddingTop: "40px" }}>
                                    <div className="col-md-4 offset-4">
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>

                                                    <th>Item Name</th>
                                                    <th>Quantity</th>
                                                    <th>Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {itemsDisplay}
                                            </tbody>
                                        </Table>
                                        <Button variant="primary" onClick={this.backHome}>Back to Home</Button>&nbsp;&nbsp;
                                    <Button variant="primary" disabled={this.state.acceptPay} onClick={this.payment}>Payment</Button>

                                        {this.state.loginErrmsg.length > 0 ? <div style={{ color: 'red' }}>{this.state.loginErrmsg}</div> : null}
                                    </div>
                                </div>
                                {this.state.paymentYes ?
                                    <div className="row">
                                        <div className="col-md-6 offset-3">

                                            <h5 style={{ color: 'green', marginTop: '20px' }}>The total amount to be paid is {this.state.totalAmount}.If you want to Continue Payment, please click on "Continue payment", else continue Shopping</h5>
                                            <Button variant="primary" disabled={this.state.acceptPay} onClick={this.continue}>Continue Payment</Button>
                                        </div>
                                    </div> : null}
                            </>
                                : this.state.loginFlag ? <>
                                    <div className="row nav">
                                        <div className="col-md-3 offset-4">
                                            <h2 style={{ color: 'aliceblue' }}>My Groceries</h2>
                                        </div>
                                        <div className="col-md-3">
                                            {this.state.loggedIn ?
                                                <>
                                                    <b style={{ fontWeight: '500px', color: 'aliceblue' }}>Hey, {this.state.mail}</b> &nbsp;&nbsp;
                                         <Button className="logout" onClick={this.logout}>Logout</Button>
                                                </>
                                                : <Button className="login" onClick={this.login}>Login</Button>}
                                        </div>
                                        <div className="col-md-2">

                                            <Button className="cart" onClick={this.cart}><AddShoppingCartIcon></AddShoppingCartIcon> View Cart</Button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 offset-4">
                                            <form>
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">UserName</label>
                                                    <input type="text" name="mail" onChange={this.loginData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                                                </div>
                                                <div className="form-group">
                                                    <label for="exampleInputPassword1">Password</label>
                                                    <input type="password" name="password" onChange={this.loginData} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                                </div>
                                                {/* <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                                </div> */}
                                                <Button onClick={this.submit}>Login</Button>&nbsp;&nbsp;
                                                <Button variant="primary" onClick={this.backHome}>Back to Home</Button>&nbsp;&nbsp;
                                                <Button variant="primary" onClick={this.signup}>Sign UP</Button>
                                                {/* <div className="row">
                                                    <div className="col-md-4 offset-4">
                                                    
                                                    </div>
                                                </div> */}
                                                {/* <button  onClick={this.submit} className="btn btn-primary">Login</button> */}
                                                {this.state.loginerr.length > 0 ? <div style={{ color: 'red' }}>{this.state.loginerr}</div> : null}
                                            </form>
                                        </div>
                                    </div>
                                </> : this.state.signupFlag ? <><div className="row nav">
                                    <div className="col-md-3 offset-4">
                                        <h2 style={{ color: 'aliceblue' }}>My Groceries</h2>
                                    </div>
                                    <div className="col-md-3  ">
                                        {this.state.loggedIn ?
                                            <>
                                                <b style={{ fontWeight: '500px', color: 'aliceblue' }}>Hey, {this.state.mail}</b>&nbsp;&nbsp;
                                             <Button className="logout" onClick={this.logout}>Logout</Button>
                                            </>
                                            : <Button className="login" onClick={this.login}>Login</Button>}
                                    </div>
                                    <div className="col-md-2">

                                        <Button className="cart" onClick={this.cart}><AddShoppingCartIcon></AddShoppingCartIcon> View Cart</Button>
                                    </div>
                                </div>
                                    <div className="row">
                                        <div className="col-md-4 offset-4">
                                            <form>
                                                <div className="form-group">
                                                    <label >Username</label>
                                                    <input value={this.state.signupusername} type="text" name="username" onChange={this.signupData} className="form-control"  required  placeholder="Enter UserName" />

                                                </div>
                                                <div className="form-group">
                                                    <label >Phone Number</label>
                                                    <input value={this.state.signupnumber} type="tel" name="tel" onChange={this.signupData} className="form-control"  required placeholder="Enter your mobile number" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Email address</label>
                                                    <input value={this.state.signupmail} type="email" name="email" onChange={this.signupData} className="form-control"  required placeholder="Enter your mail id" />
                                                </div>
                                                <div className="form-group">
                                                    <label >Enter New Password</label>
                                                    <input value={this.state.signuppassword}type="password" name="password" onChange={this.signupData} className="form-control"  required placeholder="Enter new password" />
                                                </div>
                                                <div className="form-group">
                                                    <label >Confirm Password</label>
                                                    <input  type="password" name="password2" onChange={this.confirmPassword} className="form-control"  required placeholder="Confirm Password" />
                                                </div>
                                                <span style={{ color: "red" }}>{this.state.signupConfirmPasswordErr.length > 0 ? this.state.signupConfirmPasswordErr : null}</span>
                                                {/* <div className="form-group">
                                                    <label for="exampleInputPassword1">Confirm Password</label>
                                                    <input type="password" name="password" onChange={this.loginData} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                                </div> */}
                                                {/* <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                                </div> */}
                                                <div>

                                                    <Button variant="primary" onClick={this.register}>Sign UP</Button>&nbsp;&nbsp;
                                                    <Button variant="primary" onClick={this.backHome}>Back to Home</Button>
                                                    {this.state.signupPageErr.length > 0 ? <div style={{ color: 'red' }}>{this.state.signupPageErr}</div> : null}
                                                </div>

                                                {/* <div className="row">
                                                    <div className="col-md-4 offset-4">
                                                    
                                                    </div>
                                                </div> */}
                                                {/* <button  onClick={this.submit} className="btn btn-primary">Login</button> */}
                                                {this.state.loginerr.length > 0 ? <div style={{ color: 'red' }}>{this.state.loginerr}</div> : null}
                                            </form>
                                        </div>
                                    </div>
                                </>
                                        : this.state.paymentFlag ? <>
                                            <div className="row nav">
                                                <div className="col-md-3 offset-4">
                                                    <h2 style={{ color: 'aliceblue' }}>My Groceries</h2>
                                                </div>
                                                <div className="col-md-3  ">
                                                    {this.state.loggedIn ?
                                                        <>
                                                            <b style={{ fontWeight: '500px', color: 'aliceblue' }}>Hey, {this.state.mail}</b>&nbsp;&nbsp;
                                             <Button className="logout" onClick={this.logout}>Logout</Button>
                                                        </>
                                                        : <Button className="login" onClick={this.login}>Login</Button>}
                                                </div>
                                                <div className="col-md-2">

                                                    <Button className="cart" onClick={this.cart}><AddShoppingCartIcon></AddShoppingCartIcon> View Cart</Button>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4 offset-4">
                                                    {/* <div style={{color:'green',paddingTop:'100px'}}>The total amount  payed is {this.state.totalAmount}</div>
                                            <div  style={{color:'green'}}>please visit our website Again, Thank you!!!</div> */}
                                                    <img style={{ marginLeft: '-220px' }} src={success} />
                                                    <Button style={{ marginLeft: '-90px' }} variant="primary" type="submit" onClick={this.goBackHome}>Back to Home</Button>
                                                </div>
                                            </div>

                                        </> :
                                            <>
                                                <div className="row nav">
                                                    <div className="col-md-3 offset-4">
                                                        <h2 style={{ color: 'aliceblue' }}>My Groceries</h2>
                                                    </div>
                                                    <div className="col-md-3">
                                                        {this.state.loggedIn ?
                                                            <>
                                                                <b style={{ fontWeight: '500px', color: 'aliceblue' }}>Hey, {this.state.mail}</b>&nbsp;&nbsp;
                                                <Button className="logout" onClick={this.logout}>Logout</Button>
                                                            </>
                                                            : <Button className="login" onClick={this.login}>Login</Button>}
                                                    </div>
                                                    <div className="col-md-2 ">

                                                        <Button className="cart" onClick={this.cart}><AddShoppingCartIcon></AddShoppingCartIcon> View Cart</Button>
                                                    </div>
                                                </div>

                                                <div className="row" style={{ paddingTop: "40px" }}>
                                                    <div className="col-md-3 offset-1">
                                                        <Card style={{ width: '18rem', height: '24rem' }}>
                                                            <Card.Img variant="top" src={fruits} />
                                                            <Card.Body>
                                                                <Card.Title>Fruits</Card.Title>
                                                                <Card.Text>
                                                                    Seasonal and non-seasonal fruits
                         </Card.Text>
                                                                <Button style={{ marginTop: '10px' }} variant="primary" onClick={this.fruits}>Select Fruits</Button>
                                                            </Card.Body>
                                                        </Card>
                                                    </div>
                                                    <div className="col-md-3 offset-1">
                                                        <Card style={{ width: '18rem', height: '24rem' }}>
                                                            <Card.Img variant="top" src={veggies} />
                                                            <Card.Body>
                                                                <Card.Title>Vegetables</Card.Title>
                                                                <Card.Text>
                                                                    Seasonal and non-seasonal vegetables
                         </Card.Text>
                                                                <Button variant="primary" onClick={this.veggies}>Select Vegetables</Button>
                                                            </Card.Body>
                                                        </Card>
                                                    </div>
                                                    <div className="col-md-3 offset-1">
                                                        <Card style={{ width: '18rem', height: '24rem' }}>
                                                            <Card.Img variant="top" src={groceries} />
                                                            <Card.Body>
                                                                <Card.Title>Other Groceries</Card.Title>
                                                                <Card.Text>
                                                                    Daily usage Groceries
                         </Card.Text>
                                                                <Button variant="primary" onClick={this.other}>Select Groceries</Button>
                                                            </Card.Body>
                                                        </Card>
                                                    </div>
                                                </div>
                                            </>
                }


            </React.Fragment>
        )

    }
}
export default Grocery;