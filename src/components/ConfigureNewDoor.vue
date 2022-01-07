<template>
    <div class="container mt-4 configure-main-container">
        <div class="card-width">
            <b-card class="shadow-sm rounded mb-3">
                <div class="configure-container">
                    <div class="row align-items-center mb-3">
                        <div class="col-12 col-md-4 col-lg-4 text-start">
                            <p class="mb-0 md-grey">Select Category</p>
                        </div>
                        <div class="col-12 col-md-8 col-lg-8 mt-2 mt-sm-0 mt-md-0 mt-lg-0">
                            <b-form-select  v-model="selectedCategory" class="width-75" :options="categories"></b-form-select>
                        </div>
                    </div>
                    <div class="row align-items-center mb-3">
                        <div class="col-12 col-md-4 col-lg-4 text-start">
                            <p class="mb-0 md-grey me-2 d-inline">Select Series</p>
                            <img :src="noteIcon" class="opacity-25"/>
                        </div>
                        <div class="col-12 col-md-8 col-lg-8 mt-2 mt-sm-0 mt-md-0 mt-lg-0">
                            <b-form-select  v-model="selectedSeries" class="width-75" :options="series"></b-form-select>
                        </div>
                    </div>
                    <div class="row align-items-center mb-3">
                       <div class="col-12 col-md-4 col-lg-4 text-start">
                            <p class="mb-0 md-grey me-2 d-inline">Door Type</p>
                            <img :src="noteIcon" class="opacity-25"/>
                        </div>
                        <div class="col-12 col-md-8 col-lg-8 mt-2 mt-sm-0 mt-md-0 mt-lg-0">
                            <b-form-select  v-model="selectedDoorType" class="width-75" :options="doorType"></b-form-select>
                        </div>
                    </div>
                    <div class="row align-items-center mb-3">
                        <div class="col-12 col-md-4 col-lg-4 text-start">
                            <p class="mb-0 md-grey">Enter name</p>
                        </div>
                        <div class="col-12 col-md-8 col-lg-8 mt-2 mt-sm-0 mt-md-0 mt-lg-0">
                            <b-form-input
                            v-model="createdBy"
                            type="text"
                            placeholder="Enter name"
                            class="my-1 width-75"
                            ></b-form-input>
                        </div>
                    </div>
                    <div class="row align-items-center mb-3">
                         <div class="col-12 col-md-4 col-lg-4 text-start">
                            <p class="mb-0 md-grey">Expiry date</p>
                        </div>
                        <div class="col-12 col-md-8 col-lg-8 mt-2 mt-sm-0 mt-md-0 mt-lg-0">
                            <b-form-input
                            v-model="expiry"
                            type="text"
                            placeholder="Expiry date"
                            class="my-1 width-75"
                            ></b-form-input>
                        </div>
                    </div>
                </div>
                <template #footer>
                    <div class="display-flex justify-content-end">
                        <router-link to="/configureNewDoorOptions">
                            <Button label="CONFIGURE" class="btn-brown width-75 width-100" @click="configureDoorItem()" />
                        </router-link>
                    </div>
                </template>
            </b-card>
        </div>
    </div>
</template>

<script>
import Button from 'primevue/button';
import noteIcon from "../assets/images/note.png"
export default {
    components:{
        Button
    },
    data() {
        return {
            noteIcon:noteIcon,
            createdBy:"",
            expiry:"",
            selectedCategory: null,
            categories: [
                {text: 'Please select category', value: null, },
                {text: 'Residential Door', value:"Residential Door"},
                {text: 'Residential Steel Door', value:"Residential Steel Door"},
                {text: 'Residential Wood Door', value:"Residential Wood Door"},
                {text: 'Residential Door 1', value:"Residential Door 1"}
            ],
            selectedSeries: null,
            series: [
                {text: 'Please select series', value: null, },
                {text: 'Canyon Ridge® Collection', value:"Canyon Ridge® Collection"},
                {text: 'series 2', value:"series 2"},
                {text: 'series 3', value:"series 3"},
                {text: 'series 4', value:"series 4"}
            ],
            selectedDoorType: null,
            doorType: [
                {text: 'Please select door type', value: null, },
                {text: 'CAN212', value: 'CAN212'},
                {text: 'CAN213', value: 'CAN213'},
                {text: 'CAN214', value: 'CAN214'},
                {text: 'CAN215', value: 'CAN215'}
            ]
        }
    },
    methods:{
        configureDoorItem(){
            debugger;
            const mergeCategory = [this.selectedCategory,this.selectedSeries,this.selectedDoorType];
            let finalMergedCategory = mergeCategory.join();
            const configureData = {
                category:finalMergedCategory,
                createdBy:this.createdBy,
                expiry:this.expiry
            }
            sessionStorage.setItem('configureDoorData', JSON.stringify(configureData));
        }
    }

}
</script>