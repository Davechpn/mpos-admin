import { DataGrid } from "@mui/x-data-grid";
import { FunctionComponent } from "react";
import { Packages } from "../../../../fake-db/packages";
import { Package } from "../../../../types/package";
import { packagesColumns } from "../features-column-definitions";

const packages: Package[] = Packages
const PackageList: FunctionComponent<any> = () => {
    
    return <DataGrid
        rows={packages}
        columns={packagesColumns}
        density='compact'
        onRowClick={({ row }) => { }}
    />;
}

export default PackageList;