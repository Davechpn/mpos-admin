
import { DataGrid } from "@mui/x-data-grid"
import { allFeaturesColumns } from "../features-column-definitions"
import { Feature } from "../../../../types/feature";
import { features } from "../../../../fake-db/features";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../../../contexts/socket.provider";




const FeatureList:React.FC<any> = () => {
   // const all_features: Feature[] = features;
   const [features, setFeatures] = useState([])
   const socket = useContext(SocketContext);

   const recievedFeatures = (f:any) => {
      console.log('features from socket',f)
      setFeatures(f)
   }
   const onConnect = () =>{
      console.log('connected')
   }

   useEffect(() => {

      socket.on("AllFeatures", recievedFeatures); 
      socket.emit("getAllFeatures")

      return () => {
        socket.off("AllFeatures", recievedFeatures);
      };
      
    }, []);
   
   return <DataGrid
                  rows={features}
                  columns={allFeaturesColumns}
                  density='compact'
                  onRowClick={({ row }) => { }}
               />  
}

export default FeatureList

