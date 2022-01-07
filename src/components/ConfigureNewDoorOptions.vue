<template>
  <div class="container mt-4 configure-new-door-container">
    <div class="card-width">
        <b-card class="shadow-sm rounded mb-3">
            <template #header>
                <h6 class="mb-0 fw-bold">Layout options</h6>
            </template>
            <b-card-text>
                <div class="configure-container">
                    <div class="row align-items-center mb-3">
                        <div class="col-12 col-md-4 col-lg-4 text-start">
                            <p class="mb-0 md-grey">Assembly Type</p>
                        </div>
                        <div class="col-12 col-md-8 col-lg-8 mt-2 mt-sm-0 mt-md-0 mt-lg-0 pe-0 pe-md-2">
                            <b-form-select  v-model="selectedType" class="width-75" :options="assemblyType"></b-form-select>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-md-4 col-lg-4 text-start align-items-center">
                            <p class="mb-0 md-grey d-inline me-2">Measure Size</p>
                            <img :src="noteIcon" class="opacity-25"/>
                        </div>
                       <div class="col-12 col-md-8 col-lg-8 mt-2 mt-sm-0 mt-md-0 mt-lg-0 pe-0 pe-md-2">
                            <div class="row align-items-center mb-3">
                                <div class="col-auto text-start pe-0 p-md-0 p-lg-0">
                                    <p class="mb-0 md-grey fs-14">Width</p>
                                </div>
                                <div class="col-12 col-md-4 col-lg-3 mt-2 mt-sm-0 mt-md-0 mt-lg-0">
                                    <b-form-select  v-model="selectedWidth1" class="width-75" :options="width1"></b-form-select>
                                </div>
                                <div class="col-12 col-md-4 col-lg-3 pe-md-1 pe-lg-1 mt-2 mt-sm-0 mt-md-0 mt-lg-0">
                                    <b-form-select v-model="selectedWidth2" class="width-75" :options="width2"></b-form-select>
                                </div>
                            </div>
                            <div class="row align-items-center mb-3">
                                <div class="col-auto text-start pe-0 p-md-0 p-lg-0">
                                    <p class="mb-0 md-grey fs-14">Height</p>
                                </div>
                                <div class="col-12 col-md-4 col-lg-3 mt-2 mt-sm-0 mt-md-0 mt-lg-0">
                                    <b-form-select v-model="selectedHeigth1" class="width-75" :options="heigth1"></b-form-select>
                                </div>
                                <div class="col-12 col-md-4 col-lg-3 pe-md-1 pe-lg-1 mt-2 mt-sm-0 mt-md-0 mt-lg-0">
                                    <b-form-select v-model="selectedHeigth2" class="width-75" :options="heigth2"></b-form-select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-center mb-3">
                         <div class="col-12 col-md-4 col-lg-4 text-start align-items-center">
                            <p class="mb-0 md-grey d-inline me-2">Windcode</p>
                            <img :src="noteIcon" class="opacity-25"/>
                        </div>
                       <div class="col-12 col-md-8 col-lg-8 mt-2 mt-sm-0 mt-md-0 mt-lg-0 pe-0 pe-md-2">
                            <b-form-select v-model="selectedWindcode" class="width-75" :options="windCode"></b-form-select>
                        </div>
                    </div>
                    <div class="row align-items-center mb-3">
                        <div class="col-12 col-md-4 col-lg-4 text-start align-items-center">
                            <p class="mb-0 md-grey d-inline me-2">Design</p>
                            <img :src="noteIcon" class="opacity-25"/>
                        </div>
                        <div class="col-12 col-md-8 col-lg-8 mt-2 mt-sm-0 mt-md-0 mt-lg-0 pe-0 pe-md-2">
                             <b-form-select v-model="selectedDesign" class="width-75" :options="design"></b-form-select>
                        </div>
                    </div>
                    <div class="row align-items-center mb-3">
                        <div class="col-12 col-md-4 col-lg-4 text-start align-items-center">
                            <p class="mb-0 md-grey d-inline me-2">Color</p>
                            <img :src="noteIcon" class="opacity-25"/>
                        </div>
                        <div class="col-12 col-md-8 col-lg-8 mt-2 mt-sm-0 mt-md-0 mt-lg-0 pe-0 pe-md-2">
                            <b-form-select v-model="selectedColor" class="width-75" :options="color"></b-form-select>
                        </div>
                    </div>
                </div>
            </b-card-text>
        </b-card>
        <b-card class="shadow-sm rounded mb-3">
            <template #header>
                <h6 class="mb-0 fw-bold">Window Options</h6>
            </template>
            <b-card-text>
                <div class="configure-container">
                    <div class="row align-items-center mb-3">
                        <div class="col-12 col-md-4 col-lg-4 text-start align-items-center">
                            <p class="mb-0 md-grey d-inline me-2">Glass Type</p>
                            <img :src="noteIcon" class="opacity-25"/>
                        </div>
                         <div class="col-12 col-md-8 col-lg-8 mt-2 mt-sm-0 mt-md-0 mt-lg-0 pe-0 pe-md-2">
                             <b-form-select v-model="selectedGlassType" class="width-75" :options="glassType"></b-form-select>
                        </div>
                    </div>
                    <div class="row align-items-center mb-3">
                        <div class="col-12 col-md-4 col-lg-4 text-start align-items-center">
                            <p class="mb-0 md-grey d-inline me-2">Section(s) Glazed</p>
                            <img :src="noteIcon" class="opacity-25"/>
                        </div>
                         <div class="col-12 col-md-8 col-lg-8 mt-2 mt-sm-0 mt-md-0 mt-lg-0 pe-0 pe-md-2">
                            <b-form-select v-model="selectedSection" class="width-75" :options="section"></b-form-select>
                        </div>
                    </div>
                    <div class="row align-items-center mb-3">
                        <div class="col-12 col-md-4 col-lg-4 text-start align-items-center">
                            <p class="mb-0 md-grey d-inline me-2">Framing</p>
                            <img :src="noteIcon" class="opacity-25"/>
                        </div>
                         <div class="col-12 col-md-8 col-lg-8 mt-2 mt-sm-0 mt-md-0 mt-lg-0 pe-0 pe-md-2">
                            <b-form-select v-model="selectedFraming" class="width-75" :options="framing"></b-form-select>
                        </div>
                    </div>
                </div>
            </b-card-text>
        </b-card>
        <b-card class="shadow-sm rounded mb-3">
            <template #header>
                <h6 class="mb-0 fw-bold">Track Options</h6>
            </template>
            <b-card-text>
                <div class="configure-container">
                    <div class="row align-items-center mb-3">
                        <div class="col-12 col-md-4 col-lg-4 text-start align-items-center">
                            <p class="mb-0 md-grey d-inline me-2">Spring</p>
                            <img :src="noteIcon" class="opacity-25"/>
                        </div>
                         <div class="col-12 col-md-8 col-lg-8 mt-2 mt-sm-0 mt-md-0 mt-lg-0 pe-0 pe-md-2">
                            <b-form-select v-model="selectedSpring" class="width-75" :options="spring"></b-form-select>
                        </div>
                    </div>
                    <div class="row align-items-center mb-3">
                        <div class="col-12 col-md-4 col-lg-4 text-start align-items-center">
                            <p class="mb-0 md-grey d-inline me-2">Track Size</p>
                            <img :src="noteIcon" class="opacity-25"/>
                        </div>
                         <div class="col-12 col-md-8 col-lg-8 mt-2 mt-sm-0 mt-md-0 mt-lg-0 pe-0">
                            <b-form-select v-model="selectedTrackSize" class="width-75" :options="trackSize"></b-form-select>
                        </div>
                    </div>
                    <div class="row align-items-center mb-3">
                        <div class="col-12 col-md-4 col-lg-4 text-start align-items-center">
                            <p class="mb-0 md-grey d-inline me-2">Track Mount</p>
                            <img :src="noteIcon" class="opacity-25"/>
                        </div>
                         <div class="col-12 col-md-8 col-lg-8 mt-2 mt-sm-0 mt-md-0 mt-lg-0 pe-0 pe-md-2">
                             <b-form-select v-model="selectedTrackMount" class="width-75" :options="trackMount"></b-form-select>
                        </div>
                    </div>
                    <div class="row align-items-center mb-3">
                        <div class="col-12 col-md-4 col-lg-4 text-start align-items-center">
                            <p class="mb-0 md-grey d-inline me-2">Track Lift</p>
                            <img :src="noteIcon" class="opacity-25"/>
                        </div>
                         <div class="col-12 col-md-8 col-lg-8 mt-2 mt-sm-0 mt-md-0 mt-lg-0 pe-0 pe-md-2">
                            <b-form-select v-model="selectedTrackLift" class="width-75" :options="trackLift"></b-form-select>
                        </div>
                    </div>
                    <div class="row align-items-center mb-3">
                        <div class="col-12 col-md-4 col-lg-4 text-start align-items-center">
                            <p class="mb-0 md-grey d-inline me-2">Track Radius</p>
                            <img :src="noteIcon" class="opacity-25"/>
                        </div>
                         <div class="col-12 col-md-8 col-lg-8 mt-2 mt-sm-0 mt-md-0 mt-lg-0 pe-0 pe-md-2">
                            <b-form-select v-model="selectedTrackRadius" class="width-75" :options="trackRadius"></b-form-select>
                        </div>
                    </div>
                </div>
            </b-card-text>
        </b-card>
        <b-card class="shadow-sm rounded mb-3">
            <template #header>
                <h6 class="mb-0 fw-bold">Other Options</h6>
            </template>
            <b-card-text>
                <div class="configure-container">
                    <div class="row align-items-center mb-3">
                        <div class="col-12 col-md-4 col-lg-4 text-start align-items-center">
                            <p class="mb-0 md-grey d-inline me-2">Lock</p>
                            <img :src="noteIcon" class="opacity-25"/>
                        </div>
                        <div class="col-12 col-md-8 col-lg-8 mt-2 mt-sm-0 mt-md-0 mt-lg-0 pe-0 pe-md-2">
                            <b-form-select v-model="selectedLock" class="width-75" :options="lock"></b-form-select>
                        </div>
                    </div>
                    <div class="row align-items-center mb-3">
                        <div class="col-12 col-md-4 col-lg-4 text-start align-items-center">
                            <p class="mb-0 md-grey d-inline">MISC Lock Options</p>
                        </div>
                         <div class="col-12 col-md-8 d-flex col-lg-8 mt-2 mt-sm-0 mt-md-0 mt-lg-0 pe-0 pe-md-2">
                            <RadioButton inputId="locOptions" name="locOptions" value="No Lock Hole" class="me-2" v-model="locOptions" />
                             <label for="locOptions" class="fs-14">No Lock Hole</label>
                        </div>
                    </div>
                    <div class="row align-items-center mb-3">
                        <div class="col-12 col-md-4 col-lg-4 text-start align-items-center">
                            <p class="mb-0 md-grey d-inline me-2">Packaging</p>
                            <img :src="noteIcon" class="opacity-25"/>
                        </div>
                         <div class="col-12 col-md-8 col-lg-8 mt-2 mt-sm-0 mt-md-0 mt-lg-0 pe-0 pe-md-2">
                            <b-form-select v-model="selectedPackaging" class="width-75" :options="packaging"></b-form-select>
                            <p class="text-danger fs-14 d-flex align-items-center mt-2">
                                <img :src="notification" class="me-1"/>
                                <span>Clopay CWD Models Excludes  Packaging Options</span>
                            </p>
                        </div>
                    </div>
                     <div class="row mb-3">
                        <div class="col-12 col-md-4 col-lg-4 text-start align-items-center">
                            <p class="mb-0 md-grey d-inline me-2">Additional Options</p>
                            <img :src="noteIcon" class="opacity-25"/>
                        </div>
                         <div class="col-12 col-md-8 col-lg-8 mt-2 mt-sm-0 mt-md-0 mt-lg-0 pe-0 pe-md-2">
                            <div class="row m-0">
                                <div class="col-12 col-md-4 col-lg-4 text-start align-items-center">
                                    <div v-for="category of categories" :key="category.key" class="p-field-checkbox d-flex align-items-center mb-3">
                                        <Checkbox :id="category.key" name="category" :value="category" v-model="selectedCategories" class="me-2"/>
                                        <label :for="category.key" class="fs-14">{{category.name}}</label>
                                    </div>
                                </div>
                                 <div class="col-12 col-md-8 col-lg-3 mt-2 mt-sm-0 mt-md-0 mt-lg-0 pe-0 pe-md-2">
                                    <b-form-select v-model="selectedExtraStrunt" class="width-75" :options="extraStrunt"></b-form-select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </b-card-text>
        </b-card>
        <b-card class="shadow-sm rounded mb-3">
            <div class="d-flex justify-content-end">
                <Button label="PREVIEW" class="btn-outline-brown me-2"/>
                <router-link to="/cart">
                    <Button label="ADD TO CART" class="btn-brown" @click="addToCart()"/>
                </router-link>
            </div>
        </b-card>
    </div>
  </div>
</template>

<script>
import noteIcon from "../assets/images/note.png"
import notification from "../assets/images/notification.png"
import RadioButton from 'primevue/radiobutton';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';
export default {
    components:{
        RadioButton,
        Checkbox,
        Button
    },
    data() {
        return {
            noteIcon:noteIcon,
            notification:notification,
            selectedType: null,
            assemblyType: [
                {text: 'Please select assembly type', value:null},
                {text: 'Complete Door', value:'Complete Door'},
                {text: 'Complete Door 1', value:'Complete Door 1'},
                {text: 'Complete Door 2', value:'Complete Door 2'},
                {text: 'Complete Door 3', value:'Complete Door 3'}
            ],
            selectedWidth1: null,
            width1: [
                {text: 'Please select width', value:null},
                {text: '3ft',value: '3ft'},
                {text: '4ft',value: '4ft'},
                {text: '5ft',value: '5ft'},
                {text: '6ft',value: '6ft'}
            ],
            selectedWidth2: null,
            width2: [
                {text: 'Please select width', value:null},
                {text: '3ft',value: '3ft'},
                {text: '4ft',value: '4ft'},
                {text: '5ft',value: '5ft'},
                {text: '6ft',value: '6ft'}
            ],
            selectedHeigth1: null,
            heigth1: [
                {text: 'Please select height', value:null},
                {text: '3ft',value: '3ft'},
                {text: '4ft',value: '4ft'},
                {text: '5ft',value: '5ft'},
                {text: '6ft',value: '6ft'}
            ],
            selectedHeigth2: null,
            heigth2: [
                {text: 'Please select height', value:null},
                {text: '3ft',value: '3ft'},
                {text: '4ft',value: '4ft'},
                {text: '5ft',value: '5ft'},
                {text: '6ft',value: '6ft'}
            ],
            selectedWindcode:null,
            windCode: [
                {text: 'Please select wind code', value:null},
                {text: 'WindCode W1',value: 'WindCode W1'},
                {text: 'WindCode W2',value: 'WindCode W2'},
                {text: 'WindCode W3',value: 'WindCode W3'},
                {text: 'WindCode W4',value: 'WindCode W4'}
            ],
            selectedDesign:null,
            design: [
                {text: 'Please select design', value:null},
                {text: 'CC',value: 'CC'},
                {text: 'BB',value: 'BB'},
                {text: 'AA',value: 'AA'}
            ],
            selectedColor:null,
            color: [
                {text: 'Please select color', value:null},
                {text: 'Dark Finish',value: 'Dark Finish'},
                {text: 'light Finish',value: 'light Finish'},
                {text: 'Medium Dark Finish',value: 'Medium Dark Finish'}
            ],
            selectedGlassType:null,
            glassType: [
                {text: 'Please select glass type', value:null},
                {text: 'Solid (No Windows)',value: 'Solid (No Windows)'},
                {text: 'Solid',value: 'Solid'},
            ],
            selectedSection:null,
            section: [
                {text: 'Please select section', value:null},
                {text: 'Section 1',value: 'Section 1'},
                {text: 'Section 2',value: 'Section 2'}
            ],
            selectedFraming:null,
            framing: [
                {text: 'Please select section', value:null},
                {text: 'Arch 1 Design',value: 'Arch 1 Design'},
                {text: 'Arch 2 Design',value: 'Arch 2 Design'}
            ],
            selectedSpring:null,
            spring: [
                {text: 'Please select section', value:null},
                {text: 'Galvanized Torsion',value: 'Galvanized Torsion'},
                {text: 'Galvanized Torsion 1',value: 'Galvanized Torsion 1'}
            ],
            selectedTrackSize:null,
            trackSize: [
                {text: 'Please select track size', value:null},
                {text: '2” Flag & Jamb Brackets Loose',value: 'Galvanized Torsion'},
                {text: '3” Flag & Jamb Brackets Loose',value: 'Galvanized Torsion 1'}
            ],
            selectedTrackMount:null,
            trackMount: [
                {text: 'Please select track mount', value:null},
                {text: 'Bracket',value: 'Bracket'},
                {text: 'Bracket 1',value: 'Bracket 1'}
            ],
            selectedTrackLift:null,
            trackLift: [
                {text: 'Please select track lift', value:null},
                {text: 'Standard',value: 'Standard walder door'},
                {text: 'Normal',value: 'Normal 2 entry door'}
            ],
            selectedTrackRadius:null,
            trackRadius: [
                {text: 'Please select track radius', value:null},
                {text: '12” Radius',value: '12” Radius'},
                {text: '13” Radius',value: '13” Radius'}
            ],
            selectedLock:null,
            lock: [
                {text: 'Please select track lock', value:null},
                {text: 'Inside Slide Lock (#2)',value: 'Inside Slide Lock (#2)'},
                {text: 'Inside Slide Lock (#3)',value: 'Inside Slide Lock (#3)'}
            ],
            locOptions: "No Lock Hole",
            selectedPackaging:null,
            packaging: [
                {text: 'Please select packaging', value:null},
                {text: '[x] Distributor', value: '[x] Distributor'},
                {text: '[y] Distributor',value: '[y] Distributor'}
            ],
            selectedExtraStrunt:null,
            extraStrunt: [
                {text: 'Please select extra strunt', value:null},
                {text: '5 Extra Struts', value: '5 Extra Struts'},
                {text: '4 Extra Struts',value: '4 Extra Struts'}
            ],
            selectedCategories: [],
            categories: [
                {name: 'Extra Strut(s)', key: 'A'},
                {name: 'Spade Strap Hinge(s)', key: 'B'},
                {name: '14 GA Quiet Hinge', key: 'C'},
                {name: 'Less Bottom Astragal', key: 'D'},
                {name: 'Gold Bar Gurantee (Select Dealers)', key: 'E'},
                {name: 'Medallion Hardware Upgrade ', key: 'F'},
                {name: 'Light Seal Kit', key: 'G'},
                {name: 'Slide Lock Mounted at 54” ', key: 'H'},
                {name: '2 Spear Lift Handles” ', key: 'I'}
            ]
        }
    },
    methods:{
        addToCart(){
            const configureDoorOptionsData = {
                assemblyType:this.selectedType,
                width1:this.selectedWidth1,
                width2:this.selectedWidth2,
                heigth1:this.selectedHeigth1,
                heigth2:this.selectedHeigth2,
                windCode:this.selectedWindcode,
                design:this.selectedDesign,
                color:this.selectedColor,
                glassType:this.selectedGlassType,
                section:this.selectedSection,
                framing:this.selectedFraming,
                spring:this.selectedSpring,
                trackSize:this.selectedTrackSize,
                trackMount:this.selectedTrackMount,
                trackLift:this.selectedTrackLift,
                trackRadius:this.selectedTrackRadius,
                lockItem:this.selectedLock,
                packagingItem:this.selectedPackaging,
                extraStruntItem:this.selectedExtraStrunt,
                cartName:"Johnson_Classic14209123"
            }
            const configureDoorData = JSON.parse(sessionStorage.getItem('configureDoorData'));
            const configureNewDoorData = configureDoorOptionsData; 
            const mergeConfigureData = {...configureDoorData , ...configureNewDoorData};
            sessionStorage.setItem('mergedCartData', JSON.stringify(mergeConfigureData));
        }
    }
};
</script>

<style>
.configure-new-door-container .card-header{
    background: #E4E4E4 !important;
    padding: 1rem !important;
}
</style>
