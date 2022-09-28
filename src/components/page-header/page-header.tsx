import "./page-header.css"

const PageHeader = (props: any) => {
    return (<div className="page-header">
        {props.title ? props.title : 'Page title'}
    </div>)
}

export default PageHeader