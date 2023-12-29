import glitchStyles from "./PageHeader.module.css"

function PageHeader(props) {
    return (
        <div className={`${glitchStyles["glitch-header"]} ${glitchStyles["glitch-header-wrapper"]}`} id="about-header">
            <span aria-hidden="true">{props.title}</span>
                {props.title}
            <span aria-hidden="true">{props.title}</span>
        </div>
    )
}

export default PageHeader;