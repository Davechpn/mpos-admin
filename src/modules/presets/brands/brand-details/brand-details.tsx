import { Brand } from "../../../../types/brand"

const BrandDetails = (props: any) => {
    const brand: Brand = props?.brand?.row
    console.log(brand)
    return (
        <div>
            <div className="text-lg">{brand.name}</div>
            <table>
                <tbody>
                    <tr>

                        <td></td>
                        <td>
                            <img src={brand.image} style={{ width: '75px', }} />

                        </td>
                    </tr>
                    <tr>
                        <td>Category</td>
                        <td>{brand.category}</td>
                    </tr>
                    <tr>
                        <td>Producer</td>

                        <td>{brand.producer}</td>
                    </tr>
                    <tr>
                        <td>Street address</td>

                        <td>{brand.street_address}</td>
                    </tr>
                    <tr>
                        <td>City</td>

                        <td>{brand.city}</td>

                    </tr>
                    <tr>
                        <td>Country</td>

                        <td>{brand.country}</td>
                    </tr>

                    <tr>
                        <td>Website </td>

                        <td>{brand.website}</td>
                    </tr>

                    <tr>
                        <td>Sizes</td>
                        {brand.sizes?.map((size) => <div>{size}</div>)}
                    </tr>
                    <tr>
                        <td>Varieties</td>
                        <td>{brand.varieties?.map(v => <div>{v}</div>)}</td>

                    </tr>

                    <td>contacts</td>


                </tbody>

            </table>

            <div>

            </div>
        </div>
    )
}

export default BrandDetails