import { Box, Tab, Tabs } from "@mui/material"
import PageHeader from "../../../shared/header/header"
import "./features-container.css"
import { DataGrid } from "@mui/x-data-grid"
import { useState } from "react"
import { features } from "../../../fake-db/features"
import { Feature } from "../../../types/feature"
import { Packages } from "../../../fake-db/packages"
import { Package } from "../../../types/package"
import { Promotion } from "../../../types/promotion"
import { promotions } from "../../../fake-db/promotions"
import Actions from "../../../shared/actions/actions"
import { allFeaturesColumns, packagesColumns, promotionsColumns } from "./features-column-definitions"
import FeatureForm from "./features/feature-form"
import { PackageForm } from "./packages/package.form"
import PromotionsForm from "./promotions/promotions-form"



const FeaturesContainer = () => {
   const [value, setValue] = useState(0);
   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
   };

   const all_features: Feature[] = features;
   const packages: Package[] = Packages
   const promos:Promotion[] = promotions
   const onNew = () => {
      console.log('To add brand')

   }

   const onEdit = () => {
      console.log('go to edit')
   }

   const onDelete = (selected: any) => {
      console.log('Deleting brand', selected)
   }
   return (
      <div className="page-content premiums-list-page">
         <div className="header">
            <PageHeader title="Features" />
         </div>

         <div className=" actions">
            <Actions add={onNew} edit={onEdit} delete={onDelete} />
          </div>
         <div className=" list">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
               <Tabs scrollButtons={true} allowScrollButtonsMobile value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Features" {...a11yProps(0)} />
                  <Tab label="Packages" {...a11yProps(1)} />
                  <Tab label="Promos" {...a11yProps(2)} />
               </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
               <DataGrid
                  rows={all_features}
                  columns={allFeaturesColumns}
                  density='compact'
                  onRowClick={({ row }) => { }}
               />
            </CustomTabPanel>


            <CustomTabPanel value={value} index={1}>
               <DataGrid
                  rows={packages}
                  columns={packagesColumns}
                  density='compact'
                  onRowClick={({ row }) => { }}
               />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
            <DataGrid
                  rows={promos}
                  columns={promotionsColumns}
                  density='compact'
                  onRowClick={({ row }) => { }}
               />
            </CustomTabPanel>

         </div>
         <div className="prev">
          {[ <FeatureForm/>,
            <PackageForm/>,
           <PromotionsForm/>][value]}
         </div>
      </div>
   )
}

export default FeaturesContainer

interface TabPanelProps {
   children?: React.ReactNode;
   index: number;
   value: number;
}

function CustomTabPanel(props: TabPanelProps) {
   const { children, value, index, ...other } = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === index && (
            <div style={{ height: "Calc(100vh - 300px)" }}>
               {children}
            </div>
         )}
      </div>
   );
}

function a11yProps(index: number) {
   return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
   };
}