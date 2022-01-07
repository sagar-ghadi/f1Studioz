<template>
  <div>
    <div class="main-tab-container">
      <TabView>
        <TabPanel header="CARTS">
          <div>
            <b-tabs pills card class="p-0">
              <b-tab title="Active Carts" active>
                <b-card-text>
                  <div class="data-table-container position-relative">
                    <DataTable
                      :value="finalCartItem"
                      class="p-datatable-striped"
                      responsiveLayout="scroll"
                    >
                      <Column
                        v-for="col of columns"
                        :field="col.field"
                        :header="col.header"
                        :key="col.field"
                        sortable
                      ></Column>
                    </DataTable>
                    <router-link to="/createNewOrder">
                      <Button
                        icon="pi pi-plus"
                        class="p-button-rounded p-button-danger add-btn"
                      />
                    </router-link>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Archived Carts">
                <b-card-text>Tab contents 2</b-card-text>
              </b-tab>
            </b-tabs>
          </div>
        </TabPanel>
        <TabPanel header="FAVORITES"> FAVORITES </TabPanel>
      </TabView>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
export default {
  name: "Home",
  components: {
    TabView,
    TabPanel,
    DataTable,
    Column,
    Button,
  },
  data() {
    return {
      columns: null,
      products: null,
      finalCartItem: [],
    };
  },
  computed: {
    ...mapGetters({
      getCartItemDetails: "getCartItemDetails",
    }),
  },
  watch: {
    getCartItemDetails: {
      deep: true,
      immediate: true,
      handler: function (newValue) {
        this.finalCartItem = newValue;
      },
    },
  },
  created() {
    this.columns = [
      { field: "category", header: "Product Information" },
      { field: "cartName", header: "Cart Name" },
      { field: "trackSize", header: "Shipping Point" },
      { field: "createdBy", header: "Created by" },
      { field: "expiry", header: "Expiry" },
    ];
  },
};
</script>
<style>
.main-tab-container .p-tabview-nav {
  justify-content: center;
  background: #34495e;
  color: #fff;
}
.main-tab-container
  .p-tabview
  .p-tabview-nav
  li.p-highlight
  .p-tabview-nav-link {
  background: #34495e;
  color: #fff !important;
  border-color: #faca30;
}
.main-tab-container .p-tabview .p-tabview-nav li .p-tabview-nav-link {
  color: #6c757d !important;
}
.main-tab-container .p-tabview .p-tabview-nav li .p-tabview-nav-link {
  background: #34495e;
}
.main-tab-container
  .p-tabview
  .p-tabview-nav
  li
  .p-tabview-nav-link:not(.p-disabled):focus {
  box-shadow: none;
}
.main-tab-container
  .p-tabview
  .p-tabview-nav
  li:not(.p-highlight):not(.p-disabled):hover
  .p-tabview-nav-link {
  background: #34495e;
}
.main-tab-container .nav-pills .nav-link.active {
  color: #34495e;
  border-bottom: 3px solid #34495e;
  border-radius: 0px;
  opacity: 1;
  font-weight: 600;
}
.main-tab-container .nav-pills .nav-link {
  color: #62686e;
  opacity: 0.8;
  padding: 1.2rem 1rem;
}
.main-tab-container .p-tabview-panels {
  padding: 0;
  background: #f8f9fa;
}
.main-tab-container .nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  background: #f8f9fa;
}
.main-tab-container .card-header {
  padding-bottom: 0;
  background: #f8f9fa;
}
.main-tab-container .nav-link {
  color: #033568;
}
.data-table-container .p-datatable-responsive-scroll > .p-datatable-wrapper {
  box-shadow: 0 0 4px 0px #ddd;
  border-radius: 5px;
}
.data-table-container .p-datatable .p-sortable-column .p-column-title {
  text-transform: uppercase;
  font-size: 13px;
}
.add-btn {
  position: absolute;
  right: 5%;
  bottom: 0;
}
</style>
