
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Actions from "../../../../shared/actions/actions"
import PageHeader from "../../../../shared/header/header"
import LiveSearch from "../../../../shared/search/search"
import { brand_list } from "../../../../fake-db/brands"


import "./brands-templates-list.css"
import { Box, Tab, Tabs } from "@mui/material"
import BrandTemplateDetails from "../brand-template-details/brand-template-details"
import { completedTemplatesColumns, draftTemplatesColumns, editionTemplatesColumns, fromClientTemplatesColumns, unModeratedTemplatesColumns } from "./column-definitions"
import BrandTemplateNew from "../brand-template-new/brand-template-new"


const brands = brand_list






const BrandsTemplatesList = () => {
   const [value, setValue] = useState(0);
   const [selected, setSelected] = useState(null)
   const navigate = useNavigate()




   const onAddNew = () => {
      console.log('To add brand')
      navigate('/products/brands/new')
   }

   const onEdit = () => {
      console.log('go to edit')
   }

   const onDelete = (selected: any) => {
      console.log('Deleting brand', selected)
   }

   const onSearch = (searchValue: any) => {
      console.log(searchValue)
   }


   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
   };
   return (
      <div className="page-content brands-list-page">
         <div className="header">
            <PageHeader title="Brand Templates" />
         </div>

         <div className="search">
            {/* <LiveSearch search={onSearch} /> */}
         </div>

         <div className="actions">
            <Actions delete={() => { onDelete(selected) }} add={onAddNew} edit={onEdit} />
         </div>

         <div className=" list">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
               <Tabs scrollButtons={true} allowScrollButtonsMobile value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Drafts" {...a11yProps(0)} />
                  <Tab label="UnModerated" {...a11yProps(1)} />
                  <Tab label="Completed" {...a11yProps(2)} />
                  <Tab label="Clients'" {...a11yProps(3)} />
                  <Tab label="Editions" {...a11yProps(4)} />
               </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
               <DataGrid
                  rows={brands}
                  columns={draftTemplatesColumns}
                  density="standard"
                  onRowClick={(data: any) => { setSelected(data.row) }}
               />
            </CustomTabPanel>


            <CustomTabPanel value={value} index={1}>
               <DataGrid
                  rows={brands}
                  columns={unModeratedTemplatesColumns}
                  density="standard"
                  onRowClick={(data: any) => { setSelected(data.row) }}
               />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
               <DataGrid
                  rows={brands}
                  columns={completedTemplatesColumns}
                  density="standard"
                  onRowClick={(data: any) => { setSelected(data.row) }}
               />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
               <DataGrid
                  rows={brands}
                  columns={fromClientTemplatesColumns}
                  density="standard"
                  onRowClick={(data: any) => { setSelected(data.row) }}
               />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
               <DataGrid
                  rows={brands}
                  columns={editionTemplatesColumns}
                  density="standard"
                  onRowClick={(data: any) => { setSelected(data.row) }}
               />
            </CustomTabPanel>

         </div>

         <div className="prev">
            {/* {selected && <BrandTemplateDetails brand={selected} actions={value} />} */}
            {BrandTemplateNew()}
         </div>


      </div>
   )
}

export default BrandsTemplatesList

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