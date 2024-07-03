
interface setupLayoutProp{
    children:React.ReactNode;
}

const setupLayout = ({children}:setupLayoutProp) => {
    return <div> {children}</div>
}

export default setupLayout;