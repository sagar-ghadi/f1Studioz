<template>
    <div class="container mt-4 configure-new-door-container p-0 p-md-2 p-lg-2">
        <div class="card-width">
            <b-card class="shadow-sm rounded mb-3 py-2">
                <p class="fw-bold width-75"> {{mergedCartData.width1}}'' {{mergedCartData.width2}}'' X {{mergedCartData.heigth1}}'' {{mergedCartData.heigth2}}'' {{mergedCartData.doorType}} {{mergedCartData.design}} {{mergedCartData.category}}  {{mergedCartData.color}} {{mergedCartData.trackLift}}</p>
                <p class="text-muted mb-1 fs-14">Job Name: Front door with glass <span class="text-brown fw-bolder">Change</span></p>
                <p class="text-muted mb-1 fs-14">Product #CWD •  Garage Door</p>
                <p class="text-muted fs-14"> Availability: <span class="text-green fw-bolder">IN STOCK </span> (Available for Pickup)</p>
                <div class="row mt-3">
                    <div class="col-12 col-md-4 col-lg-4 d-flex align-items-start order-3 order-md-1 order-lg-1 mb-3 mb-md-0 mb-lg-0">
                        <Button class="p-button-outlined p-button-secondary me-2 text-dark bg-light"  icon="pi pi-minus" />
                        <div class="me-2 border border-dark rounded py-2 px-4">
                            <span class="fw-bold">1</span>
                        </div>
                        <Button class="p-button-outlined p-button-secondary text-dark bg-light"  icon="pi pi-plus" />
                    </div>
                    <div class="col-6 fs-sm-11 col-md-4 col-lg-4 text-left text-md-center text-lg-center fw-bolder order-1 order-md-2 order-lg-2">
                        <p> 
                            <span class="text-green">Standard Multiplier: .432 <br>
                            Secondary Multipliers Applied <br>
                            </span>
                            <img :src="mpqIcon"/>
                            <span class="text-brown">Apply MPQ</span>
                        </p>
                    </div>
                    <div class="col-6 fs-sm-11 col-md-4 col-lg-4 text-end order-2 order-md-3 order-lg-3">
                        <p>
                            Net Price: <span class="fw-bold fs-5">$4500.00</span> <br>
                            Unit Price: $4800.00<br>
                            <span class="text-brown fs-14">View Price Details</span>
                        </p>
                    </div>
                </div>
                <div class="row border text-center d-flex align-items-center c-pointer m-0">
                    <div class="py-2 px-1 px-md-4 px-lg-4 fs-sm-11 bd-highlight border-end col-3 text-brown fw-bold">
                        <img :src="favoriteIcon" class="me-2"/>Favorites
                    </div>
                    <div class="py-2 px-1 px-md-4 px-lg-4 fs-sm-11 bd-highlight  border-end col-3 text-brown fw-bold c-pointer"  @click="editCartItem">
                        <img :src="pencilIcon" class="me-2"/>Edit
                    </div>
                    <div class="py-2 px-1 px-md-4 px-lg-4 fs-sm-11 bd-highlight  border-end col-3 text-brown fw-bold c-pointer">
                        <img :src="pasteIcon" class="me-2"/>Copy
                    </div>
                    <div class="py-2 px-1 px-md-4 px-lg-4 fs-sm-11 bd-highlight col-3 text-brown fw-bold c-pointer" @click="deleteCartItem">
                        <img :src="deleteIcon" class="me-2"/>Delete
                    </div>
                </div>
            </b-card>
            <div class="row"> 
                <div class="col-12 col-md-6 col-lg-6">
                    <b-card class="shadow-sm rounded mb-3 p-0">
                        <label class="fs-14">Change Delivery Date</label>
                        <b-form-datepicker id="example-datepicker" placeholder="Choose a date" class="my-2"></b-form-datepicker>
                        <label class="fs-14">Standard Delivery: Tue May 28 - 2019</label>
                    </b-card>
                     <b-card class="shadow-sm rounded mb-3 p-0">
                        <label class="fs-14">Purchase Order Number</label>
                        <b-form-input
                        v-model="orderNumber"
                        type="text"
                        placeholder="Enter PO Number"
                        class="my-2"
                        ></b-form-input>
                        <label class="fs-14">This PO will be useful to track this order items </label>
                    </b-card>
                </div>
               <div class="col-12 col-md-6 col-lg-6">
                    <b-card class="shadow-sm rounded mb-3 p-0">
                        <p class="fw-bold">Bill Summary</p>
                        <div class="d-flex bd-highlight mb-2">
                            <div class="bd-highlight">Sub Total</div>
                            <div class="ms-auto bd-highlight">$ 4500.00</div>
                        </div>
                        <div class="d-flex bd-highlight mb-2">
                            <div class="bd-highlight">Energy Surcharge</div>
                            <div class="ms-auto bd-highlight">$ 70.18</div>
                        </div>
                        <div class="d-flex bd-highlight mb-2">
                            <div class="bd-highlight">Sales Tax</div>
                            <div class="ms-auto bd-highlight">$ 490.93</div>
                        </div>
                        <div class="d-flex bd-highlight mb-2">
                            <div class="bd-highlight fw-bold fs-5">TOTAL</div>
                            <div class="ms-auto bd-highlight fw-bold fs-5">$ 5061.11</div>
                        </div>
                        <div class="border-top">
                            <div class="p-field-checkbox my-3 align-items-center d-flex fw-bold">
                                <Checkbox value="applyTax" v-model="applyTax" class="me-2" />
                                <label for="applyTax">Apply Tax</label>
                            </div>
                            <p class="text-muted mb-0 opacity-75">(The 1% iStore discount is calculated into the total price for all doors and door parts. Please refer to the quote or order acknowledgment for details.)</p>
                        </div>
                    </b-card>
                </div>
            </div>
            <b-card class="shadow-sm rounded mb-3 p-0">
                <div class="display-flex align-items-center">
                    <span>
                        <p class="mb-0">1 Item</p>
                        <p class="fs-5 mb-0 fw-bold">$5061.11</p>
                    </span>
                    <div class="ms-auto mt-3 mt-md-0 mt-lg-0">
                        <router-link to="/configureNewDoor">
                            <Button label="ADD MORE" class="btn-outline-brown me-2" icon="pi pi-plus"/>
                        </router-link>
                        <router-link to="/">
                            <Button label="PLACE ORDER" class="btn-brown" @click="placeOrder()"/>
                        </router-link>
                    </div>
                </div>
            </b-card>
        </div>
    </div>
</template>

<script>
import {mapActions} from "vuex";
import mpqIcon from "../assets/images/MPQ.png"
import deleteIcon from "../assets/images/delete.png"
import favoriteIcon from "../assets/images/favorite.png"
import pasteIcon from "../assets/images/paste.png"
import pencilIcon from "../assets/images/pencil.png"
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
export default {
    components:{
        Button,
        Checkbox,
    },
    data(){
        return{
            mpqIcon:mpqIcon,
            deleteIcon:deleteIcon,
            favoriteIcon:favoriteIcon,
            pasteIcon:pasteIcon,
            pencilIcon:pencilIcon,
            applyTax:"",
            orderNumber:"",
            mergedCartData:"",
            cartData:JSON.parse(sessionStorage.getItem('cartData')) || []

        }
    },
    mounted(){
        const mergedConfigureData =  JSON.parse(sessionStorage.getItem('mergedCartData'));
        this.mergedCartData = mergedConfigureData;
    },
    methods:{
        ...mapActions({
            addCartItem:'addCartItem'
        }),
        placeOrder(){
            const mergedConfigureData =  JSON.parse(sessionStorage.getItem('mergedCartData'));
            this.cartData.push(mergedConfigureData);
            this.addCartItem(this.cartData)
        },
        deleteCartItem(){
            delete  this.mergedCartData;
            this.$router.push({name: 'Home'});
        },
        editCartItem(){
            this.$router.push({name: 'configureNewDoorOptions'});
        }
    }
}
</script>