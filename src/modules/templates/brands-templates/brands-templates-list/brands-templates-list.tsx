
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Actions from "../../../../shared/actions/actions"
import PageHeader from "../../../../shared/header/header"
import LiveSearch from "../../../../shared/search/search"
import { brand_list } from "../../../../fake-db/brands"


import "./brands-templates-list.css"
import { Box, Tab, Tabs } from "@mui/material"

import { completedTemplatesColumns, draftTemplatesColumns,unModeratedTemplatesColumns } from "./templates-column-definitions"
import { BrandTemplate } from "../../../../types/brand"
import BrandTemplateActions from "../brand-template-actions/brand-template-actions"
import BrandTemplateForm from "../brand-template-form/brand-template-form"
import { SidePaneView } from "../../../../types/layout"



const brands = brand_list



const BrandsTemplatesList = () => {
   const [value, setValue] = useState(0);
   const [selectedTemplate, setSelectedTemplate] = useState<BrandTemplate | null>(null)
   const [sidePaneView, setSidePaneView] = useState(SidePaneView.New)
   const navigate = useNavigate()

   useEffect(() => {
      selectedTemplate && setSidePaneView(SidePaneView.Actions);
   }, [selectedTemplate])


   const onNew = () => {
      console.log('To add brand')

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
            <Actions
               delete={sidePaneView === SidePaneView.Actions?() => { onDelete(selectedTemplate) }:null}
               add={sidePaneView === SidePaneView.New ? null : () => setSidePaneView(SidePaneView.New)}
               edit={selectedTemplate && sidePaneView === SidePaneView.Actions ? () => setSidePaneView(SidePaneView.Edit) : null} 
               cancel={selectedTemplate && (sidePaneView === SidePaneView.Edit || sidePaneView === SidePaneView.New ) ? () => setSidePaneView(SidePaneView.Actions) : null} />
         </div>

         <div className=" list">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
               <Tabs scrollButtons={true} allowScrollButtonsMobile value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Drafts" {...a11yProps(0)} />
                  <Tab label="In Review" {...a11yProps(1)} />
                  <Tab label="Completed" {...a11yProps(2)} />
               </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
               <DataGrid
                  rows={brands}
                  columns={draftTemplatesColumns}
                  density='compact'
                  onRowClick={({ row }) => { setSelectedTemplate(row) }}
               />
            </CustomTabPanel>


            <CustomTabPanel value={value} index={1}>
               <DataGrid
                  rows={brands}
                  columns={unModeratedTemplatesColumns}
                  density='compact'
                  onRowClick={({ row }) => { setSelectedTemplate(row) }}
               />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
               <DataGrid
                  rows={brands}
                  columns={completedTemplatesColumns}
                  density='compact'
                  onRowClick={({ row }) => { setSelectedTemplate(row) }}
               />
            </CustomTabPanel>
        
         </div>

         <div className="prev">
            {sidePaneView === SidePaneView.New && <BrandTemplateForm template={null} />}
            {sidePaneView === SidePaneView.Edit && <BrandTemplateForm template={selectedTemplate ?? null} />}
            {sidePaneView === SidePaneView.Actions && <BrandTemplateActions template={selectedTemplate} actionsIndex={value} />}
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